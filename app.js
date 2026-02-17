// app.js - Verb focus mode with drawer review
import { initFocusMode } from './focus-mode.js';
import verbsA1 from './js/verbs-db-a1.js';
import verbsA2 from './js/verbs-db-a2.js';
import verbsB1 from './js/verbs-db-b1.js';
import verbsB2 from './js/verbs-db-b2.js';
import verbsC1 from './js/verbs-db-c1.js';

const verbsDB = { a1: verbsA1, a2: verbsA2, b1: verbsB1, b2: verbsB2, c1: verbsC1 };

const levelBtns = document.querySelectorAll('.level-btn');
const searchInput = document.getElementById('search-input');
const verbCount = document.getElementById('verb-count');
const clearSearchBtn = document.getElementById('clear-search');

let currentLevel = 'a1';
let focusApi = null;

// ===== Saved words =====
const SAVED_KEY = 'savedWordsV1';
const getSaved = () => new Set(JSON.parse(localStorage.getItem(SAVED_KEY) || '[]'));
const setSaved = (set) => localStorage.setItem(SAVED_KEY, JSON.stringify([...set]));

function setSaveBtnState(btn, isSaved) {
  btn.textContent = isSaved ? '♥' : '♡';
  btn.classList.toggle('saved', isSaved);
}

renderCurrent();
updateCounts();

levelBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    levelBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.dataset.level;
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    renderCurrent();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (clearSearchBtn) clearSearchBtn.style.display = query ? 'block' : 'none';
    renderCurrent(query);
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    if (!searchInput) return;
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });
}

function renderCurrent(query = '') {
  const rootId = 'verbs-list';
  const root = document.getElementById(rootId);
  if (!root) return;
  root.classList.add('study-root');

  const list = filterVerbs(currentLevel, query);

  if (verbCount) {
    verbCount.textContent = `${list.length} ${list.length === 1 ? 'verb' : 'verbs'}`;
  }

  if (list.length === 0) {
    root.innerHTML = `<div class="no-results"><p>No verbs found${query ? ` matching "${escapeHtml(query)}"` : ' in this level'}</p></div>`;
    return;
  }

  focusApi = initFocusMode({
    rootId,
    items: list,
    level: currentLevel,
    storageKey: 'verbs',
    getId: (v) => `verbs:${currentLevel}:${getVerbBase(v)}`,
    getLabel: (v) => getVerbBase(v),
    renderCard: (v, idx) => createVerbCard(v, idx)
  });

  wireDrawerReview(focusApi);
  if (focusApi) focusApi.onChange = () => wireDrawerReview(focusApi);
}

/* ========================= Data extractors ========================= */

function filterVerbs(level, query) {
  const list = verbsDB[level] || [];
  if (!query) return list;
  return list.filter(v => {
    const forms = getForms(v);
    const searchText = [
      getVerbBase(v), getTypeText(v),
      asText(v.preposition), asText(v.prepositions),
      forms.present, forms.past, forms.partizip2, forms.aux,
      ...getTranslations(v), ...getExamples(v),
      ...getVariants(v).flatMap(x => typeof x === 'string' ? [x] : Object.values(x).map(asText))
    ].filter(Boolean).join(' ').toLowerCase();
    return searchText.includes(query);
  });
}

function getVerbBase(v) {
  const direct = v.base ?? v.infinitive ?? v.verb ?? v.word ?? v.lemma ?? v.name ?? v.title;
  if (isNonEmptyString(direct)) return direct.trim();
  const nested = v?.headword ?? v?.entry?.base ?? v?.entry?.infinitive ?? v?.verb?.base;
  if (isNonEmptyString(nested)) return nested.trim();
  return '—';
}

function getTypeText(v) {
  const parts = [];
  const raw = v.type ?? v.verbType ?? v.class ?? v.category;
  if (isNonEmptyString(raw)) parts.push(raw);
  if (v.reflexive === true || String(getVerbBase(v)).toLowerCase().startsWith('sich ')) parts.push('reflexive');
  if (v.strong === true) parts.push('strong');
  if (v.weak === true) parts.push('weak');
  if (v.irregular === true) parts.push('irregular');
  if (v.separable === true) parts.push('separable');
  return parts.filter(Boolean).join(', ');
}

function getForms(v) {
  const present = v.present ?? v.prasens ?? v.präsens ?? v.forms?.present ?? v?.principalParts?.[0];
  const past = v.past ?? v.prateritum ?? v.präteritum ?? v.forms?.past ?? v?.principalParts?.[1];
  const partizip2 = v.partizip2 ?? v.partizipII ?? v.participle ?? v.pp ?? v.forms?.partizip2 ?? v?.principalParts?.[2];
  const aux = v.aux ?? v.auxiliary ?? v.hilfsverb ?? v.forms?.aux;

  let p = asText(present), pa = asText(past), pp = asText(partizip2), a = asText(aux);

  // Try to parse from combined conjugation line
  const line = v.conjugationLine ?? v.conjugation ?? v.formsLine ?? v.principalPartsLine;
  if ((!p || p === '—') && line && typeof line === 'string') {
    const parts = line.split(',').map(s => s.trim()).filter(Boolean);
    if (parts.length >= 2) {
      p = parts[0] || p;
      pa = parts[1] || pa;
      if (parts[2]) {
        const m = parts[2].match(/^(hat|habe|haben|ist|bin|bist|sind|seid)\s+(.+)$/i);
        if (m) { a = a || m[1]; pp = pp || m[2]; } else { pp = pp || parts[2]; }
      }
    }
  }

  return { present: p || '—', past: pa || '—', partizip2: pp || '—', aux: a || '' };
}

function getTranslations(v) {
  const t = v.translations ?? v.meanings ?? v.translation ?? v.meaning ?? v.definition ?? v.definitions;
  if (Array.isArray(t)) return t.map(asText).filter(Boolean);
  if (t && typeof t === 'object') {
    const flat = [];
    for (const val of Object.values(t)) {
      if (Array.isArray(val)) flat.push(...val.map(asText));
      else if (isNonEmptyString(val)) flat.push(val);
    }
    return flat.filter(Boolean);
  }
  if (isNonEmptyString(t)) return [t];
  return [];
}

function getExamples(v) {
  const out = [];
  const ex = v.examples ?? v.sentences ?? v.example ?? v.usage;
  if (Array.isArray(ex)) out.push(...ex.map(asText).filter(Boolean));
  else if (isNonEmptyString(ex)) out.push(ex);
  if (Array.isArray(v.varieties)) {
    v.varieties.forEach(vr => {
      if (Array.isArray(vr.examples)) out.push(...vr.examples.map(asText).filter(Boolean));
      else if (isNonEmptyString(vr.examples)) out.push(vr.examples);
    });
  }
  return out;
}

function getVariants(v) {
  const va = v.variants ?? v.variant ?? v.alternatives ?? v.varieties;
  if (Array.isArray(va)) return va;
  if (va && typeof va === 'object') return [va];
  return [];
}

function asText(x) {
  if (x == null) return '';
  if (typeof x === 'string') return x;
  if (typeof x === 'number' || typeof x === 'boolean') return String(x);
  return '';
}

function isNonEmptyString(x) { return typeof x === 'string' && x.trim().length > 0; }

/* ========================= Card renderer ========================= */

function createVerbCard(v, idx) {
  const card = document.createElement('div');
  card.className = 'verb-card';

  const base = getVerbBase(v);
  const saveId = `verbs:${currentLevel}:${base}`;
  const typeText = getTypeText(v);
  const forms = getForms(v);
  const translations = getTranslations(v);
  const examples = getExamples(v);
  const variants = getVariants(v);
  const preps = asText(v.prepositions) || asText(v.preposition) || asText(v.prep);
  const prepHtml = preps ? `<span class="prep-badge">${escapeHtml(preps)}</span>` : '';

  // Build conjugation display line
  const conjParts = [forms.present, forms.past, forms.partizip2].filter(x => x && x !== '—');
  const conjDisplay = conjParts.length ? conjParts.join(', ') : '';

  card.innerHTML = `
    <div class="verb-header">
      <div>
        <div class="verb-base">${escapeHtml(base)}</div>
        ${typeText ? `<div class="reflexive-marker">${escapeHtml(typeText)}</div>` : ''}
      </div>
      <button class="save-btn" type="button" data-save-id="${escapeHtml(saveId)}" aria-label="Save">♡</button>
    </div>

    <div class="verb-forms">
      <div class="form-item">
        <span class="form-label">Present</span>
        <span class="form-value">${escapeHtml(forms.present)}</span>
      </div>
      <div class="form-item">
        <span class="form-label">Past</span>
        <span class="form-value">${escapeHtml(forms.past)}</span>
      </div>
      <div class="form-item" style="grid-column:1/-1;">
        <span class="form-label">Partizip II${forms.aux ? ` (${escapeHtml(forms.aux)})` : ''}</span>
        <span class="form-value">${escapeHtml(forms.partizip2)}</span>
      </div>
    </div>

    ${translations.length ? `
      <div class="verb-info">
        <span class="label">Translation:</span>
        <span class="value">${escapeHtml(translations.join(', '))}</span>
      </div>
    ` : ''}

    ${prepHtml ? `
      <div class="verb-info">
        <span class="label">Preposition:</span>
        <span class="value">${prepHtml}</span>
      </div>
    ` : ''}

    ${variants.length ? `
      <div class="variants-section">
        <h4>Varieties / Usages</h4>
        <ul class="variants-list">
          ${variants.map(vr => {
            if (typeof vr === 'string') return `<li>${escapeHtml(vr)}</li>`;
            const txt = vr.text || vr.name || vr.variant || vr.word || vr.meaning || '';
            const prep = vr.preps || vr.preposition || vr.prep || '';
            const ex = vr.example || vr.sentence || vr.examples || '';
            return `<li>
              ${escapeHtml(txt)}
              ${prep ? `<div class="variant-preps">${escapeHtml(String(prep))}</div>` : ''}
              ${ex ? `<div class="variant-example">${escapeHtml(Array.isArray(ex) ? ex.join(' | ') : String(ex))}</div>` : ''}
            </li>`;
          }).join('')}
        </ul>
      </div>
    ` : ''}

    ${examples.length ? `
      <div class="examples-section">
        <h4>Examples</h4>
        <ul class="examples-list">
          ${examples.slice(0, 4).map(ex => `<li>${escapeHtml(ex)}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
  `;

  const btn = card.querySelector('.save-btn');
  if (btn) {
    setSaveBtnState(btn, getSaved().has(saveId));
    btn.addEventListener('click', () => {
      const s = getSaved();
      if (s.has(saveId)) s.delete(saveId); else s.add(saveId);
      setSaved(s);
      setSaveBtnState(btn, s.has(saveId));
    });
  }

  return card;
}

/* ========================= Drawer review ========================= */

function wireDrawerReview(api) {
  if (!api) return;
  const st = api.getState?.();
  if (!st) return;

  const learnedHost = document.getElementById('drawerLearnedList');
  const unlearnedHost = document.getElementById('drawerUnlearnedList');

  if (learnedHost) {
    learnedHost.innerHTML = (st.learned || []).length
      ? st.learned.map(x => `<button class="drawer-item" data-jump="${x.i}">${escapeHtml(x.label)}</button>`).join('')
      : `<div class="drawer-empty">No learned words yet.</div>`;
  }

  if (unlearnedHost) {
    unlearnedHost.innerHTML = (st.unlearned || []).length
      ? st.unlearned.map(x => `<button class="drawer-item" data-jump="${x.i}">${escapeHtml(x.label)}</button>`).join('')
      : `<div class="drawer-empty">All learned 🎉</div>`;
  }

  document.querySelectorAll('[data-jump]').forEach(btn => {
    btn.onclick = () => api.jumpTo(parseInt(btn.dataset.jump, 10));
  });

  const markLearned = document.getElementById('btnMarkLearned');
  const markUnlearned = document.getElementById('btnMarkUnlearned');
  if (markLearned) markLearned.onclick = () => { api.setLearned?.(true); wireDrawerReview(api); };
  if (markUnlearned) markUnlearned.onclick = () => { api.setLearned?.(false); wireDrawerReview(api); };

  window.wireSaveButtons?.();
}

/* ========================= Utilities ========================= */

function updateCounts() {
  Object.keys(verbsDB).forEach(level => {
    const badge = document.getElementById(`count-${level}`);
    if (badge) badge.textContent = (verbsDB[level] || []).length;
  });
}

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
    if (!searchInput) return;
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === 'Escape' && searchInput && searchInput.value) {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
  }
});

function escapeHtml(s) {
  return String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

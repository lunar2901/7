// app.js - Verb focus mode with level dropdowns + save
import { initFocusMode } from './focus-mode.js';
import verbsA1 from './js/verbs-db-a1.js';
import verbsA2 from './js/verbs-db-a2.js';
import verbsB1 from './js/verbs-db-b1.js';
import verbsB2 from './js/verbs-db-b2.js';
import verbsC1 from './js/verbs-db-c1.js';

const verbsDB = { a1: verbsA1, a2: verbsA2, b1: verbsB1, b2: verbsB2, c1: verbsC1 };
const levelBtns = document.querySelectorAll('.level-btn');

let currentLevel = 'a1';
let focusApi = null;

// Saved words via shared.js
const { getSaved, setSaved, setSaveBtnState, wireSaveButtons, initSearchModal, registerPageItems } = window.SharedApp;

/* ========================= Styles (MUST be defined before first render) ========================= */

let __verbCardStylesInjected = false;

function injectVerbCardStylesOnce() {
  if (__verbCardStylesInjected) return;
  __verbCardStylesInjected = true;

  const css = `
  .verb-card{
    border:1px solid rgba(0,0,0,.08);
    border-radius:16px;
    padding:14px;
    background:#fff;
    box-shadow:0 6px 18px rgba(0,0,0,.06);
  }

  .verb-header{ display:flex; justify-content:space-between; align-items:flex-start; gap:12px; }
  .verb-base{ font-size:22px; font-weight:800; letter-spacing:.2px; }
  .reflexive-marker{ font-size:12px; opacity:.7; margin-top:2px; }

  .verb-info{ margin-top:10px; display:flex; gap:8px; align-items:flex-start; }
  .verb-info .label{ font-size:12px; opacity:.7; min-width:86px; }
  .verb-info .value{ font-size:13px; font-weight:600; }

  .pill-row{ margin-top:8px; display:flex; flex-wrap:wrap; gap:6px; }
  .pill{
    display:inline-flex; align-items:center; gap:6px;
    padding:5px 10px;
    border-radius:999px;
    background:rgba(0,0,0,.05);
    font-size:12px;
    font-weight:800;
  }

  .tabbar{ margin-top:12px; display:flex; gap:8px; }
  .tab-btn{
    border:1px solid rgba(0,0,0,.12);
    background:#fff;
    border-radius:999px;
    padding:6px 10px;
    font-size:12px;
    font-weight:900;
    cursor:pointer;
    user-select:none;
  }
  .tab-btn.active{ background:rgba(0,0,0,.06); }
  .tab-panel{ margin-top:12px; }
  .tab-panel[hidden]{ display:none !important; }

  .verb-forms{
    margin-top:2px;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:8px;
  }
  .form-item{ background:rgba(0,0,0,.03); border-radius:12px; padding:8px 10px; }
  .form-label{ display:block; font-size:11px; opacity:.65; margin-bottom:2px; }
  .form-value{ font-weight:800; }

  .section-title{
    font-size:12px;
    font-weight:900;
    letter-spacing:.3px;
    text-transform:uppercase;
    opacity:.7;
    margin:4px 0 10px;
  }

  details.variety{
    border:1px solid rgba(0,0,0,.10);
    border-radius:14px;
    padding:8px 10px;
    background:rgba(0,0,0,.02);
    margin-bottom:10px;
  }
  details.variety summary{
    cursor:pointer;
    font-weight:900;
    font-size:13px;
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:10px;
  }
  details.variety summary::-webkit-details-marker{ display:none; }

  .variety-meta{ margin-top:8px; display:flex; flex-wrap:wrap; gap:6px; }
  .meta-chip{
    background:rgba(0,0,0,.05);
    border-radius:999px;
    padding:4px 8px;
    font-size:12px;
    font-weight:800;
  }
  .variety-expl{ margin-top:8px; font-size:13px; opacity:.9; }
  .variety-examples{ margin:10px 0 0; padding-left:18px; }
  .variety-examples li{ margin:6px 0; }

  .save-btn{
    border:1px solid rgba(0,0,0,.12);
    background:#fff;
    border-radius:999px;
    padding:6px 10px;
    cursor:pointer;
    font-weight:900;
    user-select:none;
  }
  `;

  const style = document.createElement('style');
  style.setAttribute('data-verb-card-styles', '1');
  style.textContent = css;
  document.head.appendChild(style);
}

/* ========================= Build page items for global search ========================= */

function buildPageItems(level) {
  const list = verbsDB[level] || [];
  return list.map((v, i) => ({
    id: `verbs:${level}:${getVerbBase(v)}`,
    label: getVerbBase(v),
    translation: getTranslations(v).slice(0, 2).join(', '),
    index: i,
    level,
  }));
}

/* ========================= Init ========================= */

renderCurrent();
updateCounts();
buildAllDropdowns();

// Register page items and init search for current level
registerPageItems(buildPageItems(currentLevel));
initSearchModal((item) => {
  if (item.level !== currentLevel) {
    // switch level first, then jump
    const btn = document.querySelector(`.level-btn[data-level="${item.level}"]`);
    if (btn) btn.click();
    setTimeout(() => focusApi?.jumpTo(item.index), 50);
  } else {
    focusApi?.jumpTo(item.index);
  }
});

levelBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    levelBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.dataset.level;
    renderCurrent();
    registerPageItems(buildPageItems(currentLevel));
  });
});

function renderCurrent() {
  const rootId = 'verbs-list';
  const root = document.getElementById(rootId);
  if (!root) return;
  root.classList.add('study-root');

  const list = verbsDB[currentLevel] || [];

  if (list.length === 0) {
    root.innerHTML = `<div class="no-results"><p>No verbs in this level yet.</p></div>`;
    return;
  }

  focusApi = initFocusMode({
    rootId,
    items: list,
    level: currentLevel,
    storageKey: 'verbs',
    getId: (v) => `verbs:${currentLevel}:${getVerbBase(v)}`,
    getLabel: (v) => getVerbBase(v),
    renderCard: (v, idx) => createVerbCard(v, idx),
  });

  wireDrawerReview(focusApi);
  if (focusApi) focusApi.onChange = () => wireDrawerReview(focusApi);
}

/* ========================= Level dropdowns ========================= */

function buildAllDropdowns() {
  Object.entries(verbsDB).forEach(([level, items]) => {
    const dd = document.getElementById(`dropdown-${level}`);
    if (!dd || !items?.length) return;

    const frag = document.createDocumentFragment();
    items.forEach((v, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'level-dropdown-item';
      const base = getVerbBase(v);
      const trans = getTranslations(v)[0] || '';
      btn.innerHTML = `${escapeHtml(base)}<span class="ddi-translation">${escapeHtml(trans)}</span>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // don't trigger level-btn click twice
        // Switch level if needed
        if (level !== currentLevel) {
          const levelBtn = document.querySelector(`.level-btn[data-level="${level}"]`);
          if (levelBtn) {
            levelBtns.forEach(b => b.classList.remove('active'));
            levelBtn.classList.add('active');
            currentLevel = level;
            renderCurrent();
          }
        }
        setTimeout(() => focusApi?.jumpTo(i), 30);
      });
      frag.appendChild(btn);
    });
    dd.appendChild(frag);
  });
}

/* ========================= Data extractors ========================= */

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

  const line = v.conjugationLine ?? v.conjugation ?? v.formsLine ?? v.principalPartsLine;
  if ((!p || p === '—') && line && typeof line === 'string') {
    const parts = line.split(',').map(s => s.trim()).filter(Boolean);
    if (parts.length >= 2) {
      p = parts[0] || p;
      pa = parts[1] || pa;
      if (parts[2]) {
        const m = parts[2].match(/^(hat|habe|haben|ist|bin|bist|sind|seid)\s+(.+)$/i);
        if (m) { a = a || m[1]; pp = pp || m[2]; }
        else { pp = pp || parts[2]; }
      }
    }
  }
    // If present is missing, use first derived (ich-form) as present
  if ((!p || p === '—') && Array.isArray(v.derived) && v.derived[0]) {
    p = String(v.derived[0]).trim();
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

function isNonEmptyString(x) {
  return typeof x === 'string' && x.trim().length > 0;
}

/* ========================= Card renderer (Tabs + Collapsible varieties) ========================= */

function createVerbCard(v, idx) {
  injectVerbCardStylesOnce();

  const card = document.createElement('div');
  card.className = 'verb-card';

  const infinitive = getVerbBase(v);     // keep for ids/search/save
  const saveId = `verbs:${currentLevel}:${infinitive}`;

  const typeText = getTypeText(v);
  const forms = getForms(v);
  const translations = getTranslations(v);
  const variants = getVariants(v);

  // Display base as PRESENT form (ich-form), but keep infinitive as subtitle
  const displayBase = (forms.present && forms.present !== '—') ? forms.present : infinitive;

  // Derived as plain text (not pills)
  const mainDerived = Array.isArray(v.derived) ? v.derived : [];
  const derivedText = mainDerived.length ? mainDerived.join(' | ') : '';

  // Non-collapsible varieties
  const varietiesHtml = (Array.isArray(variants) ? variants : []).map((vr) => {
    if (typeof vr === 'string') {
      return `
        <div class="variety-block">
          <div class="variety-title">${escapeHtml(vr)}</div>
        </div>
      `;
    }

    const title = vr.variant || vr.name || vr.text || 'Usage';
    const explanation = vr.explanation || '';
    const prepsArr = Array.isArray(vr.prepositions) ? vr.prepositions : [];
    const derivedArr = Array.isArray(vr.derived) ? vr.derived : [];
    const exArr = Array.isArray(vr.examples)
      ? vr.examples
      : (vr.examples ? [String(vr.examples)] : []);

    return `
      <div class="variety-block">
        <div class="variety-title">${escapeHtml(title)}</div>

        ${(prepsArr.length || derivedArr.length) ? `
          <div class="variety-meta">
            ${prepsArr.length ? `<span class="meta-chip">Prep: ${escapeHtml(prepsArr.join(', '))}</span>` : ''}
            ${derivedArr.length ? `<span class="meta-chip">Derived: ${escapeHtml(derivedArr.join(' | '))}</span>` : ''}
          </div>
        ` : ''}

        ${explanation ? `<div class="variety-expl">${escapeHtml(explanation)}</div>` : ''}

        ${exArr.length ? `
          <ul class="variety-examples">
            ${exArr.map(ex => `<li>${escapeHtml(ex)}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `;
  }).join('');

  card.innerHTML = `
    <div class="verb-header">
      <div>
        <div class="verb-base">${escapeHtml(displayBase)}</div>
        <div class="verb-sub">${escapeHtml(infinitive)}</div>
        ${typeText ? `<div class="reflexive-marker">${escapeHtml(typeText)}</div>` : ''}
      </div>

      <button class="save-btn" type="button"
        data-save-id="${escapeHtml(saveId)}"
        data-save-label="${escapeHtml(infinitive)}"
        data-save-trans="${escapeHtml(translations[0] || '')}"
        data-save-url="index.html"
        aria-label="Save">♡</button>
    </div>

    ${translations.length ? `
      <div class="verb-info">
        <span class="label">Translation</span>
        <span class="value">${escapeHtml(translations.join(', '))}</span>
      </div>` : ''}

    ${derivedText ? `
      <div class="verb-info">
        <span class="label">Derived</span>
        <span class="value">${escapeHtml(derivedText)}</span>
      </div>` : ''}

    <div class="forms-section">
      <div class="section-title">Forms</div>
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
    </div>

    <div class="usage-section">
      <div class="section-title">Varieties</div>
      ${varietiesHtml || `<div style="opacity:.7;font-weight:800;">No varieties listed for this verb yet.</div>`}
    </div>
  `;

  // Wire save button via SharedApp (unchanged)
  const btn = card.querySelector('.save-btn');
  if (btn) {
    setSaveBtnState(btn, getSaved().has(saveId));
    btn.addEventListener('click', () => {
      const s = getSaved();
      const m = window.SharedApp.getMeta();
      if (s.has(saveId)) { s.delete(saveId); delete m[saveId]; }
      else { s.add(saveId); m[saveId] = { label: infinitive, translation: translations[0] || '', url: 'index.html' }; }
      setSaved(s);
      window.SharedApp.setMeta(m);
      setSaveBtnState(btn, s.has(saveId));
    });
  }

  return card;
}


/* ========================= Drawer ========================= */

function wireDrawerReview(api) {
  if (!api) return;
  const st = api.getState?.();
  if (!st) return;

  const learnedHost   = document.getElementById('drawerLearnedList');
  const unlearnedHost = document.getElementById('drawerUnlearnedList');

  if (learnedHost) {
    learnedHost.innerHTML = st.learned?.length
      ? st.learned.map(x => `<button class="drawer-item" data-jump="${x.i}">${escapeHtml(x.label)}</button>`).join('')
      : `<div class="drawer-empty">No learned words yet.</div>`;
  }
  if (unlearnedHost) {
    unlearnedHost.innerHTML = st.unlearned?.length
      ? st.unlearned.map(x => `<button class="drawer-item" data-jump="${x.i}">${escapeHtml(x.label)}</button>`).join('')
      : `<div class="drawer-empty">All learned 🎉</div>`;
  }

  document.querySelectorAll('[data-jump]').forEach(btn => {
    btn.onclick = () => api.jumpTo(parseInt(btn.dataset.jump, 10));
  });

  const markLearned   = document.getElementById('btnMarkLearned');
  const markUnlearned = document.getElementById('btnMarkUnlearned');
  if (markLearned)   markLearned.onclick   = () => { api.setLearned?.(true);  wireDrawerReview(api); };
  if (markUnlearned) markUnlearned.onclick = () => { api.setLearned?.(false); wireDrawerReview(api); };
}

/* ========================= Utilities ========================= */

function updateCounts() {
  Object.keys(verbsDB).forEach(level => {
    const badge = document.getElementById(`count-${level}`);
    if (badge) badge.textContent = (verbsDB[level] || []).length;
  });
}

function escapeHtml(s) {
  return String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

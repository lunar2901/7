// nouns.js - Focus mode with level dropdowns + save
import nounsA1 from './js/nouns-db-a1.js';
import nounsA2 from './js/nouns-db-a2.js';
import nounsB1 from './js/nouns-db-b1.js';
import nounsB2 from './js/nouns-db-b2.js';
import nounsC1 from './js/nouns-db-c1.js';
import { initFocusMode } from './focus-mode.js';

const DB = { a1: nounsA1, a2: nounsA2, b1: nounsB1, b2: nounsB2, c1: nounsC1 };
const levelBtns = document.querySelectorAll('.level-btn');

let currentLevel = 'a1';
let focusApi = null;

const { getSaved, setSaved, setSaveBtnState, initSearchModal, registerPageItems } = window.SharedApp;

function getArticle(noun) {
  return noun.gender === 'm' ? 'der' : noun.gender === 'f' ? 'die' : noun.gender === 'n' ? 'das' : '';
}

function getLabel(noun) {
  const word = noun.word || '—';
  // If word already starts with an article, use as-is
  if (/^(der|die|das)\s/i.test(word)) return word;
  const art = getArticle(noun);
  return art ? `${art} ${word}` : word;
}

function buildPageItems(level) {
  return (DB[level] || []).map((noun, i) => ({
    id: `nouns:${level}:${noun.word}`,
    label: getLabel(noun),
    translation: (noun.translations || [])[0] || '',
    index: i, level,
  }));
}

renderCurrent();
updateCounts();
buildAllDropdowns();
registerPageItems(buildPageItems(currentLevel));
initSearchModal((item) => {
  if (item.level !== currentLevel) {
    const btn = document.querySelector(`.level-btn[data-level="${item.level}"]`);
    if (btn) { levelBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); currentLevel = item.level; renderCurrent(); }
  }
  setTimeout(() => focusApi?.jumpTo(item.index), 30);
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
  const root = document.getElementById('study-root');
  if (!root) return;
  root.classList.add('study-root');

  const list = DB[currentLevel] || [];
  const countEl = document.getElementById('noun-count');
  if (countEl) countEl.textContent = `${list.length} ${list.length === 1 ? 'noun' : 'nouns'}`;

  if (!list.length) {
    root.innerHTML = `<div class="no-results"><p>No nouns in this level yet.</p></div>`;
    return;
  }

  focusApi = initFocusMode({
    rootId: 'study-root',
    items: list,
    level: currentLevel,
    storageKey: 'nouns',
    getId: (n) => `nouns:${currentLevel}:${n.word}`,
    getLabel: (n) => getLabel(n),
    renderCard: (n) => createCard(n),
  });

  wireDrawerReview(focusApi);
  if (focusApi) focusApi.onChange = () => wireDrawerReview(focusApi);
}

function buildAllDropdowns() {
  Object.entries(DB).forEach(([level, items]) => {
    const dd = document.getElementById(`dropdown-${level}`);
    if (!dd || !items?.length) return;
    const frag = document.createDocumentFragment();
    items.forEach((noun, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'level-dropdown-item';
      const label = getLabel(noun);
      const trans = (noun.translations || [])[0] || '';
      btn.innerHTML = `${esc(label)}<span class="ddi-translation">${esc(trans)}</span>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (level !== currentLevel) {
          const levelBtn = document.querySelector(`.level-btn[data-level="${level}"]`);
          if (levelBtn) { levelBtns.forEach(b => b.classList.remove('active')); levelBtn.classList.add('active'); currentLevel = level; renderCurrent(); }
        }
        setTimeout(() => focusApi?.jumpTo(i), 30);
      });
      frag.appendChild(btn);
    });
    dd.appendChild(frag);
  });
}

function createCard(noun) {
  const card = document.createElement('div');
  card.className = 'verb-card';
  const saveId = `nouns:${currentLevel}:${noun.word}`;
  const label = getLabel(noun);
  const art = getArticle(noun);
  const trans = (noun.translations || []).join(', ') || '—';

  card.innerHTML = `
    <div class="verb-header">
      <div>
        <div class="verb-base">${esc(label)}</div>
        ${art ? `<div class="reflexive-marker">Gender: ${esc(art)}</div>` : ''}
      </div>
      <button class="save-btn" type="button"
        data-save-id="${esc(saveId)}"
        data-save-label="${esc(label)}"
        data-save-trans="${esc((noun.translations||[])[0]||'')}"
        data-save-url="nouns.html"
        aria-label="Save">♡</button>
    </div>

    <div class="verb-forms">
      <div class="form-item"><span class="form-label">Plural</span><span class="form-value">${esc(noun.plural||'—')}</span></div>
      <div class="form-item"><span class="form-label">Genitive</span><span class="form-value">${esc(noun.genitive||'—')}</span></div>
    </div>

    <div class="verb-info">
      <span class="label">Translation:</span>
      <span class="value">${esc(trans)}</span>
    </div>

    ${(noun.examples||[]).length ? `
      <div class="examples-section"><h4>Examples</h4>
        <ul class="examples-list">${(noun.examples||[]).slice(0,4).map(ex=>`<li>${esc(ex)}</li>`).join('')}</ul>
      </div>` : ''}
  `;

  const btn = card.querySelector('.save-btn');
  if (btn) {
    setSaveBtnState(btn, getSaved().has(saveId));
    btn.addEventListener('click', () => {
      const s = getSaved();
      const m = window.SharedApp.getMeta();
      if (s.has(saveId)) { s.delete(saveId); delete m[saveId]; }
      else { s.add(saveId); m[saveId] = { label, translation: (noun.translations||[])[0]||'', url: 'nouns.html' }; }
      setSaved(s); window.SharedApp.setMeta(m);
      setSaveBtnState(btn, s.has(saveId));
    });
  }
  return card;
}

function wireDrawerReview(api) {
  if (!api) return;
  const st = api.getState?.();
  if (!st) return;
  const lh = document.getElementById('drawerLearnedList');
  const uh = document.getElementById('drawerUnlearnedList');
  if (lh) lh.innerHTML = st.learned?.length ? st.learned.map(x=>`<button class="drawer-item" data-jump="${x.i}">${esc(x.label)}</button>`).join('') : `<div class="drawer-empty">No learned words yet.</div>`;
  if (uh) uh.innerHTML = st.unlearned?.length ? st.unlearned.map(x=>`<button class="drawer-item" data-jump="${x.i}">${esc(x.label)}</button>`).join('') : `<div class="drawer-empty">All learned 🎉</div>`;
  document.querySelectorAll('[data-jump]').forEach(b => { b.onclick = () => api.jumpTo(parseInt(b.dataset.jump,10)); });
  const ml = document.getElementById('btnMarkLearned');
  const mu = document.getElementById('btnMarkUnlearned');
  if (ml) ml.onclick = () => { api.setLearned?.(true); wireDrawerReview(api); };
  if (mu) mu.onclick = () => { api.setLearned?.(false); wireDrawerReview(api); };
}

function updateCounts() {
  Object.keys(DB).forEach(level => {
    const badge = document.getElementById(`count-${level}`);
    if (badge) badge.textContent = (DB[level]||[]).length;
  });
}

function esc(s) {
  return String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
}

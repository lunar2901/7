// adverbs.js - Focus mode for adverbs
import adverbsA1 from './js/adverbs-db-a1.js';
import adverbsA2 from './js/adverbs-db-a2.js';
import adverbsB1 from './js/adverbs-db-b1.js';
import adverbsB2 from './js/adverbs-db-b2.js';
import adverbsC1 from './js/adverbs-db-c1.js';
import { initFocusMode } from './focus-mode.js';

const adverbsDB = { a1: adverbsA1, a2: adverbsA2, b1: adverbsB1, b2: adverbsB2, c1: adverbsC1 };

const levelBtns = document.querySelectorAll('.level-btn');
const searchInput = document.getElementById('search-input');
const adverbCount = document.getElementById('adverb-count');
const clearSearchBtn = document.getElementById('clear-search');

let currentLevel = 'a1';
let focusApi = null;

renderCurrent();
updateCounts();

levelBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    levelBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.dataset.level;
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    renderCurrent();
  });
});

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim().toLowerCase();
  clearSearchBtn.style.display = query ? 'block' : 'none';
  renderCurrent(query);
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.dispatchEvent(new Event('input'));
  searchInput.focus();
});

function filterAdverbs(level, query) {
  const list = adverbsDB[level] || [];
  if (!query) return list;
  return list.filter(adv => {
    const searchText = [
      adv.word, adv.category, adv.type,
      ...(adv.translations || []),
      ...(adv.examples || [])
    ].filter(Boolean).join(' ').toLowerCase();
    return searchText.includes(query);
  });
}

function renderCurrent(query = '') {
  const root = document.getElementById('study-root');
  if (!root) return;
  root.classList.add('study-root');

  const list = filterAdverbs(currentLevel, query);

  if (adverbCount) {
    adverbCount.textContent = `${list.length} ${list.length === 1 ? 'adverb' : 'adverbs'}`;
  }

  if (list.length === 0) {
    root.innerHTML = `<div class="no-results"><p>No adverbs found${query ? ` matching "${escapeHtml(query)}"` : ' in this level'}</p></div>`;
    return;
  }

  focusApi = initFocusMode({
    rootId: 'study-root',
    items: list,
    level: currentLevel,
    storageKey: 'adverbs',
    getId: (a) => a.word,
    getLabel: (a) => a.word || '—',
    renderCard: (a) => createAdverbCard(a)
  });

  wireDrawerReview(focusApi);
  if (focusApi) focusApi.onChange = () => wireDrawerReview(focusApi);
}

function createAdverbCard(adv) {
  const card = document.createElement('div');
  card.className = 'verb-card';

  const word = adv.word || '—';
  const translations = (adv.translations || []).join(', ') || '—';
  const category = adv.category || adv.type || '';

  card.innerHTML = `
    <div class="verb-header">
      <div>
        <div class="verb-base">${escapeHtml(word)}</div>
        ${category ? `<div class="reflexive-marker">${escapeHtml('Category: ' + category)}</div>` : ''}
      </div>
    </div>

    <div class="verb-info">
      <span class="label">Translation:</span>
      <span class="value">${escapeHtml(translations)}</span>
    </div>

    ${(adv.examples || []).length ? `
      <div class="examples-section">
        <h4>Examples</h4>
        <ul class="examples-list">
          ${(adv.examples || []).slice(0, 4).map(ex => `<li>${escapeHtml(ex)}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
  `;

  return card;
}

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
}

function updateCounts() {
  Object.keys(adverbsDB).forEach(level => {
    const badge = document.getElementById(`count-${level}`);
    if (badge) badge.textContent = (adverbsDB[level] || []).length;
  });
}

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'f') { e.preventDefault(); searchInput.focus(); }
  if (e.key === 'Escape' && searchInput.value) { searchInput.value = ''; searchInput.dispatchEvent(new Event('input')); }
});

function escapeHtml(s) {
  return String(s ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

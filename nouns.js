// nouns.js - Focus mode (1 noun at a time + accordion lists)
import nounsA1 from './js/nouns-db-a1.js';
import nounsA2 from './js/nouns-db-a2.js';
import nounsB1 from './js/nouns-db-b1.js';
import nounsB2 from './js/nouns-db-b2.js';
import nounsC1 from './js/nouns-db-c1.js';
import { initFocusMode } from './focus-mode.js';

const nounsDB = {
  a1: nounsA1,
  a2: nounsA2,
  b1: nounsB1,
  b2: nounsB2,
  c1: nounsC1,
};

const levelBtns = document.querySelectorAll('.level-btn');
const searchInput = document.getElementById('search-input');
const nounCount = document.getElementById('noun-count');
const clearSearchBtn = document.getElementById('clear-search');

let currentLevel = 'a1';
// ===== Saved words (localStorage) =====
const SAVED_KEY = 'savedWordsV1';
const getSaved = () => new Set(JSON.parse(localStorage.getItem(SAVED_KEY) || '[]'));
const setSaved = (set) => localStorage.setItem(SAVED_KEY, JSON.stringify([...set]));

function setSaveBtnState(btn, isSaved) {
  btn.textContent = isSaved ? '♥' : '♡';
  btn.classList.toggle('saved', isSaved);
}

function makeSaveId(category, level, label) {
  return `${category}:${level}:${label}`;
}

// Initialize
renderCurrent();
updateCounts();

// Level buttons
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

// Search
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

function filterNouns(level, query) {
  const nouns = nounsDB[level] || [];
  if (!query) return nouns;

  return nouns.filter(noun => {
    const searchText = [
      noun.word,
      noun.plural,
      noun.genitive,
      ...(noun.translations || []),
      ...(noun.examples || [])
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return searchText.includes(query);
  });
}

function renderCurrent(query = '') {
  const root = document.getElementById('study-root');
  if (!root) {
    console.error('Missing #study-root in nouns.html');
    return;
  }

  // helps CSS override to single-column
  root.classList.add('study-root');

  const nouns = filterNouns(currentLevel, query);

  nounCount.textContent = `${nouns.length} ${nouns.length === 1 ? 'noun' : 'nouns'}`;

  if (nouns.length === 0) {
    root.innerHTML = `
      <div class="no-results">
        <p>No nouns found${query ? ` matching "${escapeHtml(query)}"` : ' in this level'}</p>
      </div>
    `;
    return;
  }

  // ✅ Focus mode (accordion + single card)
  const api = initFocusMode({
    rootId: 'study-root',
    items: nouns,
    level: currentLevel,
    storageKey: 'nouns',

    getId: (n) => n.word,
    getLabel: (n) => formatNounLabel(n),
    renderCard: (n) => createNounCard(n)
  });

  wireDrawerReview(api);
  if (api) api.onChange = () => wireDrawerReview(api);
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

function formatNounLabel(noun) {
  // label inside accordion list
  const article =
    noun.gender === 'm' ? 'der' :
    noun.gender === 'f' ? 'die' :
    noun.gender === 'n' ? 'das' : '';

  const word = noun.word || '—';
  const hasArticle = typeof word === 'string' && word.split(' ').length > 1;
  return hasArticle || !article ? word : `${article} ${word}`;
}

// ✅ noun card (single item). Uses your existing CSS classes form-item/label/value etc.
function createNounCard(noun) {
  const card = document.createElement('div');
  card.className = 'verb-card'; // reuse verb-card styling so it matches your theme

  const genderText =
    noun.gender === 'm' ? 'der' :
    noun.gender === 'f' ? 'die' :
    noun.gender === 'n' ? 'das' : '';

  const baseWord = formatNounLabel(noun);
  const saveId = makeSaveId('nouns', currentLevel, baseWord);
  const isInitiallySaved = getSaved().has(saveId);

  card.innerHTML = `
    <div class="verb-header">
      <div>
        <div class="verb-base">${escapeHtml(baseWord)}</div>
        <div class="reflexive-marker">${escapeHtml(genderText ? `Gender: ${genderText}` : '')}</div>
      </div>
    
      <button class="save-btn"
              type="button"
              data-save-id="${escapeHtml(saveId)}"
              aria-label="Save">
        ${isInitiallySaved ? '♥' : '♡'}
      </button>
    </div>


    <div class="verb-forms">
      <div class="form-item">
        <span class="form-label">Plural</span>
        <span class="form-value">${escapeHtml(noun.plural || '—')}</span>
      </div>
      <div class="form-item">
        <span class="form-label">Genitive</span>
        <span class="form-value">${escapeHtml(noun.genitive || '—')}</span>
      </div>
    </div>

    <div class="verb-info">
      <span class="label">Translation:</span>
      <span class="value">${escapeHtml((noun.translations || []).join(', ') || '—')}</span>
    </div>

    ${
      (noun.examples || []).length
        ? `
          <div class="examples-section">
            <h4>Examples</h4>
            <ul class="examples-list">
              ${(noun.examples || []).slice(0, 4).map(ex => `<li>${escapeHtml(ex)}</li>`).join('')}
            </ul>
          </div>
        `
        : ''
    }
  `;
  const btn = card.querySelector('.save-btn');
    if (btn) {
      setSaveBtnState(btn, getSaved().has(saveId));
    
      btn.addEventListener('click', () => {
        const s = getSaved();
        if (s.has(saveId)) s.delete(saveId);
        else s.add(saveId);
        setSaved(s);
        setSaveBtnState(btn, s.has(saveId));
      });
    }

  return card;
}

function updateCounts() {
  Object.keys(nounsDB).forEach(level => {
    const badge = document.getElementById(`count-${level}`);
    if (badge) badge.textContent = (nounsDB[level] || []).length;
  });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === 'Escape' && searchInput.value) {
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

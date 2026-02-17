// shared.js - Common save/search/modal logic for all pages
// Exposes: window.SharedApp = { openModal, closeModal, getSaved, setSaved, wireSaveButtons, initSavedModal, registerPageItems }

(function() {
  const SAVED_KEY  = 'savedWordsV1';      // Set<id>  (backwards compat)
  const SAVED_META = 'savedWordsMetaV1';  // id -> {label, translation, url}

  function getSaved() { return new Set(JSON.parse(localStorage.getItem(SAVED_KEY) || '[]')); }
  function setSaved(s) { localStorage.setItem(SAVED_KEY, JSON.stringify([...s])); }
  function getMeta()  { return JSON.parse(localStorage.getItem(SAVED_META) || '{}'); }
  function setMeta(m) { localStorage.setItem(SAVED_META, JSON.stringify(m)); }

  function openModal(id)  { const el = document.getElementById(id); if (el) el.hidden = false; }
  function closeModal(id) { const el = document.getElementById(id); if (el) el.hidden = true; }

  // Delegate close clicks on backdrop
  document.addEventListener('click', e => {
    const closeId = e.target?.dataset?.close;
    if (closeId) closeModal(closeId);
  });

  function setSaveBtnState(btn, isSaved) {
    btn.textContent = isSaved ? '♥' : '♡';
    btn.classList.toggle('saved', isSaved);
  }

  function wireSaveButtons() {
    document.querySelectorAll('.save-btn').forEach(btn => {
      const id = btn.dataset.saveId;
      if (!id) return;
      setSaveBtnState(btn, getSaved().has(id));
      // remove old listener by cloning
      const fresh = btn.cloneNode(true);
      btn.replaceWith(fresh);
      setSaveBtnState(fresh, getSaved().has(id));
      fresh.addEventListener('click', () => {
        const s = getSaved();
        const m = getMeta();
        if (s.has(id)) {
          s.delete(id);
          delete m[id];
        } else {
          s.add(id);
          m[id] = {
            label: fresh.dataset.saveLabel || id,
            translation: fresh.dataset.saveTrans || '',
            url: fresh.dataset.saveUrl || window.location.pathname
          };
        }
        setSaved(s);
        setMeta(m);
        setSaveBtnState(fresh, s.has(id));
      });
    });
  }

  function renderSavedModal() {
    const container = document.getElementById('savedResults');
    if (!container) return;
    const s = getSaved();
    const m = getMeta();
    if (s.size === 0) {
      container.innerHTML = `<div class="result"><div style="color:#888;font-style:italic;">No saved words yet. Click ♡ on any word to save it.</div></div>`;
      return;
    }
    container.innerHTML = '';
    [...s].forEach(id => {
      const meta = m[id] || {};
      const label = meta.label || id;
      const trans = meta.translation || '';
      const url   = meta.url || '#';
      const row = document.createElement('div');
      row.className = 'result';
      row.innerHTML = `
        <div>
          <a href="${url}" style="font-weight:600;color:#111;text-decoration:none;">${esc(label)}</a>
          ${trans ? `<br><small style="color:#888;">${esc(trans)}</small>` : ''}
        </div>
        <button class="save-btn saved" data-save-id="${esc(id)}" data-save-label="${esc(label)}" data-save-trans="${esc(trans)}" data-save-url="${esc(url)}" aria-label="Remove">♥</button>
      `;
      container.appendChild(row);
    });
    wireSaveButtons(); // re-wire so ♥ in modal also works
  }

  function initSavedModal() {
    const btn = document.getElementById('btnSaved');
    if (btn) {
      btn.addEventListener('click', () => {
        openModal('savedModal');
        renderSavedModal();
      });
    }
  }

  // Page items registry for inline search (per-page)
  let _pageItems = [];
  function registerPageItems(items) { _pageItems = items; }

  function initSearchModal(onJumpToItem) {
    const btn = document.getElementById('btnGlobalSearch');
    if (!btn) return;
    btn.addEventListener('click', () => {
      openModal('globalSearchModal');
      const input = document.getElementById('globalSearchInput');
      const results = document.getElementById('globalSearchResults');
      if (!input || !results) return;
      input.value = '';
      input.focus();
      renderSearchResults(results, _pageItems, '', onJumpToItem);
      input.oninput = () => renderSearchResults(results, _pageItems, input.value.trim().toLowerCase(), onJumpToItem);
    });
  }

  function renderSearchResults(container, items, query, onJumpToItem) {
    container.innerHTML = '';
    const filtered = query
      ? items.filter(it => (it.label + ' ' + it.translation).toLowerCase().includes(query))
      : items;

    if (!filtered.length) {
      container.innerHTML = `<div class="result"><div style="color:#888;font-style:italic;">${query ? 'No matches' : 'Start typing to search…'}</div></div>`;
      return;
    }
    filtered.slice(0, 60).forEach(it => {
      const row = document.createElement('div');
      row.className = 'result';
      row.style.cursor = 'pointer';
      row.innerHTML = `
        <div>
          <span style="font-weight:600;">${esc(it.label)}</span>
          ${it.translation ? `<br><small style="color:#888;">${esc(it.translation)}</small>` : ''}
        </div>
        <button class="save-btn ${getSaved().has(it.id)?'saved':''}"
          data-save-id="${esc(it.id)}"
          data-save-label="${esc(it.label)}"
          data-save-trans="${esc(it.translation||'')}"
          data-save-url="${esc(window.location.pathname)}"
          aria-label="Save">
          ${getSaved().has(it.id) ? '♥' : '♡'}
        </button>
      `;
      if (typeof onJumpToItem === 'function') {
        row.querySelector('span')?.addEventListener('click', () => {
          onJumpToItem(it);
          closeModal('globalSearchModal');
        });
      }
      container.appendChild(row);
    });
    wireSaveButtons();
  }

  function esc(s) {
    return String(s ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
  }

  // Expose
  window.SharedApp = { openModal, closeModal, getSaved, setSaved, getMeta, setMeta, setSaveBtnState, wireSaveButtons, initSavedModal, initSearchModal, registerPageItems };
  // Backwards compat
  window.wireSaveButtons = wireSaveButtons;
})();

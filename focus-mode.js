// focus-mode.js (minimal on-page UI + drawer lists API)
export function initFocusMode({
  rootId = "study-root",
  items = [],
  level = "a1",
  storageKey = "study",
  getId = (item, idx) => item?.id ?? item?.word ?? item?.term ?? String(idx),
  getLabel = (item) => item?.word ?? item?.term ?? item?.infinitive ?? "—",
  renderCard = (item) => {
    const el = document.createElement("div");
    el.textContent = getLabel(item);
    return el;
  },
}) {
  const root = document.getElementById(rootId);
  if (!root) throw new Error(`Missing #${rootId}`);

  const keyLearned = `${storageKey}:learned:${level}`;
  const keyIndex = `${storageKey}:index:${level}`;

  const learnedSet = new Set(JSON.parse(localStorage.getItem(keyLearned) || "[]"));
  let index = clamp(parseInt(localStorage.getItem(keyIndex) || "0", 10), 0, Math.max(items.length - 1, 0));

  function save() {
    localStorage.setItem(keyLearned, JSON.stringify([...learnedSet]));
    localStorage.setItem(keyIndex, String(index));
  }

  function isLearned(item, idx) {
    return learnedSet.has(getId(item, idx));
  }

  function getLists() {
    const learned = [];
    const unlearned = [];
    items.forEach((it, i) => {
      const row = { i, id: getId(it, i), label: getLabel(it) };
      if (isLearned(it, i)) learned.push(row);
      else unlearned.push(row);
    });
    return { learned, unlearned };
  }

  function jumpTo(i) {
    index = clamp(i, 0, items.length - 1);
    save();
    render();
    api.onChange?.(api.getState());
  }

  function next() { jumpTo(Math.min(index + 1, items.length - 1)); }
  function prev() { jumpTo(Math.max(index - 1, 0)); }

  function setLearned(val) {
    const id = getId(items[index], index);
    if (val) learnedSet.add(id);
    else learnedSet.delete(id);
    save();
    api.onChange?.(api.getState());
  }

  function toggleLearned() {
    setLearned(!isLearned(items[index], index));
  }

  function render() {
    if (!items.length) {
      root.innerHTML = `<div class="no-results"><p>No items in this level.</p></div>`;
      return;
    }

    const currentItem = items[index];

    root.innerHTML = `
      <section class="focus-topbar">
        <div class="focus-meta">
          <span class="focus-level">${String(level).toUpperCase()}</span>
          <span class="focus-count">${index + 1} / ${items.length}</span>
        </div>

        <div class="focus-actions">
          <button type="button" class="word-btn" data-action="prev">← Prev</button>
          <button type="button" class="word-btn" data-action="next">Next →</button>
        </div>
      </section>

      <section class="word-card-host" id="focus-card-host"></section>
    `;

    const cardHost = root.querySelector("#focus-card-host");
    cardHost.replaceChildren(renderCard(currentItem, index));

    root.querySelector('[data-action="prev"]')?.addEventListener("click", prev);
    root.querySelector('[data-action="next"]')?.addEventListener("click", next);

    // keyboard
    window.onkeydown = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    // swipe
    let x0 = null, y0 = null;
    cardHost.addEventListener("touchstart", (e) => {
      const t = e.touches && e.touches[0];
      if (!t) return;
      x0 = t.clientX; y0 = t.clientY;
    }, { passive: true });

    cardHost.addEventListener("touchend", (e) => {
      const t = e.changedTouches && e.changedTouches[0];
      if (!t || x0 == null || y0 == null) return;
      const dx = t.clientX - x0;
      const dy = t.clientY - y0;
      x0 = null; y0 = null;
      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) next(); else prev();
    }, { passive: true });
  }

  const api = {
    // state + lists for hamburger drawer
    getState() {
      const lists = getLists();
      return {
        level,
        index,
        total: items.length,
        current: {
          id: getId(items[index], index),
          label: getLabel(items[index]),
          learned: isLearned(items[index], index),
        },
        learned: lists.learned,
        unlearned: lists.unlearned,
      };
    },
    jumpTo,
    next,
    prev,
    setLearned,
    toggleLearned,
    onChange: null, // you assign this from app.js
  };

  render();
  return api;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, Number.isFinite(n) ? n : min));
}

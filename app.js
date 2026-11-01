(() => {
  'use strict';

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  const CATS = {
    expense: [
      { id: 'comida', name: 'Comida', ico: '🍔', color: '#f59e0b' },
      { id: 'transporte', name: 'Transporte', ico: '🚌', color: '#3b82f6' },
      { id: 'casa', name: 'Casa', ico: '🏠', color: '#8b5cf6' },
      { id: 'ocio', name: 'Ocio', ico: '🎬', color: '#ec4899' },
      { id: 'salud', name: 'Salud', ico: '💊', color: '#ef4444' },
      { id: 'compras', name: 'Compras', ico: '🛍️', color: '#14b8a6' },
      { id: 'servicios', name: 'Servicios', ico: '💡', color: '#eab308' },
      { id: 'otros-g', name: 'Otros', ico: '📦', color: '#94a3b8' }
    ],
    income: [
      { id: 'sueldo', name: 'Sueldo', ico: '💼', color: '#0f9d73' },
      { id: 'extra', name: 'Extra', ico: '💰', color: '#22c55e' },
      { id: 'regalo', name: 'Regalo', ico: '🎁', color: '#ec4899' },
      { id: 'otros-i', name: 'Otros', ico: '📦', color: '#94a3b8' }
    ]
  };
  const ALL_CATS = [...CATS.expense, ...CATS.income];
  const catById = id => ALL_CATS.find(c => c.id === id) || { name: 'Otros', ico: '📦', color: '#94a3b8' };

  const KEY = 'gastos.v1';

  function load() {
    try {
      const d = JSON.parse(localStorage.getItem(KEY));
      if (d && Array.isArray(d.tx)) return { tx: d.tx, currency: d.currency || 'MXN' };
    } catch (e) { /* sin datos */ }
    return { tx: [], currency: 'MXN' };
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { toast('No se pudo guardar en este dispositivo'); }
  }

  let state = load();
  let view = 'home';
  let cur = new Date(); cur.setDate(1);
  let editingId = null;
  let formType = 'expense';
  let formCat = null;

  /* ---------- Utilidades ---------- */
  const pad = n => String(n).padStart(2, '0');
  const monthKey = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
  const todayStr = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
  const money = n => {
    try { return new Intl.NumberFormat('es-MX', { style: 'currency', currency: state.currency }).format(n); }
    catch (e) { return '$' + n.toFixed(2); }
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const monthTx = key => state.tx.filter(t => t.date.startsWith(key));
  const sum = (list, type) => list.filter(t => t.type === type).reduce((a, t) => a + t.amount, 0);
  const parseDate = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };

  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg; el.hidden = false;
    clearTimeout(toast.t);
    toast.t = setTimeout(() => { el.hidden = true; }, 2200);
  }

  /* ---------- Render ---------- */
  function render() {
    const label = cur.toLocaleDateString('es-MX', { month: 'long', year: 'numeric' });
    $('#month-label').textContent = label;
    renderHome();
    renderStats();
    $('#currency').value = state.currency;
  }

  function renderHome() {
    const list = monthTx(monthKey(cur));
    const inc = sum(list, 'income');
    const exp = sum(list, 'expense');
    const bal = inc - exp;
    const balEl = $('#sum-balance');
    balEl.textContent = money(bal);
    balEl.classList.toggle('neg', bal < 0);
    $('#sum-income').textContent = money(inc);
    $('#sum-expense').textContent = money(exp);

    const box = $('#tx-list');
    if (!list.length) {
      box.innerHTML = '<div class="empty"><span class="big">🧾</span>Aún no hay movimientos este mes.<br>Toca el botón + para agregar el primero.</div>';
      return;
    }
    const sorted = [...list].sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
    const groups = {};
    sorted.forEach(t => { (groups[t.date] = groups[t.date] || []).push(t); });

    box.innerHTML = Object.keys(groups).map(date => {
      const items = groups[date];
      const net = sum(items, 'income') - sum(items, 'expense');
      const dl = parseDate(date).toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'short' });
      return `<div class="day-head"><span>${esc(dl)}</span><span>${money(net)}</span></div>` +
        items.map(t => {
          const c = catById(t.cat);
          const sign = t.type === 'income' ? '+' : '−';
          return `<button class="tx" data-id="${esc(t.id)}">
            <div class="ico" style="background:${c.color}22">${c.ico}</div>
            <div class="info"><b>${esc(c.name)}</b>${t.note ? `<small>${esc(t.note)}</small>` : ''}</div>
            <div class="amt ${t.type}">${sign}${money(t.amount)}</div>
          </button>`;
        }).join('');
    }).join('');
  }

  function renderStats() {
    const list = monthTx(monthKey(cur)).filter(t => t.type === 'expense');
    const total = list.reduce((a, t) => a + t.amount, 0);
    const donut = $('#donut'), legend = $('#legend');

    if (!total) {
      donut.innerHTML = '';
      legend.innerHTML = '<div class="empty">Sin gastos este mes.</div>';
    } else {
      const byCat = {};
      list.forEach(t => { byCat[t.cat] = (byCat[t.cat] || 0) + t.amount; });
      const rows = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
      const r = 70, C = 2 * Math.PI * r;
      let offset = 0;
      const segs = rows.map(([id, v]) => {
        const len = (v / total) * C;
        const s = `<circle cx="100" cy="100" r="${r}" fill="none" stroke="${catById(id).color}" stroke-width="26"
          stroke-dasharray="${len.toFixed(3)} ${(C - len).toFixed(3)}" stroke-dashoffset="${(-offset).toFixed(3)}"
          transform="rotate(-90 100 100)"/>`;
        offset += len;
        return s;
      }).join('');
      donut.innerHTML = `<svg viewBox="0 0 200 200" role="img" aria-label="Gastos por categoría">
        <circle cx="100" cy="100" r="${r}" fill="none" stroke="var(--line)" stroke-width="26"/>${segs}
        <text x="100" y="96" text-anchor="middle" font-size="11" fill="var(--muted)">Total</text>
        <text x="100" y="116" text-anchor="middle" font-size="15" font-weight="700" fill="var(--text)">${esc(money(total))}</text>
      </svg>`;
      legend.innerHTML = rows.map(([id, v]) => {
        const c = catById(id);
        return `<div class="leg"><span class="sw" style="background:${c.color}"></span>
          <span class="n">${c.ico} ${esc(c.name)}</span>
          <span class="p">${Math.round(v / total * 100)}%</span>
          <span class="v">${esc(money(v))}</span></div>`;
      }).join('');
    }

    // Últimos 6 meses
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(cur.getFullYear(), cur.getMonth() - i, 1);
      const l = monthTx(monthKey(d));
      months.push({ label: d.toLocaleDateString('es-MX', { month: 'short' }).replace('.', ''), inc: sum(l, 'income'), exp: sum(l, 'expense') });
    }
    const max = Math.max(1, ...months.map(m => Math.max(m.inc, m.exp)));
    const W = 320, H = 150, base = 128, top = 12, bw = 16, gap = 6, step = W / 6;
    const bars = months.map((m, i) => {
      const x0 = i * step + (step - (bw * 2 + gap)) / 2;
      const hi = (m.inc / max) * (base - top), he = (m.exp / max) * (base - top);
      return `<rect x="${x0.toFixed(1)}" y="${(base - hi).toFixed(1)}" width="${bw}" height="${hi.toFixed(1)}" rx="4" fill="var(--income)"/>
        <rect x="${(x0 + bw + gap).toFixed(1)}" y="${(base - he).toFixed(1)}" width="${bw}" height="${he.toFixed(1)}" rx="4" fill="var(--expense)"/>
        <text x="${(i * step + step / 2).toFixed(1)}" y="145" text-anchor="middle" font-size="11" fill="var(--muted)">${esc(m.label)}</text>`;
    }).join('');
    $('#bars').innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Ingresos y gastos de los últimos 6 meses">
      <line x1="0" y1="${base}" x2="${W}" y2="${base}" stroke="var(--line)"/>${bars}</svg>`;
  }

  /* ---------- Navegación ---------- */
  function setView(v) {
    view = v;
    $$('.view').forEach(el => el.classList.toggle('active', el.id === 'view-' + v));
    $$('.tabbar button').forEach(b => b.classList.toggle('active', b.dataset.view === v));
    $('#fab').hidden = v === 'settings';
    window.scrollTo(0, 0);
  }
  $$('.tabbar button').forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));
  $('#prev-month').addEventListener('click', () => { cur.setMonth(cur.getMonth() - 1); render(); });
  $('#next-month').addEventListener('click', () => { cur.setMonth(cur.getMonth() + 1); render(); });

  /* ---------- Formulario ---------- */
  function renderCats() {
    $('#f-cats').innerHTML = CATS[formType].map(c =>
      `<button type="button" class="cat ${c.id === formCat ? 'sel' : ''}" data-cat="${c.id}"><span>${c.ico}</span>${c.name}</button>`
    ).join('');
  }
  function setFormType(t) {
    formType = t;
    if (!CATS[t].some(c => c.id === formCat)) formCat = CATS[t][0].id;
    $$('.seg button').forEach(b => b.classList.toggle('active', b.dataset.type === t));
    renderCats();
  }
  function openSheet(id) {
    editingId = id || null;
    const t = id ? state.tx.find(x => x.id === id) : null;
    formCat = t ? t.cat : null;
    setFormType(t ? t.type : 'expense');
    $('#f-amount').value = t ? String(t.amount) : '';
    $('#f-date').value = t ? t.date : (monthKey(cur) === monthKey(new Date()) ? todayStr() : `${monthKey(cur)}-01`);
    $('#f-note').value = t ? (t.note || '') : '';
    $('#f-delete').hidden = !t;
    $('#sheet').hidden = false;
    $('#sheet-backdrop').hidden = false;
    if (!t) setTimeout(() => $('#f-amount').focus(), 60);
  }
  function closeSheet() {
    $('#sheet').hidden = true;
    $('#sheet-backdrop').hidden = true;
    editingId = null;
    if (document.activeElement) document.activeElement.blur();
  }

  $('#fab').addEventListener('click', () => openSheet());
  $('#sheet-backdrop').addEventListener('click', closeSheet);
  $('#f-cancel').addEventListener('click', closeSheet);
  $$('.seg button').forEach(b => b.addEventListener('click', () => setFormType(b.dataset.type)));
  $('#f-cats').addEventListener('click', e => {
    const b = e.target.closest('.cat'); if (!b) return;
    formCat = b.dataset.cat; renderCats();
  });
  $('#tx-list').addEventListener('click', e => {
    const b = e.target.closest('.tx'); if (b) openSheet(b.dataset.id);
  });

  $('#f-save').addEventListener('click', () => {
    const amount = parseFloat($('#f-amount').value.replace(',', '.'));
    const date = $('#f-date').value;
    if (!isFinite(amount) || amount <= 0) { toast('Escribe un monto mayor a 0'); return; }
    if (!date) { toast('Elige una fecha'); return; }
    const data = { type: formType, amount: Math.round(amount * 100) / 100, cat: formCat, date, note: $('#f-note').value.trim() };
    if (editingId) {
      const i = state.tx.findIndex(x => x.id === editingId);
      if (i >= 0) state.tx[i] = { ...state.tx[i], ...data };
    } else {
      state.tx.push({ id: uid(), ...data });
    }
    save();
    const d = parseDate(date); cur = new Date(d.getFullYear(), d.getMonth(), 1);
    closeSheet(); render(); toast('Guardado');
  });
  $('#f-delete').addEventListener('click', () => {
    if (!editingId || !confirm('¿Eliminar este movimiento?')) return;
    state.tx = state.tx.filter(x => x.id !== editingId);
    save(); closeSheet(); render(); toast('Eliminado');
  });

  /* ---------- Ajustes ---------- */
  $('#currency').addEventListener('change', e => { state.currency = e.target.value; save(); render(); });

  async function shareOrDownload(filename, mime, content) {
    const blob = new Blob([content], { type: mime });
    try {
      const file = new File([blob], filename, { type: mime });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: filename });
        return;
      }
    } catch (e) {
      if (e && e.name === 'AbortError') return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  $('#btn-export').addEventListener('click', () => {
    shareOrDownload(`respaldo-gastos-${todayStr()}.json`, 'application/json', JSON.stringify(state, null, 2));
  });
  $('#btn-csv').addEventListener('click', () => {
    const q = v => '"' + String(v).replace(/"/g, '""') + '"';
    const rows = [['fecha', 'tipo', 'categoria', 'monto', 'nota'].join(',')];
    [...state.tx].sort((a, b) => a.date.localeCompare(b.date)).forEach(t =>
      rows.push([t.date, t.type === 'income' ? 'ingreso' : 'gasto', q(catById(t.cat).name), t.amount, q(t.note || '')].join(',')));
    shareOrDownload(`gastos-${todayStr()}.csv`, 'text/csv', '﻿' + rows.join('\n'));
  });
  $('#btn-import').addEventListener('click', () => $('#file-import').click());
  $('#file-import').addEventListener('change', async e => {
    const f = e.target.files[0]; e.target.value = '';
    if (!f) return;
    try {
      const d = JSON.parse(await f.text());
      if (!d || !Array.isArray(d.tx)) throw new Error('formato');
      const clean = d.tx.filter(t => t && typeof t.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(t.date) &&
        isFinite(t.amount) && (t.type === 'expense' || t.type === 'income'))
        .map(t => ({ id: String(t.id || uid()), type: t.type, amount: Number(t.amount), cat: String(t.cat || ''), date: t.date, note: String(t.note || '') }));
      if (!confirm(`Se reemplazarán tus datos actuales por ${clean.length} movimientos del respaldo. ¿Continuar?`)) return;
      state = { tx: clean, currency: d.currency || state.currency };
      save(); render(); toast('Respaldo importado');
    } catch (err) { toast('El archivo no es un respaldo válido'); }
  });
  $('#btn-reset').addEventListener('click', () => {
    if (!confirm('Se borrarán todos tus movimientos. Esta acción no se puede deshacer.')) return;
    state.tx = []; save(); render(); toast('Datos borrados');
  });

  /* ---------- Inicio ---------- */
  render();
  setView('home');

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
})();

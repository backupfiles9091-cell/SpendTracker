(() => {
  'use strict';

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  /* =====================================================================
     Idiomas
     ===================================================================== */
  const I18N = {
    es: {
      'tab.home': 'Inicio', 'tab.accounts': 'Cuentas', 'tab.stats': 'Estadísticas', 'tab.settings': 'Ajustes',
      allAccounts: 'Todas las cuentas',
      balEnd: 'Saldo al cierre del mes', monthChange: 'Cambio del mes',
      income: 'Ingresos', expense: 'Gastos',
      'type.expense': 'Gasto', 'type.income': 'Ingreso', 'type.transfer': 'Transferencia',
      'type.adjUp': 'Aumentar saldo', 'type.adjDown': 'Disminuir saldo',
      empty: 'Aún no hay movimientos este mes.<br>Toca + para agregar el primero.',
      adjustment: 'Ajuste de saldo',
      totalBalance: 'Saldo total', addAccount: 'Agregar cuenta', newTransfer: 'Transferir',
      newAccountT: 'Nueva cuenta', editAccountT: 'Editar cuenta',
      accountName: 'Nombre de la cuenta', opening: 'Saldo inicial', color: 'Color',
      account: 'Cuenta', from: 'Desde', to: 'Hacia',
      save: 'Guardar', cancel: 'Cancelar', delete: 'Eliminar', edit: 'Editar',
      notePh: 'Nota (opcional)',
      newCat: 'Nueva', catNameT: 'Nombre de la categoría', newCatT: 'Nueva categoría', editCatT: 'Editar categoría', icon: 'Ícono',
      statsCat: 'Gastos por categoría', stats6: 'Últimos 6 meses', statsBal: 'Evolución del saldo',
      total: 'Total', noExpenses: 'Sin gastos este mes.',
      shareOf: '{p}% del total', monthIncome: 'Ingresos del mes', monthExpense: 'Gastos del mes',
      trIn: 'Transf. recibidas (mes)', trOut: 'Transf. enviadas (mes)',
      allIncome: 'Ingresos totales', allExpense: 'Gastos totales',
      trendT: 'Tendencia del saldo (6 meses)', showMov: 'Ver movimientos', movCount: '{n} movimientos', movCount1: '1 movimiento',
      language: 'Idioma', currency: 'Moneda',
      currencyHint: 'Cambiar la moneda solo cambia el símbolo; no convierte los montos.',
      categories: 'Categorías', expenseCats: 'De gastos', incomeCats: 'De ingresos',
      data: 'Tus datos',
      dataHint: 'Todo se guarda solo en este dispositivo. iOS puede borrar los datos de una web si no la usas en semanas, así que exporta un respaldo de vez en cuando.',
      exportJson: 'Exportar respaldo (JSON)', exportCsv: 'Exportar a CSV', importJson: 'Importar respaldo (JSON)',
      importMs: 'Importar desde MoneyStats (CSV)', reset: 'Borrar todos los datos',
      saved: 'Guardado', deleted: 'Eliminado', needAmount: 'Escribe un monto mayor a 0', needDate: 'Elige una fecha',
      needName: 'Escribe un nombre', dupName: 'Ya existe uno con ese nombre', sameAcc: 'Elige cuentas distintas',
      needTwo: 'Necesitas al menos 2 cuentas para transferir', lastAcc: 'Debe quedar al menos una cuenta',
      saveFail: 'No se pudo guardar en este dispositivo', badBackup: 'El archivo no es un respaldo válido',
      badMs: 'No reconozco este archivo como una exportación de MoneyStats', imported: 'Importación lista',
      restored: 'Respaldo restaurado', wiped: 'Datos borrados', nothingNew: 'No hay movimientos nuevos para importar',
      cDelTx: '¿Eliminar este movimiento?',
      cDelAcc: '¿Eliminar la cuenta "{name}"? También se eliminarán sus {n} movimientos y las transferencias donde participa.',
      cDelAccEmpty: '¿Eliminar la cuenta "{name}"?',
      cDelCat: '¿Eliminar la categoría "{name}"? Los movimientos que la usan se mostrarán como "Otros".',
      cRestore: 'Se reemplazarán tus datos actuales por {n} movimientos del respaldo. ¿Continuar?',
      cReset: 'Se borrarán todos tus movimientos y las cuentas y categorías volverán a las de fábrica. Esta acción no se puede deshacer.',
      'ms.title': 'Exportación de MoneyStats',
      'ms.rows': '{n} filas leídas',
      'ms.types': '{inc} ingresos, {exp} gastos, {tr} transferencias, {adj} ajustes de saldo',
      'ms.dups': '{n} ya existían y se omiten',
      'ms.bad': '{n} filas no válidas se omiten',
      'ms.newAcc': 'Cuentas nuevas: {list}',
      'ms.newCat': 'Categorías nuevas: {list}',
      'ms.foreign': '{n} filas en otra moneda (se importan sin convertir)',
      'ms.ask': '¿Importar?',
      'cat.comida': 'Comida', 'cat.transporte': 'Transporte', 'cat.casa': 'Casa', 'cat.ocio': 'Ocio',
      'cat.salud': 'Salud', 'cat.compras': 'Compras', 'cat.servicios': 'Servicios', 'cat.otros-g': 'Otros',
      'cat.sueldo': 'Sueldo', 'cat.extra': 'Extra', 'cat.regalo': 'Regalo', 'cat.otros-i': 'Otros',
      'cur.MXN': 'Peso mexicano (MXN)', 'cur.USD': 'Dólar estadounidense (USD)', 'cur.EUR': 'Euro (EUR)',
      'cur.COP': 'Peso colombiano (COP)', 'cur.ARS': 'Peso argentino (ARS)', 'cur.CLP': 'Peso chileno (CLP)', 'cur.PEN': 'Sol peruano (PEN)'
    },
    en: {
      'tab.home': 'Home', 'tab.accounts': 'Accounts', 'tab.stats': 'Statistics', 'tab.settings': 'Settings',
      allAccounts: 'All accounts',
      balEnd: 'Balance at end of month', monthChange: 'Change this month',
      income: 'Income', expense: 'Expenses',
      'type.expense': 'Expense', 'type.income': 'Income', 'type.transfer': 'Transfer',
      'type.adjUp': 'Increase balance', 'type.adjDown': 'Decrease balance',
      empty: 'No transactions this month yet.<br>Tap + to add the first one.',
      adjustment: 'Balance adjustment',
      totalBalance: 'Total balance', addAccount: 'Add account', newTransfer: 'Transfer',
      newAccountT: 'New account', editAccountT: 'Edit account',
      accountName: 'Account name', opening: 'Opening balance', color: 'Color',
      account: 'Account', from: 'From', to: 'To',
      save: 'Save', cancel: 'Cancel', delete: 'Delete', edit: 'Edit',
      notePh: 'Note (optional)',
      newCat: 'New', catNameT: 'Category name', newCatT: 'New category', editCatT: 'Edit category', icon: 'Icon',
      statsCat: 'Spending by category', stats6: 'Last 6 months', statsBal: 'Balance trend',
      total: 'Total', noExpenses: 'No spending this month.',
      shareOf: '{p}% of total', monthIncome: 'Income this month', monthExpense: 'Spending this month',
      trIn: 'Transfers in (month)', trOut: 'Transfers out (month)',
      allIncome: 'Total income', allExpense: 'Total spending',
      trendT: 'Balance trend (6 months)', showMov: 'View transactions', movCount: '{n} transactions', movCount1: '1 transaction',
      language: 'Language', currency: 'Currency',
      currencyHint: 'Changing the currency only changes the symbol; it does not convert amounts.',
      categories: 'Categories', expenseCats: 'Expense', incomeCats: 'Income',
      data: 'Your data',
      dataHint: 'Everything is stored only on this device. iOS may delete a website\'s data if you don\'t use it for weeks, so export a backup from time to time.',
      exportJson: 'Export backup (JSON)', exportCsv: 'Export to CSV', importJson: 'Import backup (JSON)',
      importMs: 'Import from MoneyStats (CSV)', reset: 'Delete all data',
      saved: 'Saved', deleted: 'Deleted', needAmount: 'Enter an amount greater than 0', needDate: 'Pick a date',
      needName: 'Enter a name', dupName: 'One with that name already exists', sameAcc: 'Choose different accounts',
      needTwo: 'You need at least 2 accounts to transfer', lastAcc: 'At least one account must remain',
      saveFail: 'Could not save on this device', badBackup: 'That file is not a valid backup',
      badMs: 'This file doesn\'t look like a MoneyStats export', imported: 'Import done',
      restored: 'Backup restored', wiped: 'Data deleted', nothingNew: 'No new transactions to import',
      cDelTx: 'Delete this transaction?',
      cDelAcc: 'Delete the account "{name}"? Its {n} transactions and the transfers it takes part in will also be deleted.',
      cDelAccEmpty: 'Delete the account "{name}"?',
      cDelCat: 'Delete the category "{name}"? Transactions using it will show as "Other".',
      cRestore: 'Your current data will be replaced by {n} transactions from the backup. Continue?',
      cReset: 'All your transactions will be deleted, and accounts and categories will go back to the defaults. This cannot be undone.',
      'ms.title': 'MoneyStats export',
      'ms.rows': '{n} rows read',
      'ms.types': '{inc} income, {exp} expenses, {tr} transfers, {adj} balance adjustments',
      'ms.dups': '{n} already exist and are skipped',
      'ms.bad': '{n} invalid rows are skipped',
      'ms.newAcc': 'New accounts: {list}',
      'ms.newCat': 'New categories: {list}',
      'ms.foreign': '{n} rows in another currency (imported without conversion)',
      'ms.ask': 'Import?',
      'cat.comida': 'Food', 'cat.transporte': 'Transport', 'cat.casa': 'Home', 'cat.ocio': 'Leisure',
      'cat.salud': 'Health', 'cat.compras': 'Shopping', 'cat.servicios': 'Utilities', 'cat.otros-g': 'Other',
      'cat.sueldo': 'Salary', 'cat.extra': 'Extra', 'cat.regalo': 'Gift', 'cat.otros-i': 'Other',
      'cur.MXN': 'Mexican peso (MXN)', 'cur.USD': 'US dollar (USD)', 'cur.EUR': 'Euro (EUR)',
      'cur.COP': 'Colombian peso (COP)', 'cur.ARS': 'Argentine peso (ARS)', 'cur.CLP': 'Chilean peso (CLP)', 'cur.PEN': 'Peruvian sol (PEN)'
    }
  };
  const CURRENCIES = ['MXN', 'USD', 'EUR', 'COP', 'ARS', 'CLP', 'PEN'];

  const t = (k, v) => {
    const lang = (typeof state !== 'undefined' && state && state.lang) || 'es';
    let s = (I18N[lang] && I18N[lang][k]);
    if (s === undefined) s = I18N.es[k];
    if (s === undefined) s = k;
    if (v) for (const x in v) s = s.split('{' + x + '}').join(v[x]);
    return s;
  };
  const loc = () => (state.lang === 'en' ? 'en-US' : 'es-MX');

  /* =====================================================================
     Datos
     ===================================================================== */
  let seq = 0;
  const uid = () => Date.now().toString(36) + (seq++ % 46656).toString(36).padStart(3, '0') + Math.random().toString(36).slice(2, 5);

  const KEY2 = 'gastos.v2';
  const KEY1 = 'gastos.v1';
  const PALETTE = ['#0f9d73', '#3b82f6', '#8b5cf6', '#ec4899', '#ef4444', '#f59e0b', '#14b8a6', '#eab308', '#64748b', '#f97316', '#06b6d4', '#84cc16'];
  const EMOJIS = ['🍔', '🛒', '🚌', '🏠', '💡', '🎬', '💊', '🎓', '✈️', '🐶', '👕', '🎁', '💼', '💰', '📈', '🏦', '☕', '⛽', '📱', '🏋️', '🧾', '🔧', '🏗️', '❤️'];
  const DEFAULT_ACCOUNTS = [['main', 'Main'], ['hsbc', 'HSBC'], ['hey', 'Hey Banco'], ['cetes', 'Cetes'], ['nu', 'Nu'], ['gbm', 'GBM'], ['supertasas', 'Supertasas']];
  const DEFAULT_CATS = {
    expense: [
      { id: 'comida', ico: '🍔', color: '#f59e0b' },
      { id: 'transporte', ico: '🚌', color: '#3b82f6' },
      { id: 'casa', ico: '🏠', color: '#8b5cf6' },
      { id: 'ocio', ico: '🎬', color: '#ec4899' },
      { id: 'salud', ico: '💊', color: '#ef4444' },
      { id: 'compras', ico: '🛍️', color: '#14b8a6' },
      { id: 'servicios', ico: '💡', color: '#eab308' },
      { id: 'otros-g', ico: '📦', color: '#94a3b8' }
    ],
    income: [
      { id: 'sueldo', ico: '💼', color: '#0f9d73' },
      { id: 'extra', ico: '💰', color: '#22c55e' },
      { id: 'regalo', ico: '🎁', color: '#ec4899' },
      { id: 'otros-i', ico: '📦', color: '#94a3b8' }
    ]
  };

  const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
  const round2 = n => Math.round(n * 100) / 100;

  function defaults() {
    return {
      v: 2, currency: 'MXN', lang: 'es', lastAcc: 'main',
      accounts: DEFAULT_ACCOUNTS.map(([id, name], i) => ({ id, name, color: PALETTE[i % PALETTE.length], opening: 0 })),
      cats: { expense: DEFAULT_CATS.expense.map(c => ({ ...c })), income: DEFAULT_CATS.income.map(c => ({ ...c })) },
      tx: []
    };
  }

  // Acepta datos v1 (sin cuentas) o v2 y devuelve siempre un estado v2 válido.
  function normalize(d) {
    const base = defaults();
    if (!d || typeof d !== 'object') return base;
    if (CURRENCIES.includes(d.currency)) base.currency = d.currency;
    if (d.lang === 'es' || d.lang === 'en') base.lang = d.lang;

    if (Array.isArray(d.accounts) && d.accounts.length) {
      const seen = new Set();
      const accs = [];
      d.accounts.forEach((a, i) => {
        if (!a || !a.id || seen.has(String(a.id))) return;
        seen.add(String(a.id));
        accs.push({
          id: String(a.id), name: String(a.name || 'Cuenta').slice(0, 30),
          color: typeof a.color === 'string' ? a.color : PALETTE[i % PALETTE.length],
          opening: isFinite(a.opening) ? Number(a.opening) : 0
        });
      });
      if (accs.length) base.accounts = accs;
    }
    if (d.cats && typeof d.cats === 'object') {
      ['expense', 'income'].forEach(type => {
        if (!Array.isArray(d.cats[type])) return;
        const seen = new Set();
        const list = [];
        d.cats[type].forEach(c => {
          if (!c || !c.id || seen.has(String(c.id))) return;
          seen.add(String(c.id));
          const item = { id: String(c.id), ico: String(c.ico || '🏷️'), color: typeof c.color === 'string' ? c.color : PALETTE[0] };
          if (c.name) item.name = String(c.name).slice(0, 24);
          list.push(item);
        });
        base.cats[type] = list;
      });
    }
    const accIds = new Set(base.accounts.map(a => a.id));
    const first = base.accounts[0].id;
    base.lastAcc = accIds.has(d.lastAcc) ? d.lastAcc : first;

    if (Array.isArray(d.tx)) {
      base.tx = d.tx.filter(x => x && typeof x.date === 'string' && DATE_RE.test(x.date) && isFinite(x.amount) &&
        ['expense', 'income', 'transfer', 'adjust'].includes(x.type)).map(x => {
        const o = { id: String(x.id || uid()), type: x.type, amount: Number(x.amount), date: x.date, note: String(x.note || ''), acc: accIds.has(x.acc) ? x.acc : first };
        if (x.type === 'transfer') o.to = x.to;
        if (x.type === 'expense' || x.type === 'income') o.cat = String(x.cat || '');
        return o;
      }).filter(x => x.type !== 'transfer' || (accIds.has(x.to) && x.to !== x.acc));
    }
    return base;
  }

  function loadState() {
    try {
      const raw2 = localStorage.getItem(KEY2);
      if (raw2) return normalize(JSON.parse(raw2));
      const raw1 = localStorage.getItem(KEY1); // migración desde la versión anterior (sin cuentas)
      if (raw1) {
        const s = normalize(JSON.parse(raw1));
        try { localStorage.setItem(KEY2, JSON.stringify(s)); } catch (e) { /* se reintenta al guardar */ }
        return s;
      }
    } catch (e) { /* datos dañados: se empieza limpio */ }
    return defaults();
  }
  function save() {
    try { localStorage.setItem(KEY2, JSON.stringify(state)); }
    catch (e) { toast(t('saveFail')); }
  }

  let state = loadState();
  let view = 'home';
  let cur = new Date(); cur.setDate(1);
  let filterAcc = 'all';

  /* =====================================================================
     Utilidades
     ===================================================================== */
  const pad = n => String(n).padStart(2, '0');
  const monthKey = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
  const todayStr = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
  const parseDate = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = s => String(s || '').trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const cmp = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

  const fmtCache = {};
  // El formato de dinero no depende del idioma: así la moneda se ve igual en español e inglés.
  function money(n) {
    const c = state.currency;
    try {
      fmtCache[c] = fmtCache[c] || new Intl.NumberFormat('es-MX', { style: 'currency', currency: c });
      return fmtCache[c].format(n);
    } catch (e) { return '$' + n.toFixed(2); }
  }
  const signed = n => (n > 0.004 ? '+' : '') + money(n);
  const colorCls = n => (n > 0.004 ? 'pos' : n < -0.004 ? 'neg' : '');

  function parseNum(s) {
    s = String(s == null ? '' : s).replace(/[\s ]/g, '').replace(/[^\d.,\-+]/g, '');
    if (!s) return NaN;
    if (s.includes(',') && s.includes('.')) s = s.replace(/,/g, '');
    else if (s.includes(',')) s = /,\d{1,2}$/.test(s) ? s.replace(',', '.') : s.replace(/,/g, '');
    return Number(s);
  }

  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg; el.hidden = false;
    clearTimeout(toast.t);
    toast.t = setTimeout(() => { el.hidden = true; }, 2400);
  }

  const acc = id => state.accounts.find(a => a.id === id);
  const accName = id => (acc(id) ? acc(id).name : '?');
  const catName = c => c.name || t('cat.' + c.id);
  function findCat(id) {
    return state.cats.expense.find(c => c.id === id) || state.cats.income.find(c => c.id === id) ||
      { id, ico: '📦', color: '#94a3b8', name: t('cat.otros-g') };
  }

  /* Saldos: saldo inicial + efecto de cada movimiento hasta una fecha. */
  function effect(x, id) {
    switch (x.type) {
      case 'income': return x.acc === id ? x.amount : 0;
      case 'expense': return x.acc === id ? -x.amount : 0;
      case 'adjust': return x.acc === id ? x.amount : 0;
      case 'transfer': return (x.acc === id ? -x.amount : 0) + (x.to === id ? x.amount : 0);
      default: return 0;
    }
  }
  function balanceOf(id, upTo) {
    const a = acc(id);
    let b = a ? a.opening : 0;
    for (const x of state.tx) if (!upTo || x.date <= upTo) b += effect(x, id);
    return round2(b);
  }
  const filterIds = () => (filterAcc === 'all' ? state.accounts.map(a => a.id) : [filterAcc]);
  const sumBal = (ids, upTo) => round2(ids.reduce((s, id) => s + balanceOf(id, upTo), 0));
  const inFilter = x => filterAcc === 'all' || x.acc === filterAcc || x.to === filterAcc;
  const endOf = d => monthKey(d) + '-31'; // las fechas son texto ISO: comparar con "-31" funciona para cualquier mes
  const shiftMonth = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);

  /* =====================================================================
     Vistas
     ===================================================================== */
  function applyLang() {
    document.documentElement.lang = state.lang;
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  }

  function render() {
    const ml = cur.toLocaleDateString(loc(), { month: 'long', year: 'numeric' });
    $('#month-label').textContent = ml.charAt(0).toUpperCase() + ml.slice(1);
    renderFilter();
    renderHome();
    renderAccounts();
    renderStats();
    renderSettings();
  }

  function accOptions(selected) {
    return state.accounts.map(a => `<option value="${esc(a.id)}"${a.id === selected ? ' selected' : ''}>${esc(a.name)}</option>`).join('');
  }
  function renderFilter() {
    if (filterAcc !== 'all' && !acc(filterAcc)) filterAcc = 'all';
    $('#acc-filter').innerHTML = `<option value="all">${esc(t('allAccounts'))}</option>` + accOptions(filterAcc);
    $('#acc-filter').value = filterAcc;
  }

  function txRow(x) {
    const f = filterAcc;
    if (x.type === 'transfer') {
      let sign = '', cls = 'neutral';
      if (f !== 'all') { if (x.acc === f) { sign = '−'; cls = 'expense'; } else { sign = '+'; cls = 'income'; } }
      return `<button class="tx" data-id="${esc(x.id)}"><div class="ico" style="background:#64748b22">🔁</div>
        <div class="info"><b>${esc(accName(x.acc))} → ${esc(accName(x.to))}</b>${x.note ? `<small>${esc(x.note)}</small>` : ''}</div>
        <div class="amt ${cls}">${sign}${esc(money(x.amount))}</div></button>`;
    }
    if (x.type === 'adjust') {
      const up = x.amount >= 0;
      return `<button class="tx" data-id="${esc(x.id)}"><div class="ico" style="background:#64748b22">⚖️</div>
        <div class="info"><b>${esc(t('adjustment'))}</b><small>${esc(accName(x.acc))}${x.note ? ' · ' + esc(x.note) : ''}</small></div>
        <div class="amt ${up ? 'income' : 'expense'}">${up ? '+' : '−'}${esc(money(Math.abs(x.amount)))}</div></button>`;
    }
    const c = findCat(x.cat);
    const sub = (f === 'all' ? accName(x.acc) + (x.note ? ' · ' : '') : '') + (x.note || '');
    return `<button class="tx" data-id="${esc(x.id)}"><div class="ico" style="background:${esc(c.color)}22">${esc(c.ico)}</div>
      <div class="info"><b>${esc(catName(c))}</b>${sub ? `<small>${esc(sub)}</small>` : ''}</div>
      <div class="amt ${x.type}">${x.type === 'income' ? '+' : '−'}${esc(money(x.amount))}</div></button>`;
  }

  function renderHome() {
    const ids = filterIds();
    const mk = monthKey(cur);
    const bal = sumBal(ids, endOf(cur));
    const prev = sumBal(ids, endOf(shiftMonth(cur, -1)));
    const list = state.tx.filter(x => x.date.startsWith(mk) && inFilter(x));
    let inc = 0, exp = 0;
    list.forEach(x => { if (x.type === 'income') inc += x.amount; else if (x.type === 'expense') exp += x.amount; });

    const balEl = $('#sum-balance');
    balEl.textContent = money(bal);
    balEl.classList.toggle('neg', bal < 0);
    const ch = round2(bal - prev);
    $('#sum-change').innerHTML = `${esc(t('monthChange'))}: <span class="${colorCls(ch)}">${esc(signed(ch))}</span>`;
    $('#sum-income').textContent = money(inc);
    $('#sum-expense').textContent = money(exp);

    const box = $('#tx-list');
    if (!list.length) { box.innerHTML = `<div class="empty"><span class="big">🧾</span>${t('empty')}</div>`; return; }
    const sorted = [...list].sort((a, b) => cmp(b.date, a.date) || cmp(b.id, a.id));
    const groups = {};
    sorted.forEach(x => { (groups[x.date] = groups[x.date] || []).push(x); });
    box.innerHTML = Object.keys(groups).map(date => {
      const items = groups[date];
      const net = items.reduce((s, x) => s + (x.type === 'income' ? x.amount : x.type === 'expense' ? -x.amount : 0), 0);
      let dl = parseDate(date).toLocaleDateString(loc(), { weekday: 'long', day: 'numeric', month: 'short' });
      dl = dl.charAt(0).toUpperCase() + dl.slice(1);
      return `<div class="day-head"><span>${esc(dl)}</span><span>${esc(money(net))}</span></div>` + items.map(txRow).join('');
    }).join('');
  }

  function renderAccounts() {
    const end = endOf(cur), prevEnd = endOf(shiftMonth(cur, -1));
    const rows = state.accounts.map(a => {
      const bal = balanceOf(a.id, end);
      return { a, bal, ch: round2(bal - balanceOf(a.id, prevEnd)) };
    });
    const total = round2(rows.reduce((s, r) => s + r.bal, 0));
    const totalPrev = round2(rows.reduce((s, r) => s + r.bal - r.ch, 0));
    const pos = rows.reduce((s, r) => s + Math.max(0, r.bal), 0);

    const tEl = $('#acc-total');
    tEl.textContent = money(total);
    tEl.classList.toggle('neg', total < 0);
    const tch = round2(total - totalPrev);
    $('#acc-change').innerHTML = `${esc(t('monthChange'))}: <span class="${colorCls(tch)}">${esc(signed(tch))}</span>`;
    $('#acc-stack').innerHTML = pos > 0
      ? rows.filter(r => r.bal > 0).sort((x, y) => y.bal - x.bal).map(r => `<i style="width:${(r.bal / pos * 100).toFixed(2)}%;background:${esc(r.a.color)}"></i>`).join('')
      : '';

    $('#acc-list').innerHTML = rows.map(r => {
      const share = pos > 0 && r.bal > 0 ? Math.round(r.bal / pos * 100) : 0;
      return `<button class="acc" data-id="${esc(r.a.id)}">
        <div class="ico" style="background:${esc(r.a.color)}">${esc(Array.from(r.a.name)[0] || '?').toUpperCase()}</div>
        <div class="info"><b>${esc(r.a.name)}</b><small>${esc(t('shareOf', { p: share }))}</small></div>
        <div class="right"><b class="${r.bal < 0 ? 'neg' : ''}">${esc(money(r.bal))}</b><small class="${colorCls(r.ch)}">${esc(signed(r.ch))}</small></div>
      </button>`;
    }).join('');
  }

  /* --- Gráficas SVG --- */
  function lineSvg(pts, color) {
    const W = 320, H = 150, pl = 12, pr = 12, pt = 24, pb = 26;
    const vals = pts.map(p => p.v);
    let min = Math.min(...vals), max = Math.max(...vals);
    if (min === max) { min -= 1; max += 1; }
    const padv = (max - min) * 0.12; min -= padv; max += padv;
    const X = i => pl + (W - pl - pr) * (pts.length === 1 ? 0.5 : i / (pts.length - 1));
    const Y = v => pt + (H - pt - pb) * (max - v) / (max - min);
    const line = pts.map((p, i) => `${X(i).toFixed(1)},${Y(p.v).toFixed(1)}`).join(' ');
    const area = `${X(0).toFixed(1)},${H - pb} ${line} ${X(pts.length - 1).toFixed(1)},${H - pb}`;
    const zero = (min < 0 && max > 0) ? `<line x1="${pl}" x2="${W - pr}" y1="${Y(0).toFixed(1)}" y2="${Y(0).toFixed(1)}" stroke="var(--line)" stroke-dasharray="3 3"/>` : '';
    const dots = pts.map((p, i) => `<circle cx="${X(i).toFixed(1)}" cy="${Y(p.v).toFixed(1)}" r="3.5" fill="${color}"/>`).join('');
    const labels = pts.map((p, i) => `<text x="${X(i).toFixed(1)}" y="${H - 8}" text-anchor="middle" font-size="11" fill="var(--muted)">${esc(p.label)}</text>`).join('');
    const last = pts[pts.length - 1];
    const lastTxt = `<text x="${(X(pts.length - 1)).toFixed(1)}" y="${(Y(last.v) - 9).toFixed(1)}" text-anchor="end" font-size="11" font-weight="700" fill="var(--text)">${esc(money(last.v))}</text>`;
    return `<svg viewBox="0 0 ${W} ${H}" role="img"><line x1="${pl}" x2="${W - pr}" y1="${H - pb}" y2="${H - pb}" stroke="var(--line)"/>${zero}
      <polygon points="${area}" fill="${color}" opacity=".12"/><polyline points="${line}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>${dots}${labels}${lastTxt}</svg>`;
  }
  const monthShort = d => d.toLocaleDateString(loc(), { month: 'short' }).replace('.', '');
  function trendPoints(ids) {
    const pts = [];
    for (let i = 5; i >= 0; i--) {
      const d = shiftMonth(cur, -i);
      pts.push({ label: monthShort(d), v: sumBal(ids, endOf(d)) });
    }
    return pts;
  }

  function renderStats() {
    $('#trend').innerHTML = lineSvg(trendPoints(filterIds()), 'var(--primary)');

    const list = state.tx.filter(x => x.type === 'expense' && x.date.startsWith(monthKey(cur)) && inFilter(x));
    const total = list.reduce((a, x) => a + x.amount, 0);
    const donut = $('#donut'), legend = $('#legend');
    if (!total) {
      donut.innerHTML = '';
      legend.innerHTML = `<div class="empty">${esc(t('noExpenses'))}</div>`;
    } else {
      const byCat = {};
      list.forEach(x => { byCat[x.cat] = (byCat[x.cat] || 0) + x.amount; });
      const rows = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
      const r = 70, C = 2 * Math.PI * r;
      let offset = 0;
      const segs = rows.map(([id, v]) => {
        const len = (v / total) * C;
        const s = `<circle cx="100" cy="100" r="${r}" fill="none" stroke="${esc(findCat(id).color)}" stroke-width="26"
          stroke-dasharray="${len.toFixed(3)} ${(C - len).toFixed(3)}" stroke-dashoffset="${(-offset).toFixed(3)}" transform="rotate(-90 100 100)"/>`;
        offset += len;
        return s;
      }).join('');
      donut.innerHTML = `<svg viewBox="0 0 200 200" role="img">
        <circle cx="100" cy="100" r="${r}" fill="none" stroke="var(--line)" stroke-width="26"/>${segs}
        <text x="100" y="96" text-anchor="middle" font-size="11" fill="var(--muted)">${esc(t('total'))}</text>
        <text x="100" y="116" text-anchor="middle" font-size="15" font-weight="700" fill="var(--text)">${esc(money(total))}</text></svg>`;
      legend.innerHTML = rows.map(([id, v]) => {
        const c = findCat(id);
        return `<div class="leg"><span class="sw" style="background:${esc(c.color)}"></span><span class="n">${esc(c.ico)} ${esc(catName(c))}</span>
          <span class="p">${Math.round(v / total * 100)}%</span><span class="v">${esc(money(v))}</span></div>`;
      }).join('');
    }

    const months = [];
    for (let i = 5; i >= 0; i--) {
      const d = shiftMonth(cur, -i), mk = monthKey(d);
      let inc = 0, exp = 0;
      state.tx.forEach(x => {
        if (!x.date.startsWith(mk) || !inFilter(x)) return;
        if (x.type === 'income') inc += x.amount; else if (x.type === 'expense') exp += x.amount;
      });
      months.push({ label: monthShort(d), inc, exp });
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
    $('#bars').innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img"><line x1="0" y1="${base}" x2="${W}" y2="${base}" stroke="var(--line)"/>${bars}</svg>`;
  }

  function renderSettings() {
    $('#lang').value = state.lang;
    $('#currency').innerHTML = CURRENCIES.map(c => `<option value="${c}"${c === state.currency ? ' selected' : ''}>${esc(t('cur.' + c))}</option>`).join('');
    ['expense', 'income'].forEach(type => {
      $('#chips-' + type).innerHTML = state.cats[type].map(c =>
        `<button class="chip" data-type="${type}" data-id="${esc(c.id)}"><span>${esc(c.ico)}</span>${esc(catName(c))}</button>`
      ).join('') + `<button class="chip add" data-type="${type}" data-id="">+ ${esc(t('newCat'))}</button>`;
    });
  }

  /* =====================================================================
     Navegación y filtros
     ===================================================================== */
  function setView(v) {
    view = v;
    document.body.dataset.view = v;
    $$('.view').forEach(el => el.classList.toggle('active', el.id === 'view-' + v));
    $$('.tabbar button').forEach(b => b.classList.toggle('active', b.dataset.view === v));
    $('#fab').hidden = v !== 'home';
    window.scrollTo(0, 0);
  }
  $$('.tabbar button').forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));
  $('#prev-month').addEventListener('click', () => { cur = shiftMonth(cur, -1); render(); });
  $('#next-month').addEventListener('click', () => { cur = shiftMonth(cur, 1); render(); });
  $('#acc-filter').addEventListener('change', e => { filterAcc = e.target.value; render(); });

  /* --- Overlays --- */
  const show = id => { $('#' + id).hidden = false; };
  const hide = id => { $('#' + id).hidden = true; if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); };
  $$('.overlay').forEach(ov => ov.addEventListener('click', e => { if (e.target === ov) hide(ov.id); }));

  function renderSwatches(sel, selected, onPick) {
    const box = $(sel);
    box.innerHTML = PALETTE.map(c => `<button type="button" class="${c === selected ? 'sel' : ''}" data-c="${c}" style="background:${c}" aria-label="${c}"></button>`).join('');
    box.onclick = e => {
      const b = e.target.closest('button'); if (!b) return;
      onPick(b.dataset.c); renderSwatches(sel, b.dataset.c, onPick);
    };
  }

  /* =====================================================================
     Formulario de movimientos (gasto / ingreso / transferencia)
     ===================================================================== */
  const F = { type: 'expense', sign: 1, cat: null, editing: null };

  const defAcc = () => (filterAcc !== 'all' && acc(filterAcc)) ? filterAcc : (acc(state.lastAcc) ? state.lastAcc : state.accounts[0].id);

  function renderSeg() {
    const opts = F.type === 'adjust'
      ? [['adjust+', t('type.adjUp'), F.sign > 0], ['adjust-', t('type.adjDown'), F.sign < 0]]
      : [['expense', t('type.expense'), F.type === 'expense'], ['income', t('type.income'), F.type === 'income'], ['transfer', t('type.transfer'), F.type === 'transfer']];
    $('#f-seg').innerHTML = opts.map(([v, l, on]) => `<button type="button" data-v="${v}" class="${on ? 'active' : ''}">${esc(l)}</button>`).join('');
  }
  function renderFormCats() {
    const isCat = F.type === 'expense' || F.type === 'income';
    $('#f-cats').hidden = !isCat;
    if (!isCat) return;
    $('#f-cats').innerHTML = state.cats[F.type].map(c =>
      `<button type="button" class="cat ${c.id === F.cat ? 'sel' : ''}" data-cat="${esc(c.id)}"><span>${esc(c.ico)}</span><em>${esc(catName(c))}</em></button>`
    ).join('') + `<button type="button" class="cat add" data-cat="__new"><span>＋</span><em>${esc(t('newCat'))}</em></button>`;
  }
  function setFormType(tp) {
    F.type = tp;
    if ((tp === 'expense' || tp === 'income') && !state.cats[tp].some(c => c.id === F.cat)) F.cat = (state.cats[tp][0] || {}).id || null;
    $('#f-acc-wrap').hidden = tp === 'transfer';
    $('#f-tr-wrap').hidden = tp !== 'transfer';
    renderSeg();
    renderFormCats();
  }

  function openTx(id, preset) {
    const x = id ? state.tx.find(v => v.id === id) : null;
    F.editing = x ? x.id : null;
    F.sign = x && x.type === 'adjust' && x.amount < 0 ? -1 : 1;
    F.cat = x ? (x.cat || null) : null;
    const a0 = x ? x.acc : defAcc();
    $('#f-acc').innerHTML = accOptions(a0);
    $('#f-from').innerHTML = accOptions(a0);
    const toDef = x && x.type === 'transfer' ? x.to : (state.accounts.find(a => a.id !== a0) || {}).id;
    $('#f-to').innerHTML = accOptions(toDef);
    $('#f-to').value = toDef;
    setFormType(x ? x.type : (preset || 'expense'));
    $('#f-amount').value = x ? String(Math.abs(x.amount)) : '';
    $('#f-date').value = x ? x.date : (monthKey(cur) === monthKey(new Date()) ? todayStr() : `${monthKey(cur)}-01`);
    $('#f-note').value = x ? (x.note || '') : '';
    $('#f-delete').hidden = !x;
    show('ov-tx');
    if (!x) setTimeout(() => $('#f-amount').focus(), 60);
  }

  $('#fab').addEventListener('click', () => openTx());
  $('#f-cancel').addEventListener('click', () => hide('ov-tx'));
  $('#f-seg').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const v = b.dataset.v;
    if (v === 'adjust+') { F.sign = 1; renderSeg(); }
    else if (v === 'adjust-') { F.sign = -1; renderSeg(); }
    else setFormType(v);
  });
  $('#f-cats').addEventListener('click', e => {
    const b = e.target.closest('.cat'); if (!b) return;
    if (b.dataset.cat === '__new') { openCat(F.type, null, newId => { F.cat = newId; renderFormCats(); }); return; }
    F.cat = b.dataset.cat; renderFormCats();
  });
  $('#tx-list').addEventListener('click', e => { const b = e.target.closest('.tx'); if (b) openTx(b.dataset.id); });

  $('#f-save').addEventListener('click', () => {
    const amount = parseNum($('#f-amount').value);
    const date = $('#f-date').value;
    const note = $('#f-note').value.trim();
    if (!isFinite(amount) || amount <= 0) { toast(t('needAmount')); return; }
    if (!date) { toast(t('needDate')); return; }
    const amt = round2(amount);
    let data;
    if (F.type === 'transfer') {
      const from = $('#f-from').value, to = $('#f-to').value;
      if (state.accounts.length < 2) { toast(t('needTwo')); return; }
      if (from === to) { toast(t('sameAcc')); return; }
      data = { type: 'transfer', acc: from, to, amount: amt, date, note };
      state.lastAcc = from;
    } else if (F.type === 'adjust') {
      data = { type: 'adjust', acc: $('#f-acc').value, amount: F.sign * amt, date, note };
    } else {
      const cat = F.cat || (state.cats[F.type][0] || {}).id || '';
      data = { type: F.type, acc: $('#f-acc').value, cat, amount: amt, date, note };
      state.lastAcc = data.acc;
    }
    if (F.editing) {
      const i = state.tx.findIndex(v => v.id === F.editing);
      if (i >= 0) state.tx[i] = { id: F.editing, ...data };
    } else {
      state.tx.push({ id: uid(), ...data });
    }
    save();
    const d = parseDate(date); cur = new Date(d.getFullYear(), d.getMonth(), 1);
    hide('ov-tx'); render(); toast(t('saved'));
  });
  $('#f-delete').addEventListener('click', () => {
    if (!F.editing || !confirm(t('cDelTx'))) return;
    state.tx = state.tx.filter(v => v.id !== F.editing);
    save(); hide('ov-tx'); render(); toast(t('deleted'));
  });

  /* =====================================================================
     Cuentas: detalle, alta/edición, borrado
     ===================================================================== */
  let detailId = null;

  function openDetail(id) {
    const a = acc(id); if (!a) return;
    detailId = id;
    const mk = monthKey(cur), end = endOf(cur);
    const bal = balanceOf(id, end);
    const pos = state.accounts.reduce((s, x) => s + Math.max(0, balanceOf(x.id, end)), 0);
    const share = pos > 0 && bal > 0 ? Math.round(bal / pos * 100) : 0;
    let mi = 0, me = 0, tin = 0, tout = 0, ai = 0, ae = 0, n = 0;
    state.tx.forEach(x => {
      if (x.acc !== id && x.to !== id) return;
      n++;
      const inM = x.date.startsWith(mk);
      if (x.type === 'income') { ai += x.amount; if (inM) mi += x.amount; }
      else if (x.type === 'expense') { ae += x.amount; if (inM) me += x.amount; }
      else if (x.type === 'transfer' && inM) { if (x.to === id) tin += x.amount; if (x.acc === id) tout += x.amount; }
    });
    const stat = (l, v) => `<div>${esc(l)}<strong>${esc(money(v))}</strong></div>`;
    $('#detail-body').innerHTML = `
      <div class="detail-head"><div class="ico" style="background:${esc(a.color)};color:#fff;font-weight:700">${esc(Array.from(a.name)[0] || '?').toUpperCase()}</div>
        <div><h3>${esc(a.name)}</h3><small>${esc(t('shareOf', { p: share }))} · ${esc(t(n === 1 ? 'movCount1' : 'movCount', { n }))}</small></div></div>
      <div class="detail-bal ${bal < 0 ? 'neg' : ''}">${esc(money(bal))}</div>
      <div class="grid2">${stat(t('monthIncome'), mi)}${stat(t('monthExpense'), me)}${stat(t('trIn'), tin)}${stat(t('trOut'), tout)}${stat(t('allIncome'), ai)}${stat(t('allExpense'), ae)}</div>
      <div class="detail-sub">${esc(t('trendT'))}</div>
      <div class="trend-svg">${lineSvg(trendPoints([id]), esc(a.color))}</div>
      <div class="sheet-actions" style="margin-top:12px">
        <button class="btn" data-act="edit">${esc(t('edit'))}</button>
        <button class="btn primary" data-act="movs">${esc(t('showMov'))}</button>
      </div>`;
    show('ov-detail');
  }
  $('#acc-list').addEventListener('click', e => { const b = e.target.closest('.acc'); if (b) openDetail(b.dataset.id); });
  $('#detail-body').addEventListener('click', e => {
    const b = e.target.closest('[data-act]'); if (!b) return;
    if (b.dataset.act === 'edit') openAcc(detailId);
    if (b.dataset.act === 'movs') { filterAcc = detailId; hide('ov-detail'); setView('home'); render(); }
  });

  const A = { id: null, color: PALETTE[0] };
  function openAcc(id) {
    const a = id ? acc(id) : null;
    A.id = a ? a.id : null;
    A.color = a ? a.color : PALETTE[state.accounts.length % PALETTE.length];
    $('#a-title').textContent = t(a ? 'editAccountT' : 'newAccountT');
    $('#a-name').value = a ? a.name : '';
    $('#a-open').value = a ? String(a.opening) : '';
    $('#a-delete').hidden = !a;
    renderSwatches('#a-colors', A.color, c => { A.color = c; });
    show('ov-acc');
    if (!a) setTimeout(() => $('#a-name').focus(), 60);
  }
  $('#btn-add-acc').addEventListener('click', () => openAcc(null));
  $('#btn-transfer').addEventListener('click', () => {
    if (state.accounts.length < 2) { toast(t('needTwo')); return; }
    openTx(null, 'transfer');
  });
  $('#a-cancel').addEventListener('click', () => hide('ov-acc'));
  $('#a-save').addEventListener('click', () => {
    const name = $('#a-name').value.trim();
    if (!name) { toast(t('needName')); return; }
    if (state.accounts.some(a => a.id !== A.id && norm(a.name) === norm(name))) { toast(t('dupName')); return; }
    const op = parseNum($('#a-open').value);
    const opening = isFinite(op) ? round2(op) : 0;
    if (A.id) {
      const a = acc(A.id); a.name = name; a.color = A.color; a.opening = opening;
    } else {
      state.accounts.push({ id: 'a' + uid(), name, color: A.color, opening });
    }
    save(); hide('ov-acc');
    render();
    if (A.id && !$('#ov-detail').hidden) openDetail(A.id);
    toast(t('saved'));
  });
  $('#a-delete').addEventListener('click', () => {
    const a = acc(A.id); if (!a) return;
    if (state.accounts.length <= 1) { toast(t('lastAcc')); return; }
    const n = state.tx.filter(x => x.acc === a.id || x.to === a.id).length;
    if (!confirm(n ? t('cDelAcc', { name: a.name, n }) : t('cDelAccEmpty', { name: a.name }))) return;
    state.tx = state.tx.filter(x => x.acc !== a.id && x.to !== a.id);
    state.accounts = state.accounts.filter(x => x.id !== a.id);
    if (state.lastAcc === a.id) state.lastAcc = state.accounts[0].id;
    if (filterAcc === a.id) filterAcc = 'all';
    save(); hide('ov-acc'); hide('ov-detail'); render(); toast(t('deleted'));
  });

  /* =====================================================================
     Categorías: crear / editar / eliminar
     ===================================================================== */
  const C = { type: 'expense', id: null, color: PALETTE[0], after: null };

  function firstGrapheme(s) {
    s = s.trim();
    if (!s) return '';
    try { if (Intl.Segmenter) return [...new Intl.Segmenter().segment(s)][0].segment; } catch (e) { /* sin Segmenter */ }
    return Array.from(s).slice(0, 2).join('');
  }
  function openCat(type, id, after) {
    C.type = type; C.id = id; C.after = after || null;
    const c = id ? state.cats[type].find(x => x.id === id) : null;
    $('#c-title').textContent = t(c ? 'editCatT' : 'newCatT');
    $('#c-name').value = c ? catName(c) : '';
    $('#c-ico').value = c ? c.ico : '🏷️';
    C.color = c ? c.color : PALETTE[state.cats[type].length % PALETTE.length];
    $('#c-delete').hidden = !c;
    renderSwatches('#c-colors', C.color, v => { C.color = v; });
    show('ov-cat');
    if (!c) setTimeout(() => $('#c-name').focus(), 60);
  }
  $('#c-emojis').innerHTML = EMOJIS.map(e => `<button type="button">${e}</button>`).join('');
  $('#c-emojis').addEventListener('click', e => { const b = e.target.closest('button'); if (b) $('#c-ico').value = b.textContent; });
  $('#c-cancel').addEventListener('click', () => hide('ov-cat'));
  $('#c-save').addEventListener('click', () => {
    const name = $('#c-name').value.trim();
    if (!name) { toast(t('needName')); return; }
    if (state.cats[C.type].some(c => c.id !== C.id && norm(catName(c)) === norm(name))) { toast(t('dupName')); return; }
    const ico = firstGrapheme($('#c-ico').value) || '🏷️';
    let newId = null;
    if (C.id) {
      const c = state.cats[C.type].find(x => x.id === C.id);
      if (!(c && !c.name && name === t('cat.' + c.id))) c.name = name; // no "congelar" el nombre traducido de las de fábrica
      c.ico = ico; c.color = C.color;
    } else {
      newId = 'c' + uid();
      state.cats[C.type].push({ id: newId, name, ico, color: C.color });
    }
    save(); hide('ov-cat'); render();
    if (C.after && newId) C.after(newId);
    toast(t('saved'));
  });
  $('#c-delete').addEventListener('click', () => {
    const c = state.cats[C.type].find(x => x.id === C.id); if (!c) return;
    if (!confirm(t('cDelCat', { name: catName(c) }))) return;
    state.cats[C.type] = state.cats[C.type].filter(x => x.id !== c.id);
    save(); hide('ov-cat'); render(); toast(t('deleted'));
  });
  ['expense', 'income'].forEach(type => {
    $('#chips-' + type).addEventListener('click', e => {
      const b = e.target.closest('.chip'); if (b) openCat(type, b.dataset.id || null);
    });
  });

  /* =====================================================================
     Ajustes: idioma, moneda, respaldos
     ===================================================================== */
  $('#lang').addEventListener('change', e => { state.lang = e.target.value; save(); applyLang(); render(); });
  $('#currency').addEventListener('change', e => { state.currency = e.target.value; save(); render(); });

  async function shareOrDownload(filename, mime, content) {
    const blob = new Blob([content], { type: mime });
    try {
      const file = new File([blob], filename, { type: mime });
      if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: filename }); return; }
    } catch (e) { if (e && e.name === 'AbortError') return; }
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
    const rows = [['date', 'type', 'account', 'to_account', 'category', 'amount', 'note'].join(',')];
    [...state.tx].sort((a, b) => cmp(a.date, b.date)).forEach(x => {
      const cat = x.type === 'expense' || x.type === 'income' ? catName(findCat(x.cat)) : '';
      rows.push([x.date, x.type, q(accName(x.acc)), q(x.to ? accName(x.to) : ''), q(cat), x.amount, q(x.note || '')].join(','));
    });
    shareOrDownload(`gastos-${todayStr()}.csv`, 'text/csv', '﻿' + rows.join('\n'));
  });

  $('#btn-import').addEventListener('click', () => $('#file-import').click());
  $('#file-import').addEventListener('change', async e => {
    const f = e.target.files[0]; e.target.value = '';
    if (!f) return;
    try {
      const d = JSON.parse(await f.text());
      if (!d || !Array.isArray(d.tx)) throw new Error('formato');
      const ns = normalize(d);
      if (!confirm(t('cRestore', { n: ns.tx.length }))) return;
      state = ns; filterAcc = 'all';
      save(); applyLang(); render(); toast(t('restored'));
    } catch (err) { toast(t('badBackup')); }
  });

  $('#btn-reset').addEventListener('click', () => {
    if (!confirm(t('cReset'))) return;
    const keep = { currency: state.currency, lang: state.lang };
    state = { ...defaults(), ...keep }; filterAcc = 'all';
    save(); render(); toast(t('wiped'));
  });

  /* =====================================================================
     Importar desde MoneyStats (CSV)
     ===================================================================== */
  const MONTHS = {
    jan: 0, ene: 0, feb: 1, mar: 2, apr: 3, abr: 3, may: 4, jun: 5, jul: 6, aug: 7, ago: 7,
    sep: 8, sept: 8, oct: 9, nov: 10, dec: 11, dic: 11
  };
  function parseMsDate(s) {
    s = String(s || '').trim();
    let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (m) return `${m[1]}-${pad(+m[2])}-${pad(+m[3])}`;
    m = s.match(/^(\d{1,2})[-\/\s.]([A-Za-zÀ-ÿ]{3,4})\.?[-\/\s.](\d{2,4})$/);
    if (m) {
      const mo = MONTHS[norm(m[2])];
      if (mo === undefined) return null;
      let y = +m[3]; if (y < 100) y += y < 70 ? 2000 : 1900;
      return `${y}-${pad(mo + 1)}-${pad(+m[1])}`;
    }
    m = s.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})$/);
    if (m) { let y = +m[3]; if (y < 100) y += y < 70 ? 2000 : 1900; return `${y}-${pad(+m[2])}-${pad(+m[1])}`; }
    return null;
  }

  function parseCSV(text, delim) {
    text = text.replace(/^﻿/, '');
    const rows = [];
    let row = [], f = '', q = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (q) {
        if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c;
      } else if (c === '"') q = true;
      else if (c === delim) { row.push(f); f = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(f); f = ''; rows.push(row); row = [];
      } else f += c;
    }
    if (f !== '' || row.length) { row.push(f); rows.push(row); }
    return rows.filter(r => r.some(x => x.trim() !== ''));
  }

  // MoneyStats exporta en Windows-1252 (los espacios duros llegan como 0xA0), así que se prueba UTF-8 y si falla se usa Windows-1252.
  async function readTextSmart(file) {
    const buf = await file.arrayBuffer();
    try { return new TextDecoder('utf-8', { fatal: true }).decode(buf); }
    catch (e) { return new TextDecoder('windows-1252').decode(buf); }
  }

  const cleanTxt = s => String(s || '').replace(/[ \s]+/g, ' ').trim();

  function catMatches(c, name) {
    const n = norm(name);
    if (c.name) return norm(c.name) === n;
    return ['es', 'en'].some(l => norm(I18N[l]['cat.' + c.id] || '') === n);
  }

  // Construye el plan de importación sin tocar el estado; solo se aplica si el usuario confirma.
  function planMoneyStats(text) {
    const firstLine = text.split(/\r?\n/, 1)[0] || '';
    const delim = (firstLine.match(/;/g) || []).length > (firstLine.match(/,/g) || []).length ? ';' : ',';
    const rows = parseCSV(text, delim);
    if (rows.length < 2) return { error: true };
    const H = rows[0].map(norm);
    const col = (name, nth = 0) => { for (let i = 0; i < H.length; i++) if (H[i] === name && nth-- === 0) return i; return -1; };
    const ix = {
      account: col('account'), date: col('date'), amount: col('amount'), cur: col('currency'), bal: col('account balance'),
      title: col('title'), receiver: col('receiver'), usage: col('usage'), category: col('category'), comment: col('comment')
    };
    if (ix.account < 0 || ix.date < 0 || ix.amount < 0) return { error: true };
    const get = (r, i) => (i >= 0 && i < r.length ? r[i] : '');

    const accounts = state.accounts.slice();
    const newAccs = [];
    const getAcc = name => {
      let a = accounts.find(x => norm(x.name) === norm(name));
      if (!a) {
        a = { id: 'a' + uid(), name: name.slice(0, 30), color: PALETTE[(state.accounts.length + newAccs.length) % PALETTE.length], opening: 0 };
        accounts.push(a); newAccs.push(a);
      }
      return a.id;
    };
    const cats = { expense: state.cats.expense.slice(), income: state.cats.income.slice() };
    const newCats = [];
    const getCat = (type, name) => {
      name = cleanTxt(name);
      if (!name) return type === 'expense' ? 'otros-g' : 'otros-i';
      let c = cats[type].find(x => catMatches(x, name));
      if (!c) {
        c = { id: 'c' + uid(), name: name.slice(0, 24), ico: '🏷️', color: PALETTE[(cats[type].length + newCats.length) % PALETTE.length] };
        cats[type].push(c); newCats.push({ type, c });
      }
      return c.id;
    };

    let bad = 0, foreign = 0, zero = 0;
    const items = [];
    rows.slice(1).forEach((r, idx) => {
      const an = cleanTxt(get(r, ix.account));
      const date = parseMsDate(get(r, ix.date));
      const amount = parseNum(get(r, ix.amount));
      if (!an || !date || !isFinite(amount)) { bad++; return; }
      const cur = cleanTxt(get(r, ix.cur)).toUpperCase();
      if (cur && cur !== state.currency) foreign++;
      const bal = parseNum(get(r, ix.bal));
      items.push({
        idx, accId: getAcc(an), date, amount, bal: isFinite(bal) ? bal : null,
        title: cleanTxt(get(r, ix.title)), receiver: cleanTxt(get(r, ix.receiver)), usage: cleanTxt(get(r, ix.usage)),
        category: cleanTxt(get(r, ix.category)), comment: cleanTxt(get(r, ix.comment))
      });
    });
    items.sort((a, b) => cmp(a.date, b.date) || a.idx - b.idx);

    const noteOf = it => {
      const parts = [];
      [it.title, it.receiver, it.usage, it.comment].forEach(p => { if (p && !parts.includes(p)) parts.push(p); });
      return parts.join(' · ');
    };
    const isTransferCat = c => ['transfer', 'transferencia', 'transferencias'].includes(norm(c));
    const isBalanceRow = it => norm(it.title) === 'account balance';

    const out = [];
    const transfers = [];
    const run = {};
    const mk = (type, it, extra) => ({ id: '', type, acc: it.accId, amount: Math.abs(it.amount), date: it.date, note: noteOf(it), ...extra });

    items.forEach(it => {
      if (isBalanceRow(it)) {
        // "Account balance" fija el saldo de la cuenta en esa fecha: se guarda como ajuste por la diferencia.
        if (it.bal === null) return;
        const delta = round2(it.bal - (run[it.accId] || 0));
        run[it.accId] = it.bal;
        if (delta !== 0) out.push({ id: '', type: 'adjust', acc: it.accId, amount: delta, date: it.date, note: '' });
        return;
      }
      run[it.accId] = round2((run[it.accId] || 0) + it.amount);
      if (it.amount === 0) { zero++; return; }
      if (isTransferCat(it.category)) { transfers.push(it); return; }
      const type = it.amount < 0 ? 'expense' : 'income';
      out.push(mk(type, it, { cat: getCat(type, it.category) }));
    });

    // Cada transferencia aparece como dos filas (sale de una cuenta y entra en otra): se unen en un solo movimiento.
    const outs = transfers.filter(r => r.amount < 0);
    const ins = transfers.filter(r => r.amount > 0);
    const used = new Set();
    outs.forEach(o => {
      const j = ins.findIndex(i => !used.has(i) && i.date === o.date && Math.abs(i.amount + o.amount) < 0.005 && i.accId !== o.accId);
      if (j >= 0) {
        used.add(ins[j]);
        const title = /^(transfer|transferencia)/i.test(o.title) ? '' : noteOf(o);
        out.push({ id: '', type: 'transfer', acc: o.accId, to: ins[j].accId, amount: Math.abs(o.amount), date: o.date, note: title });
      } else {
        out.push(mk('expense', o, { cat: getCat('expense', o.category) }));
      }
    });
    ins.forEach(i => { if (!used.has(i)) out.push(mk('income', i, { cat: getCat('income', i.category) })); });
    out.sort((a, b) => cmp(a.date, b.date));

    // Evita duplicados si se importa el mismo archivo dos veces.
    const sig = x => [x.type, x.acc, x.to || '', x.date, x.amount, x.note || ''].join('|');
    const existing = new Map();
    state.tx.forEach(x => existing.set(sig(x), (existing.get(sig(x)) || 0) + 1));
    const fresh = [];
    let dups = 0;
    out.forEach(x => {
      const k = sig(x);
      if (existing.get(k) > 0) { existing.set(k, existing.get(k) - 1); dups++; } else fresh.push(x);
    });

    const count = type => fresh.filter(x => x.type === type).length;
    const usedAcc = new Set(fresh.flatMap(x => [x.acc, x.to]).filter(Boolean));
    const usedCat = new Set(fresh.map(x => x.cat).filter(Boolean));
    return {
      error: false, fresh, accounts: newAccs.filter(a => usedAcc.has(a.id)),
      cats: newCats.filter(n => usedCat.has(n.c.id)),
      stats: { rows: rows.length - 1, inc: count('income'), exp: count('expense'), tr: count('transfer'), adj: count('adjust'), dups, bad, foreign, zero }
    };
  }

  $('#btn-import-ms').addEventListener('click', () => $('#file-ms').click());
  $('#file-ms').addEventListener('change', async e => {
    const f = e.target.files[0]; e.target.value = '';
    if (!f) return;
    let plan;
    try { plan = planMoneyStats(await readTextSmart(f)); } catch (err) { plan = { error: true }; }
    if (plan.error) { toast(t('badMs')); return; }
    const s = plan.stats;
    if (!plan.fresh.length) { toast(t('nothingNew')); return; }
    const lines = [t('ms.title') + ':', '• ' + t('ms.rows', { n: s.rows }),
      '• ' + t('ms.types', { inc: s.inc, exp: s.exp, tr: s.tr, adj: s.adj })];
    if (s.dups) lines.push('• ' + t('ms.dups', { n: s.dups }));
    if (s.bad) lines.push('• ' + t('ms.bad', { n: s.bad }));
    if (plan.accounts.length) lines.push('• ' + t('ms.newAcc', { list: plan.accounts.map(a => a.name).join(', ') }));
    if (plan.cats.length) lines.push('• ' + t('ms.newCat', { list: plan.cats.map(n => n.c.name).join(', ') }));
    if (s.foreign) lines.push('• ' + t('ms.foreign', { n: s.foreign }));
    lines.push('', t('ms.ask'));
    if (!confirm(lines.join('\n'))) return;

    plan.accounts.forEach(a => state.accounts.push(a));
    plan.cats.forEach(n => state.cats[n.type].push(n.c));
    plan.fresh.forEach(x => { x.id = uid(); state.tx.push(x); });
    save();
    const last = plan.fresh.reduce((m, x) => (x.date > m ? x.date : m), '0000-00-00');
    const d = parseDate(last); cur = new Date(d.getFullYear(), d.getMonth(), 1);
    filterAcc = 'all';
    render(); toast(t('imported'));
  });

  /* =====================================================================
     Inicio
     ===================================================================== */
  applyLang();
  render();
  setView('home');

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('./sw.js').catch(() => {}); });
  }
})();

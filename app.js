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
      date: 'Fecha', 'tab.recurring': 'Recurrentes',
      'stats.month': 'Mensual', 'stats.year': 'Anual', statsByMonth: 'Ingresos y gastos por mes',
      yearSummary: 'Resumen de {y}', net: 'Balance neto', avgSpend: 'Gasto promedio mensual', noExpensesYear: 'Sin gastos en este año.',
      searchPh: 'Buscar movimientos…', filters: 'Filtros',
      'f.type': 'Tipo', 'f.allTypes': 'Todos los tipos', 'f.cat': 'Categoría', 'f.allCats': 'Todas las categorías',
      'f.from': 'Desde', 'f.to': 'Hasta', 'f.min': 'Monto mínimo', 'f.max': 'Monto máximo', 'f.clear': 'Limpiar', 'f.apply': 'Aplicar',
      'type.adjust': 'Ajustes de saldo',
      'inv.is': 'Es una inversión (registra rendimientos)', 'type.yield': 'Rendimiento', yieldT: 'Rendimiento', yields: 'Rendimientos',
      yieldUp: 'Ganancia', yieldDown: 'Pérdida',
      needInv: 'Primero marca una cuenta como inversión: Cuentas → toca la cuenta → Editar.',
      'inv.title': 'Inversiones', 'inv.month': 'Rendimiento del mes', 'inv.year': 'Rendimiento {y}', 'inv.all': 'Rendimiento total',
      'inv.note': 'El % es una estimación (método Dietz modificado): descuenta el efecto de tus depósitos y retiros.',
      'adj.btn': 'Ajustar saldo', 'adj.title': 'Ajustar saldo', 'adj.cur': 'Saldo en la app', 'adj.real': 'Saldo real (el de tu banco)',
      'adj.diff': 'Diferencia', 'adj.as': 'Registrar como', 'adj.asAdj': 'Ajuste de saldo', 'adj.asYield': 'Rendimiento',
      'adj.same': 'El saldo ya coincide, no hay nada que ajustar', 'adj.needNew': 'Escribe el saldo real',
      'adj.hint': 'Se crea un movimiento por la diferencia. No cuenta como ingreso ni gasto.',
      'bk.title': 'Respaldo', 'bk.never': 'Aún no has hecho ningún respaldo', 'bk.last': 'Último respaldo: {d} ({ago})',
      'bk.ago0': 'hoy', 'bk.ago1': 'ayer', 'bk.agoN': 'hace {n} días', 'bk.now': 'Respaldar ahora', 'bk.every': 'Recordarme',
      'bk.ev3': 'Cada 3 días', 'bk.ev7': 'Cada semana', 'bk.ev14': 'Cada 2 semanas', 'bk.ev30': 'Cada mes', 'bk.ev0': 'Nunca',
      'bk.hint': 'Toca "Respaldar ahora" y elige "Guardar en Archivos" (iCloud Drive) para que el respaldo quede fuera del iPhone. La app no puede guardarlo sola, por eso te avisa cuando toca.',
      'bk.banNever': 'Aún no tienes un respaldo de tus datos.', 'bk.banDays': 'Hace {n} días que no respaldas tus datos.',
      'bk.do': 'Respaldar', 'bk.done': 'Respaldo guardado', 'bk.later': 'Más tarde',
      results: 'Resultados', noResults: 'No se encontraron movimientos con esa búsqueda.', showMore: 'Mostrar más',
      clearSearch: 'Quitar búsqueda y filtros',
      'rec.title': 'Pagos recurrentes', 'rec.add': 'Agregar pago recurrente', 'rec.monthlyEst': 'Estimado mensual',
      'rec.next': 'próximo {d}', 'rec.ended': 'terminado', 'rec.paused': 'pausado',
      'rec.empty': 'Aún no tienes pagos recurrentes.<br>Agrega uno para que se registre solo: renta, suscripciones, sueldo…',
      'rec.repeat': 'Repetir', 'rec.every': 'Repetir cada', 'rec.until': 'Hasta (opcional)', 'rec.active': 'Activo',
      'rec.start': 'Fecha de inicio',
      'rec.hint': 'Cada movimiento se registra solo en su fecha. Si pasan días sin abrir la app, al abrirla se registran los que faltaron con su fecha correcta.',
      'rec.day1': 'Cada día', 'rec.dayN': 'Cada {n} días', 'rec.week1': 'Cada semana', 'rec.weekN': 'Cada {n} semanas',
      'rec.month1': 'Cada mes', 'rec.monthN': 'Cada {n} meses', 'rec.year1': 'Cada año', 'rec.yearN': 'Cada {n} años',
      'unit.day': 'Días', 'unit.week': 'Semanas', 'unit.month': 'Meses', 'unit.year': 'Años',
      'rec.created': 'Se registraron {n} movimientos recurrentes', 'rec.created1': 'Se registró 1 movimiento recurrente',
      'rec.badEnd': 'La fecha final debe ser posterior al inicio',
      'rec.backfill': 'Con esa fecha de inicio se registrarán {n} movimientos pasados de golpe. ¿Continuar?',
      cDelRule: '¿Eliminar este pago recurrente? Los movimientos ya registrados se conservan.',
      cDelAccRec: ' También se eliminarán {r} pagos recurrentes de esa cuenta.',
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
      date: 'Date', 'tab.recurring': 'Recurring',
      'stats.month': 'Monthly', 'stats.year': 'Yearly', statsByMonth: 'Income and spending by month',
      yearSummary: '{y} summary', net: 'Net balance', avgSpend: 'Average monthly spending', noExpensesYear: 'No spending this year.',
      searchPh: 'Search transactions…', filters: 'Filters',
      'f.type': 'Type', 'f.allTypes': 'All types', 'f.cat': 'Category', 'f.allCats': 'All categories',
      'f.from': 'From', 'f.to': 'To', 'f.min': 'Minimum amount', 'f.max': 'Maximum amount', 'f.clear': 'Clear', 'f.apply': 'Apply',
      'type.adjust': 'Balance adjustments',
      'inv.is': 'It is an investment (track returns)', 'type.yield': 'Yield', yieldT: 'Yield', yields: 'Yields',
      yieldUp: 'Gain', yieldDown: 'Loss',
      needInv: 'First mark an account as an investment: Accounts → tap the account → Edit.',
      'inv.title': 'Investments', 'inv.month': 'Yield this month', 'inv.year': 'Yield {y}', 'inv.all': 'Total yield',
      'inv.note': 'The % is an estimate (modified Dietz method): it discounts the effect of your deposits and withdrawals.',
      'adj.btn': 'Adjust balance', 'adj.title': 'Adjust balance', 'adj.cur': 'Balance in the app', 'adj.real': 'Real balance (your bank\'s)',
      'adj.diff': 'Difference', 'adj.as': 'Record as', 'adj.asAdj': 'Balance adjustment', 'adj.asYield': 'Yield',
      'adj.same': 'The balance already matches, nothing to adjust', 'adj.needNew': 'Enter the real balance',
      'adj.hint': 'A transaction is created for the difference. It does not count as income or spending.',
      'bk.title': 'Backup', 'bk.never': 'You have not made any backup yet', 'bk.last': 'Last backup: {d} ({ago})',
      'bk.ago0': 'today', 'bk.ago1': 'yesterday', 'bk.agoN': '{n} days ago', 'bk.now': 'Back up now', 'bk.every': 'Remind me',
      'bk.ev3': 'Every 3 days', 'bk.ev7': 'Every week', 'bk.ev14': 'Every 2 weeks', 'bk.ev30': 'Every month', 'bk.ev0': 'Never',
      'bk.hint': 'Tap "Back up now" and choose "Save to Files" (iCloud Drive) so the backup lives outside the iPhone. The app cannot save it by itself, which is why it reminds you.',
      'bk.banNever': 'You do not have a backup of your data yet.', 'bk.banDays': 'It has been {n} days since your last backup.',
      'bk.do': 'Back up', 'bk.done': 'Backup saved', 'bk.later': 'Later',
      results: 'Results', noResults: 'No transactions match your search.', showMore: 'Show more',
      clearSearch: 'Clear search and filters',
      'rec.title': 'Recurring payments', 'rec.add': 'Add recurring payment', 'rec.monthlyEst': 'Monthly estimate',
      'rec.next': 'next {d}', 'rec.ended': 'ended', 'rec.paused': 'paused',
      'rec.empty': 'No recurring payments yet.<br>Add one so it records itself: rent, subscriptions, salary…',
      'rec.repeat': 'Repeat', 'rec.every': 'Repeat every', 'rec.until': 'Until (optional)', 'rec.active': 'Active',
      'rec.start': 'Start date',
      'rec.hint': 'Each transaction is recorded automatically on its date. If you go days without opening the app, the missed ones are recorded with their correct date when you open it.',
      'rec.day1': 'Every day', 'rec.dayN': 'Every {n} days', 'rec.week1': 'Every week', 'rec.weekN': 'Every {n} weeks',
      'rec.month1': 'Every month', 'rec.monthN': 'Every {n} months', 'rec.year1': 'Every year', 'rec.yearN': 'Every {n} years',
      'unit.day': 'Days', 'unit.week': 'Weeks', 'unit.month': 'Months', 'unit.year': 'Years',
      'rec.created': '{n} recurring transactions were recorded', 'rec.created1': '1 recurring transaction was recorded',
      'rec.badEnd': 'The end date must be after the start date',
      'rec.backfill': 'With that start date, {n} past transactions will be recorded at once. Continue?',
      cDelRule: 'Delete this recurring payment? Transactions already recorded are kept.',
      cDelAccRec: ' {r} recurring payments of that account will also be deleted.',
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
  const INV_IDS = ['cetes', 'gbm', 'supertasas'];
  const BACKUP_EVERY = [0, 3, 7, 14, 30];
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
      v: 2, currency: 'MXN', lang: 'es', lastAcc: 'main', recurring: [], lastBackup: null, backupEvery: 7, backupSnooze: null,
      accounts: DEFAULT_ACCOUNTS.map(([id, name], i) => ({ id, name, color: PALETTE[i % PALETTE.length], opening: 0, kind: INV_IDS.includes(id) ? 'investment' : 'cash' })),
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
          opening: isFinite(a.opening) ? Number(a.opening) : 0,
          kind: a.kind === 'investment' || (a.kind === undefined && INV_IDS.includes(String(a.id))) ? 'investment' : 'cash'
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
        ['expense', 'income', 'transfer', 'adjust', 'yield'].includes(x.type)).map(x => {
        const o = { id: String(x.id || uid()), type: x.type, amount: Number(x.amount), date: x.date, note: String(x.note || ''), acc: accIds.has(x.acc) ? x.acc : first };
        if (x.type === 'transfer') o.to = x.to;
        if (x.type === 'expense' || x.type === 'income') o.cat = String(x.cat || '');
        if (x.rid) o.rid = String(x.rid);
        return o;
      }).filter(x => x.type !== 'transfer' || (accIds.has(x.to) && x.to !== x.acc));
    }
    if (Array.isArray(d.recurring)) {
      const seenR = new Set();
      base.recurring = d.recurring.filter(r => r && r.id && !seenR.has(String(r.id)) && seenR.add(String(r.id)) &&
        ['expense', 'income', 'transfer'].includes(r.type) && isFinite(r.amount) && r.amount > 0 &&
        accIds.has(r.acc) && ['day', 'week', 'month', 'year'].includes(r.unit) && DATE_RE.test(String(r.start)) &&
        (r.type !== 'transfer' || (accIds.has(r.to) && r.to !== r.acc))
      ).map(r => {
        const o = {
          id: String(r.id), type: r.type, amount: Number(r.amount), acc: r.acc, note: String(r.note || ''),
          every: Math.max(1, Math.min(999, parseInt(r.every, 10) || 1)), unit: r.unit, start: r.start,
          end: DATE_RE.test(String(r.end)) ? r.end : null, last: DATE_RE.test(String(r.last)) ? r.last : null,
          k: 0, active: r.active !== false
        };
        if (r.type === 'transfer') o.to = r.to; else o.cat = String(r.cat || '');
        return o;
      });
    }
    base.lastBackup = DATE_RE.test(String(d.lastBackup)) ? d.lastBackup : null;
    base.backupSnooze = DATE_RE.test(String(d.backupSnooze)) ? d.backupSnooze : null;
    base.backupEvery = BACKUP_EVERY.includes(d.backupEvery) ? d.backupEvery : 7;
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
  let statsMode = 'month'; // 'month' | 'year'
  let barSel = null;       // columna seleccionada en la gráfica de barras
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
      case 'adjust':
      case 'yield': return x.acc === id ? x.amount : 0;
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

  /* --- Calendario de pagos recurrentes ---
     Cada regla guarda inicio + "cada N días/semanas/meses/años". La ocurrencia k se calcula siempre desde el inicio
     (no encadenando la anterior), así un pago del día 31 vuelve al 31 en los meses que lo tienen. */
  const fmtDate = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  function addDays(ds, n) { const d = parseDate(ds); d.setDate(d.getDate() + n); return fmtDate(d); }
  function addMonths(ds, n) {
    const [y, m, day] = ds.split('-').map(Number);
    const tm = (m - 1) + n;
    const ty = y + Math.floor(tm / 12);
    const tmo = ((tm % 12) + 12) % 12;
    const lastDay = new Date(ty, tmo + 1, 0).getDate();
    return `${ty}-${pad(tmo + 1)}-${pad(Math.min(day, lastDay))}`;
  }
  function occ(r, k) {
    switch (r.unit) {
      case 'day': return addDays(r.start, r.every * k);
      case 'week': return addDays(r.start, 7 * r.every * k);
      case 'month': return addMonths(r.start, r.every * k);
      default: return addMonths(r.start, 12 * r.every * k);
    }
  }
  // Próxima fecha pendiente: la primera ocurrencia posterior a la última ya registrada.
  function nextOcc(r) {
    let k = r.k || 0, d = occ(r, k), g = 0;
    while (r.last && d <= r.last && g++ < 50000) { k++; d = occ(r, k); }
    r.k = k;
    return d;
  }
  const isEnded = r => !!r.end && nextOcc(r) > r.end;
  function dueCount(r) {
    const p = { ...r }, today = todayStr();
    let n = 0, nx;
    while ((nx = nextOcc(p)) <= today && (!p.end || nx <= p.end) && n < 1000) { p.last = nx; p.k++; n++; }
    return n;
  }
  // Registra los movimientos que ya tocaban (incluye los que se acumularon mientras la app estuvo cerrada).
  function generateDue() {
    const today = todayStr();
    let made = 0, latest = '';
    state.recurring.forEach(r => {
      if (!r.active) return;
      let g = 0, nx;
      while ((nx = nextOcc(r)) <= today && (!r.end || nx <= r.end) && g++ < 1000) {
        const x = { id: uid(), type: r.type, acc: r.acc, amount: r.amount, date: nx, note: r.note, rid: r.id };
        if (r.type === 'transfer') x.to = r.to; else x.cat = r.cat;
        state.tx.push(x);
        r.last = nx; r.k++; made++;
        if (nx > latest) latest = nx;
      }
    });
    if (made) save();
    return { made, latest };
  }
  const freqLabel = r => t('rec.' + r.unit + (r.every === 1 ? '1' : 'N'), { n: r.every });
  const perMonth = r => ({ day: 30.4375, week: 4.3452, month: 1, year: 1 / 12 }[r.unit] / r.every);

  /* --- Rendimientos de inversión (método Dietz modificado) ---
     rendimiento % = ganancias / (saldo inicial + depósitos y retiros ponderados por los días que estuvieron invertidos).
     Los ajustes de saldo, transferencias, ingresos y gastos cuentan como aportaciones; solo los "rendimientos" son ganancia. */
  const dayDiff = (a, b) => Math.round((parseDate(b) - parseDate(a)) / 864e5);
  const isInv = id => { const x = acc(id); return !!x && x.kind === 'investment'; };
  const invIds = () => state.accounts.filter(a => a.kind === 'investment').map(a => a.id);
  function balBefore(id, from) {
    const a = acc(id); let b = a ? a.opening : 0;
    for (const x of state.tx) if (x.date < from) b += effect(x, id);
    return b;
  }
  function returnFor(ids, from, to) {
    const today = todayStr();
    const end = to > today ? (from <= today ? today : from) : to;
    const D = Math.max(1, dayDiff(from, end) + 1);
    let bmv = 0, y = 0, wcf = 0, any = false;
    ids.forEach(id => { bmv += balBefore(id, from); });
    state.tx.forEach(x => {
      if (x.date < from || x.date > end) return;
      if (x.type === 'yield') { if (ids.includes(x.acc)) { y += x.amount; any = true; } return; }
      let e = 0; ids.forEach(id => { e += effect(x, id); });
      if (e) wcf += e * (D - dayDiff(from, x.date)) / D;
    });
    y = round2(y);
    const den = bmv + wcf;
    return { y, any, pct: any && den > 0.005 ? y / den * 100 : null };
  }
  function firstDate(ids) {
    let f = null;
    state.tx.forEach(x => { if ((ids.includes(x.acc) || ids.includes(x.to)) && (f === null || x.date < f)) f = x.date; });
    return f;
  }
  const fmtPct = p => (p > 0.004 ? '+' : '') + p.toFixed(2) + '%';
  const retText = r => (!r.any ? '—' : signed(r.y) + (r.pct == null ? '' : ' (' + fmtPct(r.pct) + ')'));
  const retCls = r => (r.any ? colorCls(r.y) : '');
  function invRows(ids) {
    const y = cur.getFullYear(), mk = monthKey(cur);
    const last = new Date(y, cur.getMonth() + 1, 0).getDate();
    const first = firstDate(ids);
    const rows = [
      [t('inv.month'), returnFor(ids, mk + '-01', `${mk}-${pad(last)}`)],
      [t('inv.year', { y }), returnFor(ids, `${y}-01-01`, `${y}-12-31`)],
      [t('inv.all'), first ? returnFor(ids, first, '9999-12-31') : { y: 0, any: false, pct: null }]
    ];
    return `<div class="inv-box">${rows.map(([l, r]) => `<div class="inv-row"><span>${esc(l)}</span><b class="${retCls(r)}">${esc(retText(r))}</b></div>`).join('')}</div>`;
  }

  /* --- Respaldos --- */
  const daysSinceBackup = () => (state.lastBackup ? Math.max(0, dayDiff(state.lastBackup, todayStr())) : null);
  function backupDue() {
    if (!state.tx.length || !state.backupEvery) return false;
    if (state.backupSnooze && todayStr() < state.backupSnooze) return false;
    const n = daysSinceBackup();
    return n === null || n >= state.backupEvery;
  }
  const agoText = n => t(n === 0 ? 'bk.ago0' : n === 1 ? 'bk.ago1' : 'bk.agoN', { n });

  /* =====================================================================
     Vistas
     ===================================================================== */
  function applyLang() {
    document.documentElement.lang = state.lang;
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    $('#f-unit').innerHTML = ['day', 'week', 'month', 'year'].map(u => `<option value="${u}">${esc(t('unit.' + u))}</option>`).join('');
  }

  // El título de arriba muestra el mes, o solo el año cuando se ve Estadísticas en modo anual.
  function renderLabel() {
    if (view === 'stats' && statsMode === 'year') { $('#month-label').textContent = String(cur.getFullYear()); return; }
    const ml = cur.toLocaleDateString(loc(), { month: 'long', year: 'numeric' });
    $('#month-label').textContent = ml.charAt(0).toUpperCase() + ml.slice(1);
  }

  function render() {
    renderLabel();
    renderFilter();
    renderHome();
    renderAccounts();
    renderStats();
    renderRecurring();
    renderSettings();
    renderBackup();
  }

  function accOptions(selected, only) {
    return state.accounts.filter(a => !only || only(a)).map(a => `<option value="${esc(a.id)}"${a.id === selected ? ' selected' : ''}>${esc(a.name)}</option>`).join('');
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
        <div class="info"><b>${esc(accName(x.acc))} → ${esc(accName(x.to))}</b>${x.note || x.rid ? `<small>${x.rid ? '🔁 ' : ''}${esc(x.note || '')}</small>` : ''}</div>
        <div class="amt ${cls}">${sign}${esc(money(x.amount))}</div></button>`;
    }
    if (x.type === 'adjust') {
      const up = x.amount >= 0;
      return `<button class="tx" data-id="${esc(x.id)}"><div class="ico" style="background:#64748b22">⚖️</div>
        <div class="info"><b>${esc(t('adjustment'))}</b><small>${esc(accName(x.acc))}${x.note ? ' · ' + esc(x.note) : ''}</small></div>
        <div class="amt ${up ? 'income' : 'expense'}">${up ? '+' : '−'}${esc(money(Math.abs(x.amount)))}</div></button>`;
    }
    if (x.type === 'yield') {
      const up = x.amount >= 0;
      return `<button class="tx" data-id="${esc(x.id)}"><div class="ico" style="background:#0f9d7322">📈</div>
        <div class="info"><b>${esc(t('yieldT'))}</b><small>${esc(accName(x.acc))}${x.note ? ' · ' + esc(x.note) : ''}</small></div>
        <div class="amt ${up ? 'income' : 'expense'}">${up ? '+' : '−'}${esc(money(Math.abs(x.amount)))}</div></button>`;
    }
    const c = findCat(x.cat);
    const sub = (x.rid ? '🔁 ' : '') + (f === 'all' ? accName(x.acc) + (x.note ? ' · ' : '') : '') + (x.note || '');
    return `<button class="tx" data-id="${esc(x.id)}"><div class="ico" style="background:${esc(c.color)}22">${esc(c.ico)}</div>
      <div class="info"><b>${esc(catName(c))}</b>${sub ? `<small>${esc(sub)}</small>` : ''}</div>
      <div class="amt ${x.type}">${x.type === 'income' ? '+' : '−'}${esc(money(x.amount))}</div></button>`;
  }

  function renderHome() {
    const active = searchActive();
    document.body.dataset.search = active ? 'on' : 'off';
    $('#q-clear').hidden = !S.q;
    const nf = filterCount();
    $('#f-badge').hidden = !nf;
    $('#f-badge').textContent = nf;
    $('#home-summary').hidden = active;
    $('#search-summary').hidden = !active;
    if (active) { renderSearch(); return; }
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

    const iids = invIds();
    const inv = $('#inv-summary');
    inv.hidden = !iids.length;
    if (iids.length) {
      inv.innerHTML = `<h2>📈 ${esc(t('inv.title'))}</h2><div class="inv-bal">${esc(money(sumBal(iids, end)))}</div>${invRows(iids)}<p class="hint mt">${esc(t('inv.note'))}</p>`;
    }
    const mkc = monthKey(cur), lastD = new Date(cur.getFullYear(), cur.getMonth() + 1, 0).getDate();
    $('#acc-list').innerHTML = rows.map(r => {
      const share = pos > 0 && r.bal > 0 ? Math.round(r.bal / pos * 100) : 0;
      let extra = '';
      if (r.a.kind === 'investment') {
        const ry = returnFor([r.a.id], mkc + '-01', `${mkc}-${pad(lastD)}`);
        if (ry.any) extra = ` · 📈 ${signed(ry.y)}`;
      }
      return `<button class="acc" data-id="${esc(r.a.id)}">
        <div class="ico" style="background:${esc(r.a.color)}">${esc(Array.from(r.a.name)[0] || '?').toUpperCase()}</div>
        <div class="info"><b>${esc(r.a.name)}</b><small>${esc(t('shareOf', { p: share }) + extra)}</small></div>
        <div class="right"><b class="${r.bal < 0 ? 'neg' : ''}">${esc(money(r.bal))}</b><small class="${colorCls(r.ch)}">${esc(signed(r.ch))}</small></div>
      </button>`;
    }).join('');
  }

  /* --- Gráficas SVG --- */
  // Escala "redonda" para el eje Y: límites y marcas en múltiplos de 1, 2, 2.5 o 5 × 10ⁿ.
  function niceScale(min, max, n) {
    if (!(max > min)) max = min + 1;
    const raw = (max - min) / n;
    const pow = Math.pow(10, Math.floor(Math.log10(raw)));
    const f = raw / pow;
    const step = (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * pow;
    const lo = Math.floor(min / step + 1e-9) * step, hi = Math.ceil(max / step - 1e-9) * step;
    const ticks = [];
    for (let i = 0, c = Math.round((hi - lo) / step); i <= c; i++) ticks.push(lo + i * step);
    return { lo, hi, ticks };
  }
  function currencySym() {
    try {
      const p = new Intl.NumberFormat('es-MX', { style: 'currency', currency: state.currency }).formatToParts(0).find(x => x.type === 'currency');
      return p && p.value.length <= 2 ? p.value : '';
    } catch (e) { return '$'; }
  }
  // Número corto para el eje: $850, $1.5k, $20k, $1.2M
  function axisFmt(v) {
    const a = Math.abs(v), tr = x => String(Math.round(x * 10) / 10);
    const s = a >= 1e6 ? tr(a / 1e6) + 'M' : a >= 1e3 ? tr(a / 1e3) + 'k' : tr(a);
    return (v < 0 ? '−' : '') + currencySym() + s;
  }
  const gridSvg = (sc, Y, L, W, R) => sc.ticks.map(v => {
    const y = Y(v);
    return `<line x1="${L}" x2="${W - R}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--line)"${v === 0 ? '' : ' stroke-dasharray="3 3"'}/>` +
      `<text x="${L - 6}" y="${(y + 3.5).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--muted)">${esc(axisFmt(v))}</text>`;
  }).join('');

  function lineSvg(pts, color) {
    const W = 340, H = 165, L = 46, R = 12, top = 16, bot = 26, base = H - bot;
    const vals = pts.map(p => p.v);
    const mn = Math.min(...vals), mx = Math.max(...vals);
    const sc = mn === mx ? { lo: mn - 1, hi: mx + 1, ticks: [mn] } : niceScale(mn, mx, 3);
    const X = i => L + (W - L - R) * (pts.length === 1 ? 0.5 : i / (pts.length - 1));
    const Y = v => top + (base - top) * (sc.hi - v) / (sc.hi - sc.lo);
    const line = pts.map((p, i) => `${X(i).toFixed(1)},${Y(p.v).toFixed(1)}`).join(' ');
    const area = `${X(0).toFixed(1)},${base} ${line} ${X(pts.length - 1).toFixed(1)},${base}`;
    const many = pts.length > 8;
    const dots = pts.map((p, i) => `<circle cx="${X(i).toFixed(1)}" cy="${Y(p.v).toFixed(1)}" r="${many ? 2.5 : 3.5}" fill="${color}"/>`).join('');
    const labels = pts.map((p, i) => `<text x="${X(i).toFixed(1)}" y="${H - 8}" text-anchor="middle" font-size="${many ? 10 : 11}" fill="var(--muted)">${esc(p.label)}</text>`).join('');
    const last = pts[pts.length - 1];
    let ly = Y(last.v) - 8; if (ly < 12) ly = Y(last.v) + 16;
    const lastTxt = `<text x="${X(pts.length - 1).toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="end" font-size="11" font-weight="700" fill="var(--text)">${esc(money(last.v))}</text>`;
    return `<svg viewBox="0 0 ${W} ${H}" role="img">${gridSvg(sc, Y, L, W, R)}<line x1="${L}" x2="${W - R}" y1="${base}" y2="${base}" stroke="var(--line)"/>
      <polygon points="${area}" fill="${color}" opacity=".12"/><polyline points="${line}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>${dots}${labels}${lastTxt}</svg>`;
  }

  // Barras de ingresos/gastos por mes con eje Y; cada columna se puede tocar para ver los montos exactos.
  function barsSvg(months, sel) {
    const W = 340, H = 178, L = 46, R = 6, top = 10, base = 152;
    const mx = Math.max(0, ...months.map(m => Math.max(m.inc, m.exp)));
    const sc = mx === 0 ? { lo: 0, hi: 1, ticks: [0] } : niceScale(0, mx, 4);
    const Y = v => base - (v - sc.lo) / (sc.hi - sc.lo) * (base - top);
    const slot = (W - L - R) / months.length;
    const bw = Math.min(16, slot * 0.34), gap = Math.max(2, slot * 0.06), rx = Math.min(3, bw / 3);
    const cols = months.map((m, i) => {
      const sx = L + i * slot, x0 = sx + (slot - (bw * 2 + gap)) / 2;
      const hi = base - Y(m.inc), he = base - Y(m.exp);
      return (i === sel ? `<rect x="${sx.toFixed(1)}" y="${top - 4}" width="${slot.toFixed(1)}" height="${base - top + 4}" rx="6" fill="var(--primary)" opacity=".10"/>` : '') +
        `<rect x="${x0.toFixed(1)}" y="${Y(m.inc).toFixed(1)}" width="${bw.toFixed(1)}" height="${hi.toFixed(1)}" rx="${rx}" fill="var(--income)"/>` +
        `<rect x="${(x0 + bw + gap).toFixed(1)}" y="${Y(m.exp).toFixed(1)}" width="${bw.toFixed(1)}" height="${he.toFixed(1)}" rx="${rx}" fill="var(--expense)"/>` +
        `<text x="${(sx + slot / 2).toFixed(1)}" y="${H - 8}" text-anchor="middle" font-size="${months.length > 8 ? 10 : 11}" fill="${i === sel ? 'var(--text)' : 'var(--muted)'}" font-weight="${i === sel ? 700 : 400}">${esc(m.label)}</text>` +
        `<rect class="col" data-i="${i}" x="${sx.toFixed(1)}" y="0" width="${slot.toFixed(1)}" height="${H}" fill="transparent"/>`;
    }).join('');
    return `<svg viewBox="0 0 ${W} ${H}" role="img">${gridSvg(sc, Y, L, W, R)}${cols}</svg>`;
  }

  const monthShort = d => d.toLocaleDateString(loc(), { month: 'short' }).replace('.', '');
  function trendPoints(ids, yearly) {
    const pts = [];
    if (yearly) { // enero → diciembre del año visto (si es el año actual, solo hasta el mes actual)
      const y = cur.getFullYear(), now = new Date();
      const lastM = y === now.getFullYear() ? now.getMonth() : 11;
      for (let m = 0; m <= lastM; m++) { const d = new Date(y, m, 1); pts.push({ label: monthShort(d), v: sumBal(ids, endOf(d)) }); }
      return pts;
    }
    for (let i = 5; i >= 0; i--) {
      const d = shiftMonth(cur, -i);
      pts.push({ label: monthShort(d), v: sumBal(ids, endOf(d)) });
    }
    return pts;
  }

  function renderStats() {
    const yearly = statsMode === 'year';
    const y = cur.getFullYear(), now = new Date();
    const prefix = yearly ? String(y) : monthKey(cur);
    $$('#stats-mode button').forEach(b => b.classList.toggle('active', b.dataset.m === statsMode));
    $('#trend').innerHTML = lineSvg(trendPoints(filterIds(), yearly), 'var(--primary)');

    // Resumen del año (solo en vista anual)
    const ys = $('#year-summary');
    ys.hidden = !yearly;
    if (yearly) {
      let inc = 0, exp = 0;
      state.tx.forEach(x => {
        if (!x.date.startsWith(prefix) || !inFilter(x)) return;
        if (x.type === 'income') inc += x.amount; else if (x.type === 'expense') exp += x.amount;
      });
      const elapsed = y === now.getFullYear() ? now.getMonth() + 1 : 12;
      const net = round2(inc - exp);
      const st = (l, v, cls) => `<div>${esc(l)}<strong class="${cls || ''}">${esc(money(v))}</strong></div>`;
      const ylds = state.tx.filter(x => x.type === 'yield' && x.date.startsWith(prefix) && inFilter(x));
      const yl = round2(ylds.reduce((s, x) => s + x.amount, 0));
      ys.innerHTML = `<h2>${esc(t('yearSummary', { y }))}</h2><div class="grid2">${st(t('income'), inc)}${st(t('expense'), exp)}${st(t('net'), net, colorCls(net))}${st(t('avgSpend'), round2(exp / elapsed))}${ylds.length ? st('📈 ' + t('yields'), yl, colorCls(yl)) : ''}</div>`;
    }

    // Gastos por categoría (del mes o de todo el año)
    const list = state.tx.filter(x => x.type === 'expense' && x.date.startsWith(prefix) && inFilter(x));
    const total = list.reduce((a, x) => a + x.amount, 0);
    const donut = $('#donut'), legend = $('#legend');
    if (!total) {
      donut.innerHTML = '';
      legend.innerHTML = `<div class="empty">${esc(t(yearly ? 'noExpensesYear' : 'noExpenses'))}</div>`;
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

    // Ingresos y gastos por mes: últimos 6 meses, o los 12 meses del año
    const months = [];
    const count = yearly ? 12 : 6;
    for (let i = 0; i < count; i++) {
      const d = yearly ? new Date(y, i, 1) : shiftMonth(cur, i - 5);
      const mk = monthKey(d);
      let inc = 0, exp = 0;
      state.tx.forEach(x => {
        if (!x.date.startsWith(mk) || !inFilter(x)) return;
        if (x.type === 'income') inc += x.amount; else if (x.type === 'expense') exp += x.amount;
      });
      months.push({ label: monthShort(d), d, inc, exp });
    }
    if (barSel === null || barSel >= months.length) barSel = yearly ? (y === now.getFullYear() ? now.getMonth() : 11) : 5;
    $('#bars-title').textContent = t(yearly ? 'statsByMonth' : 'stats6');
    $('#bars').innerHTML = barsSvg(months, barSel);
    const m = months[barSel];
    let dl = m.d.toLocaleDateString(loc(), { month: 'long', year: 'numeric' });
    dl = dl.charAt(0).toUpperCase() + dl.slice(1);
    $('#bars-info').innerHTML = `<b>${esc(dl)}</b><span class="pos">${esc(t('income'))}: ${esc(money(m.inc))}</span><span class="neg">${esc(t('expense'))}: ${esc(money(m.exp))}</span>`;
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

  function renderBackup() {
    const due = backupDue();
    const bn = $('#backup-banner');
    bn.hidden = !due;
    if (due) {
      const n = daysSinceBackup();
      $('#bb-text').textContent = n === null ? t('bk.banNever') : t('bk.banDays', { n });
    }
    const n = daysSinceBackup();
    let dl = '';
    if (state.lastBackup) dl = parseDate(state.lastBackup).toLocaleDateString(loc(), { day: 'numeric', month: 'short', year: 'numeric' });
    $('#bk-status').textContent = n === null ? t('bk.never') : t('bk.last', { d: dl, ago: agoText(n) });
    $('#bk-every').innerHTML = BACKUP_EVERY.map(v => `<option value="${v}"${v === state.backupEvery ? ' selected' : ''}>${esc(t('bk.ev' + v))}</option>`).join('');
  }

  /* =====================================================================
     Navegación y filtros
     ===================================================================== */
  function setView(v) {
    view = v;
    document.body.dataset.view = v;
    renderLabel();
    $$('.view').forEach(el => el.classList.toggle('active', el.id === 'view-' + v));
    $$('.tabbar button').forEach(b => b.classList.toggle('active', b.dataset.view === v));
    $('#fab').hidden = v !== 'home';
    window.scrollTo(0, 0);
  }
  $$('.tabbar button').forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));
  // En Estadísticas (modo anual) las flechas avanzan de año en año; en todo lo demás, de mes en mes.
  const navStep = () => (view === 'stats' && statsMode === 'year' ? 12 : 1);
  $('#prev-month').addEventListener('click', () => { cur = shiftMonth(cur, -navStep()); barSel = null; render(); });
  $('#next-month').addEventListener('click', () => { cur = shiftMonth(cur, navStep()); barSel = null; render(); });
  $('#stats-mode').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    statsMode = b.dataset.m; barSel = null; render();
  });
  $('#bars').addEventListener('click', e => {
    const c = e.target.closest('[data-i]'); if (!c) return;
    barSel = +c.dataset.i; renderStats();
  });
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
  const F = { type: 'expense', sign: 1, cat: null, editing: null, rule: null, recur: false };

  const defAcc = () => (filterAcc !== 'all' && acc(filterAcc)) ? filterAcc : (acc(state.lastAcc) ? state.lastAcc : state.accounts[0].id);

  function renderSeg() {
    let opts;
    if (F.type === 'adjust') {
      opts = [['adjust+', t('type.adjUp'), F.sign > 0], ['adjust-', t('type.adjDown'), F.sign < 0]];
      if (isInv($('#f-acc').value)) opts.push(['yield', t('type.yield'), false]); // convertir un ajuste en rendimiento
    } else {
      opts = [['expense', t('type.expense'), F.type === 'expense'], ['income', t('type.income'), F.type === 'income'], ['transfer', t('type.transfer'), F.type === 'transfer']];
      if (!F.recur) opts.push(['yield', t('type.yield'), F.type === 'yield']);
    }
    $('#f-seg').classList.toggle('four', opts.length === 4);
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
  function renderSign() {
    const on = F.type === 'yield';
    $('#f-sign').hidden = !on;
    if (!on) return;
    $('#f-sign').innerHTML = [[1, t('yieldUp')], [-1, t('yieldDown')]].map(([s, l]) => `<button type="button" data-s="${s}" class="${F.sign === s ? 'active' : ''}">${esc(l)}</button>`).join('');
  }
  function setFormType(tp) {
    F.type = tp;
    const cv = $('#f-acc').value;
    $('#f-acc').innerHTML = accOptions(cv, tp === 'yield' ? (x => x.kind === 'investment' || (!!F.editing && x.id === cv)) : null);
    if (Array.from($('#f-acc').options).some(o => o.value === cv)) $('#f-acc').value = cv;
    if (tp === 'yield') { F.recur = false; $('#f-rec').checked = false; syncRecUI(); }
    $('#f-rec-row').hidden = !!F.editing || !!F.rule || tp === 'yield' || tp === 'adjust';
    if ((tp === 'expense' || tp === 'income') && !state.cats[tp].some(c => c.id === F.cat)) F.cat = (state.cats[tp][0] || {}).id || null;
    $('#f-acc-wrap').hidden = tp === 'transfer';
    $('#f-tr-wrap').hidden = tp !== 'transfer';
    renderSeg();
    renderSign();
    renderFormCats();
  }

  function syncRecUI() {
    $('#f-rec-wrap').hidden = !F.recur;
    $('#f-date-l').textContent = t(F.recur ? 'rec.start' : 'date');
  }
  // opts.recur: abrir como pago recurrente nuevo · opts.ruleId: editar un pago recurrente existente
  function openTx(id, preset, opts) {
    opts = opts || {};
    const rule = opts.ruleId ? state.recurring.find(v => v.id === opts.ruleId) : null;
    const x = id ? state.tx.find(v => v.id === id) : rule;
    F.editing = id && x ? x.id : null;
    F.rule = rule ? rule.id : null;
    F.recur = !!rule || !!opts.recur;
    F.sign = x && (x.type === 'adjust' || x.type === 'yield') && x.amount < 0 ? -1 : 1;
    F.cat = x ? (x.cat || null) : null;
    const a0 = x ? x.acc : defAcc();
    $('#f-acc').innerHTML = accOptions(a0);
    $('#f-from').innerHTML = accOptions(a0);
    const toDef = x && x.type === 'transfer' ? x.to : (state.accounts.find(a => a.id !== a0) || {}).id;
    $('#f-to').innerHTML = accOptions(toDef);
    $('#f-to').value = toDef;
    setFormType(x ? x.type : (preset || 'expense'));
    $('#f-amount').value = x ? String(Math.abs(x.amount)) : '';
    $('#f-date').value = x ? (x.date || x.start) : (monthKey(cur) === monthKey(new Date()) ? todayStr() : `${monthKey(cur)}-01`);
    $('#f-note').value = x ? (x.note || '') : '';
    $('#f-delete').hidden = !x;
    $('#f-rec-row').hidden = !!x || F.type === 'yield'; // "Repetir" solo al crear algo nuevo (y no para rendimientos)
    $('#f-rec').checked = F.recur;
    $('#f-every').value = rule ? rule.every : 1;
    $('#f-unit').value = rule ? rule.unit : 'month';
    $('#f-end').value = rule && rule.end ? rule.end : '';
    $('#f-active').checked = rule ? rule.active : true;
    $('#f-active-row').hidden = !rule;
    syncRecUI();
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
    else if (v === 'yield' && !invIds().length) toast(t('needInv'));
    else setFormType(v);
  });
  $('#f-sign').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    F.sign = +b.dataset.s; renderSign();
  });
  $('#f-cats').addEventListener('click', e => {
    const b = e.target.closest('.cat'); if (!b) return;
    if (b.dataset.cat === '__new') { openCat(F.type, null, newId => { F.cat = newId; renderFormCats(); }); return; }
    F.cat = b.dataset.cat; renderFormCats();
  });
  $('#tx-list').addEventListener('click', e => {
    if (e.target.closest('#btn-more')) { S.limit += 100; renderHome(); return; }
    const b = e.target.closest('.tx'); if (b) openTx(b.dataset.id);
  });

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
    } else if (F.type === 'adjust' || F.type === 'yield') {
      data = { type: F.type, acc: $('#f-acc').value, amount: F.sign * amt, date, note };
    } else {
      const cat = F.cat || (state.cats[F.type][0] || {}).id || '';
      data = { type: F.type, acc: $('#f-acc').value, cat, amount: amt, date, note };
      state.lastAcc = data.acc;
    }
    if (F.recur) {
      const every = Math.max(1, Math.min(999, parseInt($('#f-every').value, 10) || 1));
      const end = $('#f-end').value || null;
      if (end && end < date) { toast(t('rec.badEnd')); return; }
      const old = F.rule ? state.recurring.find(v => v.id === F.rule) : null;
      const { date: startDate, ...base } = data;
      const rule = {
        ...base, id: old ? old.id : 'r' + uid(), every, unit: $('#f-unit').value, start: startDate, end,
        last: old ? old.last : null, k: 0, active: old ? $('#f-active').checked : true
      };
      const n = rule.active ? dueCount(rule) : 0;
      if (n > 12 && !confirm(t('rec.backfill', { n }))) return;
      if (old) state.recurring[state.recurring.indexOf(old)] = rule; else state.recurring.push(rule);
      const g = generateDue();
      save();
      if (g.latest) { const d2 = parseDate(g.latest); cur = new Date(d2.getFullYear(), d2.getMonth(), 1); }
      hide('ov-tx'); render();
      toast(g.made ? t(g.made === 1 ? 'rec.created1' : 'rec.created', { n: g.made }) : t('saved'));
      return;
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
    if (F.rule) {
      if (!confirm(t('cDelRule'))) return;
      state.recurring = state.recurring.filter(v => v.id !== F.rule);
    } else {
      if (!F.editing || !confirm(t('cDelTx'))) return;
      state.tx = state.tx.filter(v => v.id !== F.editing);
    }
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
      ${a.kind === 'investment' ? `<div class="detail-sub">📈 ${esc(t('inv.title'))}</div>${invRows([id])}` : ''}
      <div class="detail-sub">${esc(t('trendT'))}</div>
      <div class="trend-svg">${lineSvg(trendPoints([id]), esc(a.color))}</div>
      <button class="btn" data-act="adjust" style="margin-top:12px">⚖️ ${esc(t('adj.btn'))}</button>
      <div class="sheet-actions" style="margin-top:8px">
        <button class="btn" data-act="edit">${esc(t('edit'))}</button>
        <button class="btn primary" data-act="movs">${esc(t('showMov'))}</button>
      </div>`;
    show('ov-detail');
  }
  $('#acc-list').addEventListener('click', e => { const b = e.target.closest('.acc'); if (b) openDetail(b.dataset.id); });
  $('#detail-body').addEventListener('click', e => {
    const b = e.target.closest('[data-act]'); if (!b) return;
    if (b.dataset.act === 'edit') openAcc(detailId);
    if (b.dataset.act === 'adjust') openAdjust(detailId);
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
    $('#a-inv').checked = !!a && a.kind === 'investment';
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
      const a = acc(A.id); a.name = name; a.color = A.color; a.opening = opening; a.kind = $('#a-inv').checked ? 'investment' : 'cash';
    } else {
      state.accounts.push({ id: 'a' + uid(), name, color: A.color, opening, kind: $('#a-inv').checked ? 'investment' : 'cash' });
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
    const nr = state.recurring.filter(r => r.acc === a.id || r.to === a.id).length;
    const msg = (n ? t('cDelAcc', { name: a.name, n }) : t('cDelAccEmpty', { name: a.name })) + (nr ? t('cDelAccRec', { r: nr }) : '');
    if (!confirm(msg)) return;
    state.recurring = state.recurring.filter(r => r.acc !== a.id && r.to !== a.id);
    state.tx = state.tx.filter(x => x.acc !== a.id && x.to !== a.id);
    state.accounts = state.accounts.filter(x => x.id !== a.id);
    if (state.lastAcc === a.id) state.lastAcc = state.accounts[0].id;
    if (filterAcc === a.id) filterAcc = 'all';
    save(); hide('ov-acc'); hide('ov-detail'); render(); toast(t('deleted'));
  });


  /* --- Ajustar el saldo de una cuenta al saldo real --- */
  const J = { id: null };
  function adjDiff() {
    const real = parseNum($('#j-new').value), date = $('#j-date').value;
    if (!isFinite(real) || !date) return null;
    return round2(real - balanceOf(J.id, date));
  }
  function adjPreview() {
    const date = $('#j-date').value;
    $('#j-cur').textContent = money(balanceOf(J.id, date || undefined));
    const d = adjDiff();
    const el = $('#j-diff');
    el.textContent = d === null ? '—' : signed(d);
    el.className = d === null ? '' : colorCls(d);
  }
  function openAdjust(id) {
    const a = acc(id); if (!a) return;
    J.id = id;
    $('#j-name').textContent = a.name;
    $('#j-new').value = '';
    $('#j-date').value = todayStr();
    $('#j-note').value = '';
    const inv = a.kind === 'investment';
    $('#j-as-wrap').hidden = !inv;
    $('#j-as').innerHTML = `<option value="yield">${esc(t('adj.asYield'))}</option><option value="adjust">${esc(t('adj.asAdj'))}</option>`;
    $('#j-as').value = inv ? 'yield' : 'adjust';
    adjPreview();
    show('ov-adjust');
    setTimeout(() => $('#j-new').focus(), 60);
  }
  ['#j-new', '#j-date'].forEach(s => $(s).addEventListener('input', adjPreview));
  $('#j-cancel').addEventListener('click', () => hide('ov-adjust'));
  $('#j-save').addEventListener('click', () => {
    if (!isFinite(parseNum($('#j-new').value))) { toast(t('adj.needNew')); return; }
    if (!$('#j-date').value) { toast(t('needDate')); return; }
    const d = adjDiff();
    if (d === null || Math.abs(d) < 0.005) { toast(t('adj.same')); return; }
    const date = $('#j-date').value;
    const type = !$('#j-as-wrap').hidden && $('#j-as').value === 'yield' ? 'yield' : 'adjust';
    state.tx.push({ id: uid(), type, acc: J.id, amount: d, date, note: $('#j-note').value.trim() });
    save();
    const dd = parseDate(date); cur = new Date(dd.getFullYear(), dd.getMonth(), 1);
    hide('ov-adjust'); render(); openDetail(J.id); toast(t('saved'));
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

  // Devuelve true si el archivo se compartió o se descargó, y false si la persona canceló.
  async function shareOrDownload(filename, mime, content) {
    const blob = new Blob([content], { type: mime });
    try {
      const file = new File([blob], filename, { type: mime });
      if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: filename }); return true; }
    } catch (e) { if (e && e.name === 'AbortError') return false; }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    return true;
  }
  // Respaldo completo (JSON). Solo se marca como hecho si la persona realmente lo guardó o compartió.
  async function doBackup() {
    const today = todayStr();
    const ok = await shareOrDownload(`respaldo-gastos-${today}.json`, 'application/json', JSON.stringify({ ...state, lastBackup: today, backupSnooze: null }, null, 2));
    if (!ok) return;
    state.lastBackup = today; state.backupSnooze = null;
    save(); renderBackup(); toast(t('bk.done'));
  }
  $('#btn-export').addEventListener('click', doBackup);
  $('#btn-backup').addEventListener('click', doBackup);
  $('#bb-do').addEventListener('click', doBackup);
  $('#bb-later').addEventListener('click', () => { state.backupSnooze = addDays(todayStr(), 1); save(); renderBackup(); });
  $('#bk-every').addEventListener('change', e => { state.backupEvery = +e.target.value; save(); renderBackup(); });
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
    const keep = { currency: state.currency, lang: state.lang, backupEvery: state.backupEvery };
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
        a = { id: 'a' + uid(), name: name.slice(0, 30), color: PALETTE[(state.accounts.length + newAccs.length) % PALETTE.length], opening: 0, kind: 'cash' };
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
     Búsqueda, filtros y pagos recurrentes (interfaz)
     ===================================================================== */
  /* --- Búsqueda --- */
  const S = { q: '', type: 'all', cat: '', from: '', to: '', min: '', max: '', limit: 100 };
  const filterCount = () => ['type', 'cat', 'from', 'to', 'min', 'max'].filter(k => (k === 'type' ? S.type !== 'all' : S[k] !== '')).length;
  const searchActive = () => S.q.trim() !== '' || filterCount() > 0;

  function matchTx(x, toks, minN, maxN) {
    if (S.type !== 'all' && x.type !== S.type) return false;
    if (S.cat && x.cat !== S.cat) return false;
    if (S.from && x.date < S.from) return false;
    if (S.to && x.date > S.to) return false;
    const a = Math.abs(x.amount);
    if (isFinite(minN) && a < minN) return false;
    if (isFinite(maxN) && a > maxN) return false;
    if (!toks.length) return true;
    const hay = norm([
      x.note, accName(x.acc), x.to ? accName(x.to) : '',
      (x.type === 'expense' || x.type === 'income') ? catName(findCat(x.cat)) : '',
      x.type === 'adjust' ? t('adjustment') : t('type.' + x.type),
      x.date, parseDate(x.date).toLocaleDateString(loc(), { month: 'long', year: 'numeric' }), String(a), money(a)
    ].join(' '));
    return toks.every(k => hay.includes(k));
  }

  function renderSearch() {
    const toks = norm(S.q).split(/\s+/).filter(Boolean);
    const minN = parseNum(S.min), maxN = parseNum(S.max);
    const res = state.tx.filter(x => inFilter(x) && matchTx(x, toks, minN, maxN)).sort((a, b) => cmp(b.date, a.date) || cmp(b.id, a.id));
    let inc = 0, exp = 0;
    res.forEach(x => { if (x.type === 'income') inc += x.amount; else if (x.type === 'expense') exp += x.amount; });
    $('#res-count').textContent = t(res.length === 1 ? 'movCount1' : 'movCount', { n: res.length });
    $('#res-income').textContent = money(inc);
    $('#res-expense').textContent = money(exp);
    const box = $('#tx-list');
    if (!res.length) { box.innerHTML = `<div class="empty"><span class="big">🔍</span>${esc(t('noResults'))}</div>`; return; }
    const shown = res.slice(0, S.limit);
    const groups = {};
    shown.forEach(x => { (groups[x.date] = groups[x.date] || []).push(x); });
    box.innerHTML = Object.keys(groups).map(date => {
      const items = groups[date];
      const net = items.reduce((s, x) => s + (x.type === 'income' ? x.amount : x.type === 'expense' ? -x.amount : 0), 0);
      let dl = parseDate(date).toLocaleDateString(loc(), { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
      dl = dl.charAt(0).toUpperCase() + dl.slice(1);
      return `<div class="day-head"><span>${esc(dl)}</span><span>${esc(money(net))}</span></div>` + items.map(txRow).join('');
    }).join('') + (res.length > shown.length ? `<button class="btn" id="btn-more">${esc(t('showMore'))} (${shown.length}/${res.length})</button>` : '');
  }

  $('#q').addEventListener('input', e => { S.q = e.target.value; S.limit = 100; renderHome(); });
  $('#q-clear').addEventListener('click', () => { S.q = ''; $('#q').value = ''; S.limit = 100; renderHome(); $('#q').focus(); });
  $('#btn-clear-search').addEventListener('click', () => {
    Object.assign(S, { q: '', type: 'all', cat: '', from: '', to: '', min: '', max: '', limit: 100 });
    $('#q').value = ''; renderHome();
  });

  function openFilters() {
    $('#flt-type').innerHTML = [['all', t('f.allTypes')], ['expense', t('type.expense')], ['income', t('type.income')],
      ['transfer', t('type.transfer')], ['adjust', t('type.adjust')], ['yield', t('type.yield')]].map(([v, l]) => `<option value="${v}">${esc(l)}</option>`).join('');
    const group = (type, label) => `<optgroup label="${esc(label)}">` +
      state.cats[type].map(c => `<option value="${esc(c.id)}">${esc(c.ico)} ${esc(catName(c))}</option>`).join('') + '</optgroup>';
    $('#flt-cat').innerHTML = `<option value="">${esc(t('f.allCats'))}</option>` + group('expense', t('expense')) + group('income', t('income'));
    $('#flt-type').value = S.type; $('#flt-cat').value = S.cat;
    $('#flt-from').value = S.from; $('#flt-to').value = S.to;
    $('#flt-min').value = S.min; $('#flt-max').value = S.max;
    show('ov-filter');
  }
  $('#btn-filters').addEventListener('click', openFilters);
  $('#flt-apply').addEventListener('click', () => {
    Object.assign(S, {
      type: $('#flt-type').value, cat: $('#flt-cat').value, from: $('#flt-from').value, to: $('#flt-to').value,
      min: $('#flt-min').value.trim(), max: $('#flt-max').value.trim(), limit: 100
    });
    hide('ov-filter'); renderHome();
  });
  $('#flt-clear').addEventListener('click', () => {
    Object.assign(S, { type: 'all', cat: '', from: '', to: '', min: '', max: '', limit: 100 });
    hide('ov-filter'); renderHome();
  });

  /* --- Pagos recurrentes: pantalla --- */
  const dateShort = ds => {
    const d = parseDate(ds);
    return d.toLocaleDateString(loc(), d.getFullYear() === new Date().getFullYear() ? { day: 'numeric', month: 'short' } : { day: 'numeric', month: 'short', year: 'numeric' });
  };
  function renderRecurring() {
    const rows = state.recurring.map(r => ({ r, nx: nextOcc(r), ended: isEnded(r) }));
    const live = o => (o.r.active && !o.ended ? 0 : 1);
    rows.sort((a, b) => live(a) - live(b) || cmp(a.nx, b.nx));
    let inc = 0, exp = 0;
    rows.forEach(o => {
      if (live(o) || o.r.type === 'transfer') return;
      if (o.r.type === 'income') inc += o.r.amount * perMonth(o.r); else exp += o.r.amount * perMonth(o.r);
    });
    $('#rec-income').textContent = money(round2(inc));
    $('#rec-expense').textContent = money(round2(exp));
    $('#rec-list').innerHTML = rows.length ? rows.map(o => {
      const r = o.r;
      const c = r.type === 'transfer' ? null : findCat(r.cat);
      const title = r.note || (c ? catName(c) : `${accName(r.acc)} → ${accName(r.to)}`);
      const when = !r.active ? t('rec.paused') : o.ended ? t('rec.ended') : t('rec.next', { d: dateShort(o.nx) });
      const sign = r.type === 'income' ? '+' : r.type === 'expense' ? '−' : '';
      const cls = r.type === 'transfer' ? 'neutral' : r.type;
      return `<button class="tx rec${live(o) ? ' dim' : ''}" data-id="${esc(r.id)}">
        <div class="ico" style="background:${c ? esc(c.color) : '#64748b'}22">${c ? esc(c.ico) : '🔁'}</div>
        <div class="info"><b>${esc(title)}</b><small>${esc(freqLabel(r))} · ${esc(when)}</small></div>
        <div class="amt ${cls}">${sign}${esc(money(r.amount))}</div></button>`;
    }).join('') : `<div class="empty"><span class="big">🔁</span>${t('rec.empty')}</div>`;
  }
  $('#rec-list').addEventListener('click', e => { const b = e.target.closest('.tx'); if (b) openTx(null, null, { ruleId: b.dataset.id }); });
  $('#btn-add-rec').addEventListener('click', () => openTx(null, 'expense', { recur: true }));
  $('#f-rec').addEventListener('change', e => { F.recur = e.target.checked; if (F.recur && F.type === 'yield') setFormType('expense'); else renderSeg(); syncRecUI(); });

  /* =====================================================================
     Inicio
     ===================================================================== */
  const recToast = n => toast(t(n === 1 ? 'rec.created1' : 'rec.created', { n }));
  applyLang();
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* opcional */ }
  const boot = generateDue();
  render();
  setView('home');
  if (boot.made) recToast(boot.made);
  // Sin zoom: el pellizco de Safari/iOS se dispara con eventos "gesture*"; el doble toque se evita con touch-action en el CSS.
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(ev => document.addEventListener(ev, e => e.preventDefault(), { passive: false }));
  // Al volver a la app (por ejemplo desde la pantalla de inicio del iPhone) se registran los pagos que ya tocaban.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') return;
    const g = generateDue();
    if (g.made) { render(); recToast(g.made); } else renderBackup();
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('./sw.js').catch(() => {}); });
  }
})();

// ===========================
//  PILOTE DETAIL PAGE RENDERER
// ===========================

(function () {
  const params = new URLSearchParams(window.location.search);
  const driverNumber = parseInt(params.get('n'));

  // Find driver and team
  let driver = null;
  let team = null;
  let driverIndex = -1;

  for (const t of TEAMS) {
    for (let i = 0; i < t.drivers.length; i++) {
      if (t.drivers[i].number === driverNumber) {
        driver = t.drivers[i];
        team = t;
        driverIndex = i;
        break;
      }
    }
    if (driver) break;
  }

  // Redirect if not found or NONE
  if (!driver || driver.name === 'NONE') {
    window.location.href = 'pilotes.html';
    return;
  }

  // Update page title
  document.title = `${driver.name} - F1 Esport League`;

  // Find teammate
  const teammateIndex = driverIndex === 0 ? 1 : 0;
  const teammate = team.drivers[teammateIndex];
  const hasTeammate = teammate && teammate.name !== 'NONE';

  // Collect all confirmed rivals (not NONE, not self, not teammate)
  const rivals = [];
  for (const t of TEAMS) {
    if (t.name === 'NONE') continue;
    for (const d of t.drivers) {
      if (d.name === 'NONE') continue;
      if (d.number === driver.number) continue;
      if (hasTeammate && d.number === teammate.number) continue;
      rivals.push({ driver: d, team: t });
    }
  }

  // Helper: format stat value
  function statVal(val) {
    if (val === 0 || val === '0' || val === 'NONE') return '—';
    return val;
  }

  // Helper: compute bar percentage (normalize stats for visual display)
  function statBar(val, max) {
    if (!val || val === 'NONE') return 0;
    const n = parseFloat(val);
    if (isNaN(n) || n === 0) return 0;
    return Math.min((n / max) * 100, 100);
  }

  // Helper: driver photo HTML
  function driverPhotoHtml(d, cls) {
    if (d.photo) {
      return `<img src="${d.photo}" alt="${d.name}" class="${cls}" onerror="this.style.display='none'" />`;
    }
    return `<div class="${cls}" style="display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.05);color:#555;font-size:1rem;">N/A</div>`;
  }

  // Stat max values for bar normalization
  const maxPoints = 400;
  const maxStarts = 24;
  const maxAvgPoints = 25;
  const maxPositions = 100;
  const maxAvgPos = 22;
  const maxLaps = 1500;
  const maxKm = 8000;

  // Build stats data
  const stats = [
    { label: 'COURSES', value: statVal(driver.starts), bar: statBar(driver.starts, maxStarts) },
    { label: 'POINTS', value: statVal(driver.points), bar: statBar(driver.points, maxPoints) },
    { label: 'MOY. POINTS', value: statVal(driver.avgPoints), bar: statBar(driver.avgPoints, maxAvgPoints) },
    { label: 'POS. GAGNÉES', value: statVal(driver.positionsGained), bar: statBar(driver.positionsGained, maxPositions) },
    { label: 'MOY. QUALIF', value: driver.avgQualifying ? statVal(driver.avgQualifying) : '—', bar: driver.avgQualifying ? statBar(22 - driver.avgQualifying, maxAvgPos) : 0 },
    { label: 'MOY. ARRIVÉE', value: driver.avgFinish ? statVal(driver.avgFinish) : '—', bar: driver.avgFinish ? statBar(22 - driver.avgFinish, maxAvgPos) : 0 },
    { label: 'TOURS COURUS', value: statVal(driver.racedLaps), bar: statBar(driver.racedLaps, maxLaps) },
    { label: 'KM PARCOURUS', value: statVal(driver.racedKm), bar: statBar(driver.racedKm, maxKm) }
  ];

  const statsHtml = stats.map(s => `
    <div class="pilote-stat-card">
      <div class="pilote-stat-value">${s.value}</div>
      <div class="pilote-stat-label">${s.label}</div>
      <div class="pilote-stat-bar"><div class="pilote-stat-fill" style="width: ${s.bar}%; background: ${team.color}"></div></div>
    </div>
  `).join('');

  // Performance section
  const fqVal = driver.fastestQualifying !== 'NONE' ? driver.fastestQualifying : '—';
  const fqYear = driver.fastestQualifyingYear !== 'NONE' ? driver.fastestQualifyingYear : '';
  const flVal = driver.fastestLap !== 'NONE' ? driver.fastestLap : '—';
  const flYear = driver.fastestLapYear !== 'NONE' ? driver.fastestLapYear : '';
  const lsGrid = driver.lastSeasonGrid || '—';
  const lsRace = driver.lastSeasonRace || '—';

  // Teammate comparison section
  let teammateHtml = '';
  if (hasTeammate) {
    // Build comparison bars
    function compBar(val1, val2, label) {
      const v1 = parseFloat(val1) || 0;
      const v2 = parseFloat(val2) || 0;
      const total = v1 + v2;
      const pct1 = total > 0 ? (v1 / total) * 100 : 50;
      const pct2 = total > 0 ? (v2 / total) * 100 : 50;
      return `
        <div class="pilote-vs-stat">
          <div class="pilote-vs-stat-label">${label}</div>
          <div class="pilote-vs-stat-bars">
            <div class="pilote-vs-bar-left">
              <span class="pilote-vs-bar-val">${statVal(val1)}</span>
              <div class="pilote-vs-bar-track"><div class="pilote-vs-bar-fill left" style="width:${pct1}%;background:${team.color}"></div></div>
            </div>
            <div class="pilote-vs-bar-right">
              <div class="pilote-vs-bar-track"><div class="pilote-vs-bar-fill right" style="width:${pct2}%;background:${team.color};opacity:0.6"></div></div>
              <span class="pilote-vs-bar-val">${statVal(val2)}</span>
            </div>
          </div>
        </div>
      `;
    }

    teammateHtml = `
      <section class="pilote-teammate">
        <div class="section-container">
          <div class="section-header"><div class="section-tag" style="color:${team.color}">DUEL INTERNE</div><h2 class="section-title">COÉQUIPIERS</h2></div>
          <div class="pilote-vs-card">
            <div class="pilote-vs-driver">
              <div class="pilote-vs-photo">${driverPhotoHtml(driver, 'pilote-vs-img')}</div>
              <div class="pilote-vs-name">${driver.name}</div>
              <div class="pilote-vs-number">#${driver.number}</div>
            </div>
            <div class="pilote-vs-center">
              <div class="pilote-vs-text">VS</div>
            </div>
            <div class="pilote-vs-driver">
              <div class="pilote-vs-photo">${driverPhotoHtml(teammate, 'pilote-vs-img')}</div>
              <div class="pilote-vs-name"><a href="pilote.html?n=${teammate.number}" style="color:inherit;text-decoration:none">${teammate.name}</a></div>
              <div class="pilote-vs-number">#${teammate.number}</div>
            </div>
          </div>
          <div class="pilote-vs-stats">
            ${compBar(driver.points, teammate.points, 'POINTS')}
            ${compBar(driver.avgFinish, teammate.avgFinish, 'MOY. ARRIVÉE')}
            ${compBar(driver.avgQualifying, teammate.avgQualifying, 'MOY. QUALIF')}
          </div>
        </div>
      </section>
    `;
  } else {
    teammateHtml = `
      <section class="pilote-teammate">
        <div class="section-container">
          <div class="section-header"><div class="section-tag" style="color:${team.color}">DUEL INTERNE</div><h2 class="section-title">COÉQUIPIER</h2></div>
          <div class="pilote-vs-card" style="justify-content:center;padding:3rem;">
            <div class="pilote-vs-center">
              <div class="pilote-vs-text" style="font-size:1.5rem;opacity:0.5">Coéquipier à confirmer</div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // Rivalries section
  let rivalriesHtml = '';
  if (rivals.length > 0) {
    const rivalCardsHtml = rivals.map(r => `
      <a href="pilote.html?n=${r.driver.number}" class="pilote-rival-card" style="--rival-color:${r.team.color}">
        <div class="pilote-rival-photo">${driverPhotoHtml(r.driver, 'pilote-rival-img')}</div>
        <div class="pilote-rival-info">
          <div class="pilote-rival-name">${r.driver.name}</div>
          <div class="pilote-rival-team" style="color:${r.team.color}">${r.team.name}</div>
          <div class="pilote-rival-points">${r.driver.points} PTS</div>
        </div>
      </a>
    `).join('');

    rivalriesHtml = `
      <section class="pilote-rivalries">
        <div class="section-container">
          <div class="section-header"><div class="section-tag" style="color:${team.color}">ADVERSAIRES</div><h2 class="section-title">RIVALITÉS</h2></div>
          <p style="color:#888;font-family:var(--font-body);margin-bottom:2rem;font-size:0.9rem;">Face-à-face à venir en 2026</p>
          <div class="pilote-rivals-grid">
            ${rivalCardsHtml}
          </div>
        </div>
      </section>
    `;
  }

  // Inject everything
  document.getElementById('piloteContent').innerHTML = `
    <div class="pilote-page" style="--team-color:${team.color}">

      <!-- HERO -->
      <section class="pilote-hero" style="background:${team.colorBg}">
        <div class="pilote-hero-accent" style="background:${team.color}"></div>
        <div class="pilote-hero-bg-number">#${driver.number}</div>
        <div class="pilote-hero-inner">
          <div class="pilote-hero-info">
            <div class="pilote-hero-team" style="color:${team.color}">${team.name}</div>
            <h1 class="pilote-hero-name">${driver.name}</h1>
            <div class="pilote-hero-meta">
              <span class="pilote-hero-abbr" style="border-color:${team.color}">${driver.abbr}</span>
              <span class="pilote-hero-num" style="color:${team.color}">#${driver.number}</span>
            </div>
            <div class="pilote-hero-tagline">SAISON 2026 — PRÊT POUR LA BATAILLE</div>
          </div>
          <div class="pilote-hero-photo">
            ${driverPhotoHtml(driver, 'pilote-hero-img')}
          </div>
        </div>
      </section>

      <!-- STATS -->
      <section class="pilote-stats-section">
        <div class="section-container">
          <div class="section-header"><div class="section-tag" style="color:${team.color}">STATISTIQUES</div><h2 class="section-title">DASHBOARD</h2></div>
          <div class="pilote-stats-grid">
            ${statsHtml}
          </div>
        </div>
      </section>

      <!-- PERFORMANCE -->
      <section class="pilote-perf-section">
        <div class="section-container">
          <div class="section-header"><div class="section-tag" style="color:${team.color}">PERFORMANCES</div><h2 class="section-title">RECORDS & RÉSULTATS</h2></div>
          <div class="pilote-perf-grid">
            <div class="pilote-perf-card">
              <div class="pilote-perf-label">MEILLEUR TOUR QUALIF</div>
              <div class="pilote-perf-value" style="color:${team.color}">${fqVal}</div>
              <div class="pilote-perf-year">${fqYear}</div>
            </div>
            <div class="pilote-perf-card">
              <div class="pilote-perf-label">MEILLEUR TOUR COURSE</div>
              <div class="pilote-perf-value" style="color:${team.color}">${flVal}</div>
              <div class="pilote-perf-year">${flYear}</div>
            </div>
            <div class="pilote-perf-card pilote-perf-season">
              <div class="pilote-perf-label">SAISON DERNIÈRE</div>
              <div class="pilote-perf-slash">
                <div class="pilote-perf-slash-item">
                  <div class="pilote-perf-slash-val" style="color:${team.color}">${lsGrid}</div>
                  <div class="pilote-perf-slash-label">GRILLE</div>
                </div>
                <div class="pilote-perf-slash-sep">/</div>
                <div class="pilote-perf-slash-item">
                  <div class="pilote-perf-slash-val" style="color:${team.color}">${lsRace}</div>
                  <div class="pilote-perf-slash-label">COURSE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TEAMMATE -->
      ${teammateHtml}

      <!-- RIVALRIES -->
      ${rivalriesHtml}

      <!-- HIGHLIGHTS -->
      <section class="pilote-highlights">
        <div class="section-container">
          <div class="section-header"><div class="section-tag" style="color:${team.color}">MOMENTS FORTS</div><h2 class="section-title">HIGHLIGHTS</h2></div>
          <div class="pilote-highlights-placeholder">
            Les highlights seront ajoutés au fil de la saison
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="pilote-cta">
        <div class="section-container" style="text-align:center;">
          <a href="team.html?id=${team.id}" class="btn btn-primary" style="background:${team.color};border-color:${team.color}">Voir l'écurie ${team.name}</a>
          <a href="pilotes.html" class="btn btn-outline" style="margin-left:1rem;">Retour aux pilotes</a>
        </div>
      </section>

    </div>
  `;

  // Animate stat bars on scroll
  const statCards = document.querySelectorAll('.pilote-stat-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  statCards.forEach((el, i) => {
    el.classList.add('fade-init');
    el.style.transitionDelay = `${i * 0.06}s`;
    observer.observe(el);
  });

  // Also animate perf cards, vs cards, rival cards
  const animEls = document.querySelectorAll('.pilote-perf-card, .pilote-vs-card, .pilote-vs-stat, .pilote-rival-card');
  animEls.forEach((el, i) => {
    el.classList.add('fade-init');
    el.style.transitionDelay = `${i * 0.05}s`;
    observer.observe(el);
  });

})();

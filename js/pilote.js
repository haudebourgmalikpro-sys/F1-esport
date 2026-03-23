// ===========================
//  PILOTE DETAIL PAGE — HYPE EDITION
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

  if (!driver || driver.name === 'NONE') {
    window.location.href = 'pilotes.html';
    return;
  }

  document.title = `${driver.name} — F1 Esport League`;

  // Teammate
  const teammateIndex = driverIndex === 0 ? 1 : 0;
  const teammate = team.drivers[teammateIndex];
  const hasTeammate = teammate && teammate.name !== 'NONE';

  // Rivals
  const rivals = [];
  for (const t of TEAMS) {
    if (t.name === 'NONE') continue;
    for (const d of t.drivers) {
      if (d.name === 'NONE' || d.number === driver.number) continue;
      if (hasTeammate && d.number === teammate.number) continue;
      rivals.push({ driver: d, team: t });
    }
  }

  // Helpers
  function sv(val) { return (!val || val === 0 || val === '0' || val === 'NONE') ? '—' : val; }

  function driverImg(d, cls) {
    if (d.photo) return `<img src="${d.photo}" alt="${d.name}" class="${cls}" onerror="this.parentElement.innerHTML='<div class=\\'${cls}-fallback\\'>${d.abbr || '?'}</div>'" />`;
    return `<div class="${cls}-fallback">${d.abbr || '?'}</div>`;
  }

  // ─── HERO ───
  const heroHtml = `
    <section class="pd-hero" style="--tc:${team.color};--tc-bg:${team.colorBg}">
      <div class="pd-hero-scanlines"></div>
      <div class="pd-hero-gradient"></div>
      <div class="pd-hero-number">${driver.number}</div>
      <div class="pd-hero-team-watermark">${team.name}</div>
      <div class="pd-hero-content">
        <div class="pd-hero-left">
          <div class="pd-hero-badge">
            <img src="${team.logo}" alt="${team.name}" class="pd-hero-team-logo" onerror="this.style.display='none'" />
            <span style="color:var(--tc)">${team.name}</span>
          </div>
          <h1 class="pd-hero-name" data-text="${driver.name}">${driver.name}</h1>
          <div class="pd-hero-meta">
            <div class="pd-hero-num-box">
              <span class="pd-hero-num-hash">#</span>
              <span class="pd-hero-num-val">${driver.number}</span>
            </div>
            <div class="pd-hero-sep"></div>
            <div class="pd-hero-abbr-box">${driver.abbr}</div>
            <div class="pd-hero-sep"></div>
            <div class="pd-hero-season">SAISON 2026</div>
          </div>
          <div class="pd-hero-tagline">
            <span class="pd-hero-tag-line"></span>
            PRÊT POUR LA BATAILLE
          </div>
          <div class="pd-hero-quick-stats">
            <div class="pd-hero-qs"><span class="pd-hero-qs-val">${sv(driver.points)}</span><span class="pd-hero-qs-lbl">PTS</span></div>
            <div class="pd-hero-qs"><span class="pd-hero-qs-val">${sv(driver.starts)}</span><span class="pd-hero-qs-lbl">COURSES</span></div>
            <div class="pd-hero-qs"><span class="pd-hero-qs-val">${sv(driver.positionsGained)}</span><span class="pd-hero-qs-lbl">POS +</span></div>
          </div>
        </div>
        <div class="pd-hero-right">
          <div class="pd-hero-photo-frame">
            <div class="pd-hero-photo-glow"></div>
            ${driverImg(driver, 'pd-hero-img')}
            <div class="pd-hero-photo-corner tl"></div>
            <div class="pd-hero-photo-corner tr"></div>
            <div class="pd-hero-photo-corner bl"></div>
            <div class="pd-hero-photo-corner br"></div>
          </div>
        </div>
      </div>
      <div class="pd-hero-bottom-bar">
        <div class="pd-hero-bar-fill"></div>
      </div>
    </section>
  `;

  // ─── STATS DASHBOARD ───
  const statsDef = [
    { icon: '🏁', label: 'COURSES', value: sv(driver.starts), raw: driver.starts || 0, max: 24 },
    { icon: '⭐', label: 'POINTS', value: sv(driver.points), raw: driver.points || 0, max: 400 },
    { icon: '📊', label: 'MOY. POINTS', value: sv(driver.avgPoints), raw: driver.avgPoints || 0, max: 25 },
    { icon: '📈', label: 'POS. GAGNÉES', value: sv(driver.positionsGained), raw: driver.positionsGained || 0, max: 100 },
    { icon: '⏱️', label: 'MOY. QUALIF', value: sv(driver.avgQualifying), raw: driver.avgQualifying ? (22 - driver.avgQualifying) : 0, max: 22 },
    { icon: '🏎️', label: 'MOY. ARRIVÉE', value: sv(driver.avgFinish), raw: driver.avgFinish ? (22 - driver.avgFinish) : 0, max: 22 },
    { icon: '🔄', label: 'TOURS COURUS', value: sv(driver.racedLaps), raw: driver.racedLaps || 0, max: 1500 },
    { icon: '📍', label: 'KM PARCOURUS', value: sv(driver.racedKm), raw: driver.racedKm || 0, max: 8000 },
  ];

  const statsHtml = statsDef.map((s, i) => {
    const pct = s.max > 0 ? Math.min((s.raw / s.max) * 100, 100) : 0;
    return `
      <div class="pd-stat" data-delay="${i * 80}">
        <div class="pd-stat-icon">${s.icon}</div>
        <div class="pd-stat-value" data-count="${s.raw}">${s.value}</div>
        <div class="pd-stat-label">${s.label}</div>
        <div class="pd-stat-bar"><div class="pd-stat-fill" data-width="${pct}"></div></div>
      </div>
    `;
  }).join('');

  // ─── PERFORMANCE ───
  const fq = driver.fastestQualifying !== 'NONE' ? driver.fastestQualifying : '—';
  const fqY = driver.fastestQualifyingYear !== 'NONE' ? driver.fastestQualifyingYear : '';
  const fl = driver.fastestLap !== 'NONE' ? driver.fastestLap : '—';
  const flY = driver.fastestLapYear !== 'NONE' ? driver.fastestLapYear : '';
  const lsG = driver.lastSeasonGrid || '—';
  const lsR = driver.lastSeasonRace || '—';

  const perfHtml = `
    <section class="pd-perf">
      <div class="section-container">
        <div class="pd-section-head">
          <span class="pd-section-tag" style="color:var(--tc)">⚡ PERFORMANCES</span>
          <h2 class="pd-section-title">RECORDS & RÉSULTATS</h2>
        </div>
        <div class="pd-perf-grid">
          <div class="pd-perf-card">
            <div class="pd-perf-card-accent"></div>
            <div class="pd-perf-icon">⏱️</div>
            <div class="pd-perf-lbl">MEILLEUR TOUR QUALIF</div>
            <div class="pd-perf-val">${fq}</div>
            <div class="pd-perf-year">${fqY}</div>
          </div>
          <div class="pd-perf-card">
            <div class="pd-perf-card-accent"></div>
            <div class="pd-perf-icon">🔥</div>
            <div class="pd-perf-lbl">MEILLEUR TOUR COURSE</div>
            <div class="pd-perf-val">${fl}</div>
            <div class="pd-perf-year">${flY}</div>
          </div>
          <div class="pd-perf-card pd-perf-card-wide">
            <div class="pd-perf-card-accent"></div>
            <div class="pd-perf-icon">📅</div>
            <div class="pd-perf-lbl">SAISON DERNIÈRE</div>
            <div class="pd-perf-season">
              <div class="pd-perf-season-item">
                <span class="pd-perf-season-val">${lsG}</span>
                <span class="pd-perf-season-lbl">GRILLE</span>
              </div>
              <div class="pd-perf-season-slash">/</div>
              <div class="pd-perf-season-item">
                <span class="pd-perf-season-val">${lsR}</span>
                <span class="pd-perf-season-lbl">COURSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // ─── TEAMMATE VS ───
  let teammateHtml = '';
  if (hasTeammate) {
    function vsBar(v1, v2, label, icon) {
      const n1 = parseFloat(v1) || 0, n2 = parseFloat(v2) || 0;
      const total = n1 + n2;
      const p1 = total > 0 ? (n1 / total) * 100 : 50;
      const p2 = total > 0 ? (n2 / total) * 100 : 50;
      return `
        <div class="pd-vs-row">
          <span class="pd-vs-row-val">${sv(v1)}</span>
          <div class="pd-vs-row-bar">
            <div class="pd-vs-row-fill-l" data-width="${p1}"></div>
            <div class="pd-vs-row-label">${icon} ${label}</div>
            <div class="pd-vs-row-fill-r" data-width="${p2}"></div>
          </div>
          <span class="pd-vs-row-val">${sv(v2)}</span>
        </div>
      `;
    }

    teammateHtml = `
      <section class="pd-vs">
        <div class="section-container">
          <div class="pd-section-head">
            <span class="pd-section-tag" style="color:var(--tc)">⚔️ DUEL INTERNE</span>
            <h2 class="pd-section-title">COÉQUIPIERS</h2>
          </div>
          <div class="pd-vs-card">
            <div class="pd-vs-driver">
              <div class="pd-vs-photo">${driverImg(driver, 'pd-vs-img')}</div>
              <div class="pd-vs-name">${driver.name}</div>
              <div class="pd-vs-num">#${driver.number}</div>
            </div>
            <div class="pd-vs-center">
              <div class="pd-vs-lightning">⚡</div>
              <div class="pd-vs-text">VS</div>
              <div class="pd-vs-lightning">⚡</div>
            </div>
            <div class="pd-vs-driver">
              <a href="pilote.html?n=${teammate.number}" class="pd-vs-photo-link">
                <div class="pd-vs-photo">${driverImg(teammate, 'pd-vs-img')}</div>
              </a>
              <a href="pilote.html?n=${teammate.number}" class="pd-vs-name-link">${teammate.name}</a>
              <div class="pd-vs-num">#${teammate.number}</div>
            </div>
          </div>
          <div class="pd-vs-bars">
            ${vsBar(driver.points, teammate.points, 'POINTS', '⭐')}
            ${vsBar(driver.avgFinish, teammate.avgFinish, 'MOY. ARRIVÉE', '🏁')}
            ${vsBar(driver.avgQualifying, teammate.avgQualifying, 'MOY. QUALIF', '⏱️')}
            ${vsBar(driver.starts, teammate.starts, 'COURSES', '🏎️')}
          </div>
        </div>
      </section>
    `;
  } else {
    teammateHtml = `
      <section class="pd-vs">
        <div class="section-container">
          <div class="pd-section-head">
            <span class="pd-section-tag" style="color:var(--tc)">⚔️ DUEL INTERNE</span>
            <h2 class="pd-section-title">COÉQUIPIER</h2>
          </div>
          <div class="pd-vs-tba">
            <div class="pd-vs-tba-icon">👤</div>
            <div class="pd-vs-tba-text">COÉQUIPIER À CONFIRMER</div>
            <div class="pd-vs-tba-sub">Annonce prochainement...</div>
          </div>
        </div>
      </section>
    `;
  }

  // ─── RIVALRIES ───
  let rivalriesHtml = '';
  if (rivals.length > 0) {
    const rivalCards = rivals.map(r => `
      <a href="pilote.html?n=${r.driver.number}" class="pd-rival" style="--rival-color:${r.team.color}">
        <div class="pd-rival-top-bar"></div>
        <div class="pd-rival-photo">${driverImg(r.driver, 'pd-rival-img')}</div>
        <div class="pd-rival-name">${r.driver.name}</div>
        <div class="pd-rival-team">${r.team.name}</div>
        <div class="pd-rival-num">#${r.driver.number}</div>
        <div class="pd-rival-arrow">→</div>
      </a>
    `).join('');

    rivalriesHtml = `
      <section class="pd-rivals">
        <div class="section-container">
          <div class="pd-section-head">
            <span class="pd-section-tag" style="color:var(--tc)">🎯 ADVERSAIRES</span>
            <h2 class="pd-section-title">RIVALITÉS</h2>
          </div>
          <p class="pd-rivals-sub">Face-à-face à venir — Saison 2026</p>
          <div class="pd-rivals-grid">${rivalCards}</div>
        </div>
      </section>
    `;
  }

  // ─── HIGHLIGHTS ───
  const highlightsHtml = `
    <section class="pd-highlights">
      <div class="section-container">
        <div class="pd-section-head">
          <span class="pd-section-tag" style="color:var(--tc)">🎬 MOMENTS FORTS</span>
          <h2 class="pd-section-title">HIGHLIGHTS</h2>
        </div>
        <div class="pd-highlights-grid">
          <div class="pd-highlight-placeholder">
            <div class="pd-highlight-play">▶</div>
            <div class="pd-highlight-text">
              <h3>HIGHLIGHTS À VENIR</h3>
              <p>Les meilleurs moments de ${driver.name} seront ajoutés au fil de la saison</p>
            </div>
            <div class="pd-highlight-dots"><span></span><span></span><span></span></div>
          </div>
          <div class="pd-highlight-placeholder small">
            <div class="pd-highlight-play">▶</div>
            <div class="pd-highlight-text"><h3>BEST OF QUALIF</h3></div>
          </div>
          <div class="pd-highlight-placeholder small">
            <div class="pd-highlight-play">▶</div>
            <div class="pd-highlight-text"><h3>BEST OF COURSE</h3></div>
          </div>
        </div>
      </div>
    </section>
  `;

  // ─── CTA ───
  const ctaHtml = `
    <section class="pd-cta">
      <div class="pd-cta-bg"></div>
      <div class="section-container">
        <div class="pd-cta-content">
          <h2 class="pd-cta-title">DÉCOUVRIR L'ÉCURIE</h2>
          <p class="pd-cta-sub">${team.name} — Saison 2026</p>
          <div class="pd-cta-buttons">
            <a href="team.html?id=${team.id}" class="pd-cta-btn primary">
              <img src="${team.logo}" alt="" class="pd-cta-btn-logo" onerror="this.style.display='none'" />
              Voir ${team.name}
            </a>
            <a href="pilotes.html" class="pd-cta-btn secondary">← Tous les pilotes</a>
          </div>
        </div>
      </div>
    </section>
  `;

  // ─── INJECT ───
  document.getElementById('piloteContent').innerHTML = `
    <div class="pd-page" style="--tc:${team.color};--tc-bg:${team.colorBg}">
      ${heroHtml}
      <section class="pd-stats">
        <div class="section-container">
          <div class="pd-section-head">
            <span class="pd-section-tag" style="color:var(--tc)">📊 STATISTIQUES</span>
            <h2 class="pd-section-title">DASHBOARD</h2>
          </div>
          <div class="pd-stats-grid">${statsHtml}</div>
        </div>
      </section>
      ${perfHtml}
      ${teammateHtml}
      ${rivalriesHtml}
      ${highlightsHtml}
      ${ctaHtml}
    </div>
  `;

  // ─── ANIMATIONS ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => {
          el.classList.add('pd-visible');
          // Animate stat bars
          const fill = el.querySelector('.pd-stat-fill');
          if (fill) fill.style.width = fill.dataset.width + '%';
          // Animate VS bars
          const fillL = el.querySelector('.pd-vs-row-fill-l');
          const fillR = el.querySelector('.pd-vs-row-fill-r');
          if (fillL) fillL.style.width = fillL.dataset.width + '%';
          if (fillR) fillR.style.width = fillR.dataset.width + '%';
        }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  // Observe all animated elements
  document.querySelectorAll('.pd-stat, .pd-perf-card, .pd-vs-card, .pd-vs-row, .pd-rival, .pd-highlight-placeholder').forEach(el => {
    observer.observe(el);
  });

  // Hero entrance animation
  setTimeout(() => {
    document.querySelector('.pd-hero')?.classList.add('pd-hero-loaded');
  }, 100);

})();

// ===========================
//  TEAM DETAIL PAGE RENDERER
// ===========================

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

(function () {
  const params = new URLSearchParams(window.location.search);
  const teamId = parseInt(params.get('id'));

  if (isNaN(teamId)) {
    document.getElementById('teamContent').innerHTML =
      '<div style="padding:200px 2rem;text-align:center;font-family:var(--font-main);font-size:2rem;color:#a0a0a0;">ID INVALIDE — <a href="teams.html" style="color:var(--accent-red)">RETOUR</a></div>';
    return;
  }

  const team = TEAMS.find(t => t.id === teamId);

  if (!team) {
    document.getElementById('teamContent').innerHTML =
      '<div style="padding:200px 2rem;text-align:center;font-family:var(--font-main);font-size:2rem;color:#a0a0a0;">ÉCURIE INTROUVABLE — <a href="teams.html" style="color:var(--accent-red)">RETOUR</a></div>';
    return;
  }

  // Apply CSS vars
  const body = document.getElementById('team-body');
  body.style.setProperty('--team-clr', team.color);
  body.style.setProperty('--team-bg', team.colorBg);
  body.style.setProperty('--team-clr-alpha', hexToRgba(team.color, 0.12));
  body.style.setProperty('--team-clr-faint', hexToRgba(team.color, 0.04));

  document.title = `${team.name} — F1 Esport League`;

  const d1 = team.drivers[0];
  const d2 = team.drivers[1];

  function driverPhotoHtml(driver) {
    if (driver.photo) {
      return `<img src="${driver.photo}" alt="${driver.name}" class="driver-photo-img" onerror="this.parentElement.innerHTML='<span>PHOTO PILOTE</span><span>#${driver.number}</span>'" />`;
    }
    return `<span>PHOTO PILOTE</span><span>#${driver.number}</span>`;
  }

  const logoHtml = team.logo
    ? `<img src="${team.logo}" alt="${team.name}" class="team-hero-logo" onerror="this.style.display='none'" />`
    : '';

  // Helper: build LEFT driver stats column
  function driverStatsLeft(d) {
    return `
      <div class="driver-stats-col">
        <div class="stat-pair">
          <div class="stat-single">
            <div class="sv huge">${d.starts}</div>
            <div class="sl">Starts</div>
          </div>
          <div class="stat-slash">/</div>
          <div class="stat-single">
            <div class="sv huge">${d.points}</div>
            <div class="sl">Points</div>
          </div>
        </div>
        <div class="stat-wide">
          <div class="sv">${d.fastestQualifying}</div>
          <div class="sl">Fastest qualifying</div>
          <div class="ss">(${d.fastestQualifyingYear})</div>
        </div>
        <div class="stat-pair">
          <div class="stat-single">
            <div class="sv">${d.avgQualifying}<sup>TH</sup></div>
            <div class="sl">Average qualifying</div>
          </div>
          <div class="stat-slash">/</div>
          <div class="stat-single">
            <div class="sv">${d.avgFinish}<sup>TH</sup></div>
            <div class="sl">Average finish</div>
          </div>
        </div>
      </div>
    `;
  }

  // Helper: build RIGHT driver stats column
  function driverStatsRight(d) {
    return `
      <div class="driver-stats-col">
        <div class="stat-pair">
          <div class="stat-single">
            <div class="sv huge">${d.avgPoints}</div>
            <div class="sl">Average points</div>
          </div>
          <div class="stat-slash">/</div>
          <div class="stat-single">
            <div class="sv huge">${d.positionsGained}</div>
            <div class="sl">Positions gained</div>
          </div>
        </div>
        <div class="stat-wide">
          <div class="sv">${d.fastestLap}</div>
          <div class="sl">Fastest lap</div>
          <div class="ss">(${d.fastestLapYear})</div>
        </div>
        <div class="stat-pair">
          <div class="stat-single">
            <div class="sv">${d.racedLaps}</div>
            <div class="sl">Raced laps</div>
          </div>
          <div class="stat-slash">/</div>
          <div class="stat-single">
            <div class="sv">${d.racedKm}</div>
            <div class="sl">Raced KM</div>
          </div>
        </div>
      </div>
    `;
  }

  document.getElementById('teamContent').innerHTML = `

    <!-- HERO -->
    <section class="team-hero">
      <div class="team-hero-bg"></div>
      <div class="team-hero-stripe"></div>
      <div class="team-hero-glow"></div>
      <div class="team-hero-grid"></div>

      <div class="team-hero-content">
        <div class="team-number-bg">${String(team.id).padStart(2,'0')}</div>
        <div class="team-tag-line">ÉCURIE ${String(team.id).padStart(2,'0')} — SAISON 2025</div>
        ${logoHtml}
        <h1 class="team-hero-name">${team.name}</h1>
        <div class="team-hero-drivers">
          <div class="thd-item">
            <div class="thd-num">#${d1.number}</div>
            <div class="thd-name">${d1.name}</div>
          </div>
          <div class="thd-item">
            <div class="thd-num">#${d2.number}</div>
            <div class="thd-name">${d2.name}</div>
          </div>
        </div>
      </div>

      <!-- CAR SETUP -->
      <div class="team-setup">
        <div class="setup-title">C A R &nbsp; S E T - U P</div>
        <div class="setup-gauges">
          <div class="gauge-item">
            <div class="gauge-label">Downforce</div>
            <div class="gauge-bar">
              <div class="gauge-fill" data-pct="${team.setup.downforce}"></div>
            </div>
            <div class="gauge-ends"><span>LOW</span><span>HIGH</span></div>
          </div>
          <div class="gauge-item">
            <div class="gauge-label">Brake Wear</div>
            <div class="gauge-bar">
              <div class="gauge-fill brake" data-pct="${team.setup.brakeWear}"></div>
            </div>
            <div class="gauge-ends"><span>LOW</span><span>HIGH</span></div>
          </div>
          <div class="gauge-item">
            <div class="gauge-label">Tyre Wear</div>
            <div class="gauge-bar">
              <div class="gauge-fill" data-pct="${team.setup.tyreWear}"></div>
            </div>
            <div class="gauge-ends"><span>LOW</span><span>HIGH</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CAR IMAGE PLACEHOLDER -->
    <div class="team-car-section" style="padding:2rem 4rem;">
      <div class="car-img-placeholder">PHOTO DE LA VOITURE — À AJOUTER</div>
    </div>

    <!-- TELEMETRY -->
    <div class="team-telemetry">
      <div class="telemetry-inner">
        <div class="tele-title">T E L E M E T R Y</div>
        <div class="tele-grid">
          <div class="tele-item">
            <div class="tele-label">Fuel Effect</div>
            <div class="tele-avg">(2024 average: 0.20sec/10kg)</div>
            <div class="tele-gauge"><div class="tele-gauge-fill" data-pct="${(parseFloat(team.telemetry.fuelEffect)/0.3)*100}"></div></div>
            <div class="tele-value">${team.telemetry.fuelEffect}<span>${team.telemetry.fuelEffectUnit}</span></div>
          </div>
          <div class="tele-item">
            <div class="tele-label">Fuel Consumption</div>
            <div class="tele-avg">(2024 average: 1.55kg/lap)</div>
            <div class="tele-gauge"><div class="tele-gauge-fill orange" data-pct="${(parseFloat(team.telemetry.fuelConsumption)/2)*100}"></div></div>
            <div class="tele-value">${team.telemetry.fuelConsumption}<span>${team.telemetry.fuelConsumptionUnit}</span></div>
          </div>
          <div class="tele-item">
            <div class="tele-label">Full Throttle</div>
            <div class="tele-avg">(2024 average: 71% of lap)</div>
            <div class="tele-gauge"><div class="tele-gauge-fill" data-pct="${team.telemetry.fullThrottle}"></div></div>
            <div class="tele-value">${team.telemetry.fullThrottle}<span>${team.telemetry.fullThrottleUnit}</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- DRIVER 1 -->
    <div class="driver-section driver-1">
      <div class="driver-section-inner">
        <div class="driver-section-title">${d1.name} — STATS SAISON</div>
        ${driverStatsLeft(d1)}
        <div class="driver-center">
          <div class="driver-photo-placeholder">${driverPhotoHtml(d1)}</div>
          <div class="driver-name-display">${d1.name}</div>
        </div>
        ${driverStatsRight(d1)}
      </div>
    </div>

    <!-- TEAM STATS + LAST SEASON -->
    <div class="team-mid-section">
      <div class="team-mid-inner">
        <div class="team-stats-block">
          <div class="team-stats-title">${team.name}<span>STATS SAISON</span></div>
          <div class="team-stat-pairs">
            <div class="ts-pair">
              <div class="ts-single">
                <div class="tv">${team.teamStats.starts}</div>
                <div class="tl">Starts</div>
              </div>
              <div class="ts-slash">/</div>
              <div class="ts-single">
                <div class="tv">${team.teamStats.wins}</div>
                <div class="tl">Wins</div>
              </div>
            </div>
            <div class="ts-pair">
              <div class="ts-single">
                <div class="tv">${team.teamStats.podiums}</div>
                <div class="tl">Podiums</div>
              </div>
              <div class="ts-slash">/</div>
              <div class="ts-single">
                <div class="tv">${team.teamStats.poles}</div>
                <div class="tl">Poles</div>
              </div>
            </div>
            <div class="ts-pair">
              <div class="ts-single">
                <div class="tv">${team.teamStats.fastestLaps}</div>
                <div class="tl">Fastest Laps</div>
              </div>
              <div class="ts-slash">/</div>
              <div class="ts-single">
                <div class="tv">${team.teamStats.totalPoints}</div>
                <div class="tl">Total Points</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mid-car-block"><div class="mid-car-placeholder">VUE FRONTALE VOITURE</div></div>
        <div class="last-season-block">
          <div class="last-season-title">DERNIÈRE SAISON<span>RÉSULTATS ÉQUIPE</span></div>
          <div class="ls-driver-result">
            <div class="ls-driver-name">${d1.name}</div>
            <div class="ls-result-row">
              <div class="ls-result-item">
                <div class="ls-result-val">${d1.lastSeasonGrid}</div>
                <div class="ls-result-label">Grid</div>
              </div>
              <div class="ls-slash">/</div>
              <div class="ls-result-item">
                <div class="ls-result-val ${d1.lastSeasonRace === 'DNF' ? 'dnf' : ''}">${d1.lastSeasonRace}</div>
                <div class="ls-result-label">Race</div>
              </div>
            </div>
          </div>
          <div class="ls-driver-result">
            <div class="ls-driver-name">${d2.name}</div>
            <div class="ls-result-row">
              <div class="ls-result-item">
                <div class="ls-result-val">${d2.lastSeasonGrid}</div>
                <div class="ls-result-label">Grid</div>
              </div>
              <div class="ls-slash">/</div>
              <div class="ls-result-item">
                <div class="ls-result-val ${d2.lastSeasonRace === 'DNF' ? 'dnf' : ''}">${d2.lastSeasonRace}</div>
                <div class="ls-result-label">Race</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DRIVER 2 -->
    <div class="driver-section driver-2">
      <div class="driver-section-inner">
        <div class="driver-section-title">${d2.name} — STATS SAISON</div>
        ${driverStatsLeft(d2)}
        <div class="driver-center">
          <div class="driver-photo-placeholder">${driverPhotoHtml(d2)}</div>
          <div class="driver-name-display">${d2.name}</div>
        </div>
        ${driverStatsRight(d2)}
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <div class="footer-logo"><span class="logo-f1">F1</span><span class="logo-esport">ESPORT LEAGUE</span></div>
          <p>La ligue esport F1 la plus compétitive.</p>
        </div>
        <div class="footer-links">
          <h4>NAVIGATION</h4>
          <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="teams.html">Écuries</a></li>
            <li><a href="calendrier.html">Calendrier</a></li>
            <li><a href="classement.html">Classement</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <h4>NOUS REJOINDRE</h4>
          <div class="social-links">
            <a href="#" class="social-btn discord">Discord</a>
            <a href="#" class="social-btn twitter">Twitter / X</a>
            <a href="#" class="social-btn twitch">Twitch</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom"><span>© 2025 F1 Esport League. Tous droits réservés.</span></div>
    </footer>
  `;

  // Animate gauges
  setTimeout(() => {
    document.querySelectorAll('.gauge-fill, .tele-gauge-fill').forEach(el => {
      const pct = parseFloat(el.dataset.pct) || 0;
      el.style.width = Math.min(pct, 100) + '%';
    });
  }, 100);

  // Scroll-triggered fade for stats
  const statEls = document.querySelectorAll('.stat-pair, .stat-wide, .ts-pair, .ls-driver-result');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-visible');
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  statEls.forEach((el, i) => {
    el.classList.add('fade-init');
    el.style.transitionDelay = `${i * 0.04}s`;
    statObserver.observe(el);
  });

  // Back link color
  const backEl = document.getElementById('teamBack');
  if (backEl) backEl.style.color = team.color;
})();

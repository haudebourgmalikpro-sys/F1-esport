/* ===== RACE DATA ===== */
const RACES = {
  '01': {
    round: '01', flag: '\u{1F1E6}\u{1F1FA}', country: 'AUSTRALIE', gp: "Grand Prix d'Australie",
    circuit: 'Albert Park, Melbourne', dates: '01/05/2026 \u2014 03/05/2026',
    circuitImg: 'assets/circuits/australia.png',
    length: '5.278 km', firstGP: '1996', laps: '58',
    fastestLap: "1'19.813 \u2014 C. Leclerc (2024)", distance: '306.124 km'
  },
  '02': {
    round: '02', flag: '\u{1F1E8}\u{1F1F3}', country: 'CHINE', gp: 'Grand Prix de Chine',
    circuit: 'Shanghai International Circuit', dates: '08/05/2026 \u2014 10/05/2026',
    circuitImg: 'assets/circuits/china.png',
    length: '5.451 km', firstGP: '2004', laps: '56',
    fastestLap: "1'32.238 \u2014 M. Schumacher (2004)", distance: '305.066 km'
  },
  '03': {
    round: '03', flag: '\u{1F1EF}\u{1F1F5}', country: 'JAPON', gp: 'Grand Prix du Japon',
    circuit: 'Suzuka International Racing Course', dates: '22/05/2026 \u2014 24/05/2026',
    circuitImg: 'assets/circuits/japan.png',
    length: '5.807 km', firstGP: '1987', laps: '53',
    fastestLap: "1'30.983 \u2014 L. Hamilton (2019)", distance: '307.471 km'
  },
  '04': {
    round: '04', flag: '\u{1F1E7}\u{1F1ED}', country: 'BAHRE\u00cfN', gp: 'Grand Prix de Bahre\u00efn',
    circuit: 'Circuit International de Bahre\u00efn, Sakhir', dates: '29/05/2026 \u2014 31/05/2026',
    circuitImg: 'assets/circuits/bahrain.png',
    length: '5.412 km', firstGP: '2004', laps: '57',
    fastestLap: "1'31.447 \u2014 P. de la Rosa (2005)", distance: '308.238 km'
  },
  '05': {
    round: '05', flag: '\u{1F1F8}\u{1F1E6}', country: 'ARABIE SAOUDITE', gp: "Grand Prix d'Arabie Saoudite",
    circuit: 'Circuit de la Corniche, Jeddah', dates: '05/06/2026 \u2014 07/06/2026',
    circuitImg: 'assets/circuits/saudi.png',
    length: '6.174 km', firstGP: '2021', laps: '50',
    fastestLap: "1'30.734 \u2014 L. Hamilton (2021)", distance: '308.450 km'
  },
  '06': {
    round: '06', flag: '\u{1F1FA}\u{1F1F8}', country: 'MIAMI', gp: 'Grand Prix de Miami',
    circuit: 'Miami International Autodrome', dates: '19/06/2026 \u2014 21/06/2026',
    circuitImg: 'assets/circuits/miami.png',
    length: '5.412 km', firstGP: '2022', laps: '57',
    fastestLap: "1'29.708 \u2014 M. Verstappen (2023)", distance: '308.326 km'
  },
  '07': {
    round: '07', flag: '\u{1F1EE}\u{1F1F9}', country: '\u00c9MILIE-ROMAGNE', gp: "Grand Prix d'\u00c9milie-Romagne",
    circuit: 'Autodromo Enzo e Dino Ferrari, Imola', dates: '26/06/2026 \u2014 28/06/2026',
    circuitImg: 'assets/circuits/imola.png',
    length: '4.909 km', firstGP: '1980', laps: '63',
    fastestLap: "1'15.484 \u2014 L. Hamilton (2020)", distance: '309.049 km'
  },
  '08': {
    round: '08', flag: '\u{1F1F2}\u{1F1E8}', country: 'MONACO', gp: 'Grand Prix de Monaco',
    circuit: 'Circuit de Monaco, Monte Carlo', dates: '03/07/2026 \u2014 05/07/2026',
    circuitImg: 'assets/circuits/monaco.png',
    length: '3.337 km', firstGP: '1950', laps: '78',
    fastestLap: "1'12.909 \u2014 L. Hamilton (2021)", distance: '260.286 km'
  },
  '09': {
    round: '09', flag: '\u{1F1EA}\u{1F1F8}', country: 'ESPAGNE', gp: "Grand Prix d'Espagne",
    circuit: 'Circuit de Barcelona-Catalunya', dates: '10/07/2026 \u2014 12/07/2026',
    circuitImg: 'assets/circuits/spain.png',
    length: '4.657 km', firstGP: '1991', laps: '66',
    fastestLap: "1'16.330 \u2014 M. Verstappen (2023)", distance: '307.236 km'
  },
  '10': {
    round: '10', flag: '\u{1F1E8}\u{1F1E6}', country: 'CANADA', gp: 'Grand Prix du Canada',
    circuit: 'Circuit Gilles Villeneuve, Montr\u00e9al', dates: '24/07/2026 \u2014 26/07/2026',
    circuitImg: 'assets/circuits/canada.png',
    length: '4.361 km', firstGP: '1978', laps: '70',
    fastestLap: "1'13.078 \u2014 V. Bottas (2019)", distance: '305.270 km'
  },
  '11': {
    round: '11', flag: '\u{1F1E6}\u{1F1F9}', country: 'AUTRICHE', gp: "Grand Prix d'Autriche",
    circuit: 'Red Bull Ring, Spielberg', dates: '31/07/2026 \u2014 02/08/2026',
    circuitImg: 'assets/circuits/austria.png',
    length: '4.318 km', firstGP: '1970', laps: '71',
    fastestLap: "1'05.619 \u2014 C. Sainz (2020)", distance: '306.452 km'
  },
  '12': {
    round: '12', flag: '\u{1F1EC}\u{1F1E7}', country: 'GRANDE-BRETAGNE', gp: 'Grand Prix de Grande-Bretagne',
    circuit: 'Silverstone Circuit', dates: '07/08/2026 \u2014 09/08/2026',
    circuitImg: 'assets/circuits/silverstone.png',
    length: '5.891 km', firstGP: '1950', laps: '52',
    fastestLap: "1'27.097 \u2014 M. Verstappen (2020)", distance: '306.198 km'
  }
};

/* ===== INIT ===== */
(function () {
  const params = new URLSearchParams(window.location.search);
  const raceId = params.get('r');

  // Redirect if no race param or invalid
  if (!raceId || !RACES[raceId]) {
    window.location.href = 'calendrier.html';
    return;
  }

  const race = RACES[raceId];
  const container = document.getElementById('raceContent');

  // Update page title
  document.title = race.gp + ' - F1 Esport League';

  // Build results rows (top 10 placeholder)
  let resultsRows = '';
  for (let i = 1; i <= 10; i++) {
    resultsRows += `
      <tr>
        <td>${i}</td>
        <td>\u2014</td>
        <td>\u2014</td>
        <td>\u2014</td>
        <td>\u2014</td>
      </tr>`;
  }

  // Inject full page content
  container.innerHTML = `
    <!-- HERO -->
    <section class="race-hero">
      <div class="race-hero-bg">
        <div class="hero-grid"></div>
        <div class="hero-lines">
          <div class="line l1"></div>
          <div class="line l2"></div>
          <div class="line l3"></div>
        </div>
      </div>
      <div class="race-hero-content">
        <div class="race-hero-round">ROUND ${race.round}</div>
        <div class="race-hero-flag">${race.flag}</div>
        <h1 class="race-hero-country">${race.country}</h1>
        <h2 class="race-hero-gp">${race.gp}</h2>
        <p class="race-hero-circuit">${race.circuit}</p>
        <p class="race-hero-dates">${race.dates}</p>
      </div>
    </section>

    <!-- CIRCUIT INFO -->
    <section class="circuit-section">
      <div class="section-container">
        <div class="section-tag">CIRCUIT</div>
        <h2 class="section-title">${race.circuit}</h2>
        <div class="circuit-layout">
          <div class="circuit-img">
            <img src="${race.circuitImg}" alt="Circuit ${race.country}" />
          </div>
          <div class="circuit-stats">
            <div class="circuit-stat-item">
              <span class="stat-label">Longueur du circuit</span>
              <span class="stat-value">${race.length}</span>
            </div>
            <div class="circuit-stat-item">
              <span class="stat-label">Premier Grand Prix</span>
              <span class="stat-value">${race.firstGP}</span>
            </div>
            <div class="circuit-stat-item">
              <span class="stat-label">Nombre de tours</span>
              <span class="stat-value">${race.laps}</span>
            </div>
            <div class="circuit-stat-item">
              <span class="stat-label">Meilleur tour</span>
              <span class="stat-value">${race.fastestLap}</span>
            </div>
            <div class="circuit-stat-item">
              <span class="stat-label">Distance de course</span>
              <span class="stat-value">${race.distance}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RESULTS -->
    <section class="results-section">
      <div class="section-container">
        <div class="section-tag">R\u00c9SULTATS</div>
        <h2 class="section-title">Classement de la course</h2>
        <div class="results-table-wrap">
          <table class="results-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Pilote</th>
                <th>\u00c9curie</th>
                <th>Temps</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              ${resultsRows}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- WHERE TO WATCH -->
    <section class="watch-section">
      <div class="section-container">
        <div class="section-tag">SUIVRE LA COURSE</div>
        <h2 class="section-title">O\u00f9 regarder</h2>
        <div class="watch-grid">
          <a href="#" class="watch-card" target="_blank" rel="noopener">
            <div class="watch-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H7.714V1.714h12.857z"/></svg>
            </div>
            <span class="watch-card-name">Twitch</span>
            <span class="watch-card-desc">Stream en direct</span>
          </a>
          <a href="#" class="watch-card" target="_blank" rel="noopener">
            <div class="watch-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
            </div>
            <span class="watch-card-name">Discord</span>
            <span class="watch-card-desc">Rejoindre le serveur</span>
          </a>
        </div>
      </div>
    </section>

    <!-- HIGHLIGHTS -->
    <section class="highlights-section">
      <div class="section-container">
        <div class="section-tag">TEMPS FORTS</div>
        <h2 class="section-title">Highlights</h2>
        <div class="highlights-placeholder">
          <p>Les temps forts seront disponibles apr\u00e8s la course.</p>
        </div>
      </div>
    </section>
  `;
})();

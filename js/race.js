/* ===== RACE DATA ===== */
const RACES = {
  '01': {
    round: '01', flag: '🇦🇺', country: 'AUSTRALIE', gp: "Grand Prix d'Australie",
    circuit: 'Albert Park, Melbourne', dates: '01/05/2026 — 03/05/2026',
    circuitImg: 'assets/circuits/australie.avif',
    length: '5.278 km', firstGP: '1996', laps: '58',
    fastestLap: "1'19.813 — C. Leclerc (2024)", distance: '306.124 km'
  },
  '02': {
    round: '02', flag: '🇨🇳', country: 'CHINE', gp: 'Grand Prix de Chine',
    circuit: 'Shanghai International Circuit', dates: '08/05/2026 — 10/05/2026',
    circuitImg: 'assets/circuits/chine.avif',
    length: '5.451 km', firstGP: '2004', laps: '56',
    fastestLap: "1'32.238 — M. Schumacher (2004)", distance: '305.066 km'
  },
  '03': {
    round: '03', flag: '🇯🇵', country: 'JAPON', gp: 'Grand Prix du Japon',
    circuit: 'Suzuka International Racing Course', dates: '22/05/2026 — 24/05/2026',
    circuitImg: 'assets/circuits/japon.avif',
    length: '5.807 km', firstGP: '1987', laps: '53',
    fastestLap: "1'30.983 — L. Hamilton (2019)", distance: '307.471 km'
  },
  '04': {
    round: '04', flag: '🇺🇸', country: 'MIAMI', gp: 'Grand Prix de Miami',
    circuit: 'Miami International Autodrome', dates: '29/05/2026 — 31/05/2026',
    circuitImg: 'assets/circuits/miami.avif',
    length: '5.412 km', firstGP: '2022', laps: '57',
    fastestLap: "1'29.708 — M. Verstappen (2023)", distance: '308.326 km'
  },
  '05': {
    round: '05', flag: '🇨🇦', country: 'CANADA', gp: 'Grand Prix du Canada',
    circuit: 'Circuit Gilles Villeneuve, Montréal', dates: '05/06/2026 — 07/06/2026',
    circuitImg: 'assets/circuits/canada.avif',
    length: '4.361 km', firstGP: '1978', laps: '70',
    fastestLap: "1'13.078 — V. Bottas (2019)", distance: '305.270 km'
  },
  '06': {
    round: '06', flag: '🇲🇨', country: 'MONACO', gp: 'Grand Prix de Monaco',
    circuit: 'Circuit de Monaco, Monte Carlo', dates: '12/06/2026 — 14/06/2026',
    circuitImg: 'assets/circuits/monaco.avif',
    length: '3.337 km', firstGP: '1950', laps: '78',
    fastestLap: "1'12.909 — L. Hamilton (2021)", distance: '260.286 km'
  },
  '07': {
    round: '07', flag: '🇪🇸', country: 'BARCELONA-CATALUNYA', gp: 'Grand Prix de Barcelona-Catalunya',
    circuit: 'Circuit de Barcelona-Catalunya', dates: '26/06/2026 — 28/06/2026',
    circuitImg: 'assets/circuits/barcelon.avif',
    length: '4.657 km', firstGP: '1991', laps: '66',
    fastestLap: "1'16.330 — M. Verstappen (2023)", distance: '307.236 km'
  },
  '08': {
    round: '08', flag: '🇦🇹', country: 'AUTRICHE', gp: "Grand Prix d'Autriche",
    circuit: 'Red Bull Ring, Spielberg', dates: '03/07/2026 — 05/07/2026',
    circuitImg: 'assets/circuits/autriche.avif',
    length: '4.318 km', firstGP: '1970', laps: '71',
    fastestLap: "1'05.619 — C. Sainz (2020)", distance: '306.452 km'
  },
  '09': {
    round: '09', flag: '🇬🇧', country: 'GRANDE-BRETAGNE', gp: 'Grand Prix de Grande-Bretagne',
    circuit: 'Silverstone Circuit', dates: '10/07/2026 — 12/07/2026',
    circuitImg: 'assets/circuits/british.avif',
    length: '5.891 km', firstGP: '1950', laps: '52',
    fastestLap: "1'27.097 — M. Verstappen (2020)", distance: '306.198 km'
  },
  '10': {
    round: '10', flag: '🇧🇪', country: 'BELGIQUE', gp: 'Grand Prix de Belgique',
    circuit: 'Circuit de Spa-Francorchamps', dates: '17/07/2026 — 19/07/2026',
    circuitImg: 'assets/circuits/belgique.avif',
    length: '7.004 km', firstGP: '1950', laps: '44',
    fastestLap: "1'46.286 — V. Bottas (2018)", distance: '308.052 km'
  },
  '11': {
    round: '11', flag: '🇭🇺', country: 'HONGRIE', gp: 'Grand Prix de Hongrie',
    circuit: 'Hungaroring, Budapest', dates: '24/07/2026 — 26/07/2026',
    circuitImg: 'assets/circuits/hongrie.avif',
    length: '4.381 km', firstGP: '1986', laps: '70',
    fastestLap: "1'16.627 — L. Hamilton (2020)", distance: '306.630 km'
  },
  '12': {
    round: '12', flag: '🇳🇱', country: 'PAYS-BAS', gp: 'Grand Prix des Pays-Bas',
    circuit: 'Circuit de Zandvoort', dates: '21/08/2026 — 23/08/2026',
    circuitImg: 'assets/circuits/dutch.avif',
    length: '4.259 km', firstGP: '1952', laps: '72',
    fastestLap: "1'11.097 — L. Hamilton (2023)", distance: '306.587 km'
  },
  '13': {
    round: '13', flag: '🇮🇹', country: 'ITALIE', gp: "Grand Prix d'Italie",
    circuit: 'Autodromo Nazionale di Monza', dates: '04/09/2026 — 06/09/2026',
    circuitImg: 'assets/circuits/italian.avif',
    length: '5.793 km', firstGP: '1950', laps: '53',
    fastestLap: "1'21.046 — R. Barrichello (2004)", distance: '306.720 km'
  },
  '14': {
    round: '14', flag: '🇪🇸', country: 'ESPAGNE', gp: "Grand Prix d'Espagne",
    circuit: 'Circuit de Barcelona-Catalunya', dates: '11/09/2026 — 13/09/2026',
    circuitImg: 'assets/circuits/spanish.avif',
    length: '4.657 km', firstGP: '1991', laps: '66',
    fastestLap: "1'16.330 — M. Verstappen (2023)", distance: '307.236 km'
  },
  '15': {
    round: '15', flag: '🇦🇿', country: 'AZERBAÏDJAN', gp: "Grand Prix d'Azerbaïdjan",
    circuit: 'Circuit urbain de Bakou', dates: '24/09/2026 — 26/09/2026',
    circuitImg: 'assets/circuits/azerbidjan.avif',
    length: '6.003 km', firstGP: '2017', laps: '51',
    fastestLap: "1'43.009 — C. Leclerc (2019)", distance: '306.049 km'
  },
  '16': {
    round: '16', flag: '🇸🇬', country: 'SINGAPOUR', gp: 'Grand Prix de Singapour',
    circuit: 'Circuit urbain de Marina Bay', dates: '09/10/2026 — 11/10/2026',
    circuitImg: 'assets/circuits/singapour.avif',
    length: '4.940 km', firstGP: '2008', laps: '62',
    fastestLap: "1'35.867 — L. Hamilton (2023)", distance: '306.143 km'
  },
  '17': {
    round: '17', flag: '🇺🇸', country: 'ÉTATS-UNIS', gp: "Grand Prix des États-Unis",
    circuit: 'Circuit of the Americas, Austin', dates: '23/10/2026 — 25/10/2026',
    circuitImg: 'assets/circuits/etat unis.avif',
    length: '5.513 km', firstGP: '2012', laps: '56',
    fastestLap: "1'36.169 — C. Leclerc (2019)", distance: '308.405 km'
  },
  '18': {
    round: '18', flag: '🇲🇽', country: 'MEXIQUE', gp: 'Grand Prix du Mexique',
    circuit: 'Autódromo Hermanos Rodríguez, Mexico', dates: '30/10/2026 — 01/11/2026',
    circuitImg: 'assets/circuits/mexico.avif',
    length: '4.304 km', firstGP: '1963', laps: '71',
    fastestLap: "1'17.774 — V. Bottas (2021)", distance: '305.354 km'
  },
  '19': {
    round: '19', flag: '🇧🇷', country: 'BRÉSIL', gp: 'Grand Prix de São Paulo',
    circuit: 'Autódromo José Carlos Pace, Interlagos', dates: '06/11/2026 — 08/11/2026',
    circuitImg: 'assets/circuits/sao paulo.avif',
    length: '4.309 km', firstGP: '1973', laps: '71',
    fastestLap: "1'10.540 — V. Bottas (2018)", distance: '305.879 km'
  },
  '20': {
    round: '20', flag: '🇺🇸', country: 'LAS VEGAS', gp: 'Grand Prix de Las Vegas',
    circuit: 'Las Vegas Strip Circuit', dates: '19/11/2026 — 21/11/2026',
    circuitImg: 'assets/circuits/las vegas.avif',
    length: '6.201 km', firstGP: '2023', laps: '50',
    fastestLap: "1'35.490 — O. Piastri (2023)", distance: '310.050 km'
  },
  '21': {
    round: '21', flag: '🇶🇦', country: 'QATAR', gp: 'Grand Prix du Qatar',
    circuit: 'Circuit International de Lusail', dates: '27/11/2026 — 29/11/2026',
    circuitImg: 'assets/circuits/quatar.avif',
    length: '5.380 km', firstGP: '2021', laps: '57',
    fastestLap: "1'24.319 — M. Verstappen (2023)", distance: '306.660 km'
  },
  '22': {
    round: '22', flag: '🇦🇪', country: 'ABU DHABI', gp: "Grand Prix d'Abu Dhabi",
    circuit: 'Circuit de Yas Marina', dates: '04/12/2026 — 06/12/2026',
    circuitImg: 'assets/circuits/abu dhabi.avif',
    length: '5.281 km', firstGP: '2009', laps: '58',
    fastestLap: "1'26.103 — M. Verstappen (2021)", distance: '306.183 km'
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
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
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
        <div class="section-tag">RÉSULTATS</div>
        <h2 class="section-title">Classement de la course</h2>
        <div class="results-table-wrap">
          <table class="results-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Pilote</th>
                <th>Écurie</th>
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
        <h2 class="section-title">Où regarder</h2>
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
          <p>Les temps forts seront disponibles après la course.</p>
        </div>
      </div>
    </section>
  `;
})();

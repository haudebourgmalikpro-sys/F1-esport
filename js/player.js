// ===========================
//  F1 MUSIC PLAYER
// ===========================

(function() {
  // --- PLAYLIST ---
  const PLAYLIST = [
    { title: 'Starboy', artist: 'The Weeknd ft. Daft Punk', src: 'assets/music/The_Weeknd_-_Starboy_ft._Daft_Punk.mp3' },
    { title: 'Around the World', artist: 'Daft Punk', src: 'assets/music/Daft_Punk_-_Around_the_World.mp3' },
    { title: 'Just Keep Watching', artist: 'Tate McRae', src: 'assets/music/Tate_McRae_-_Just_Keep_Watching.mp3' },
    { title: 'Love Me Not', artist: 'Ravyn Lenae', src: 'assets/music/Ravyn_Lenae_-_Love_Me_Not.mp3' },
  ];

  let currentIndex = 0;
  let isOpen = false;
  let toastTimer = null;
  let autoOpenTimer = null;
  let hasStarted = false;

  // --- CREATE AUDIO ---
  const audio = new Audio();
  audio.volume = 0.2;

  // --- INJECT HTML ---
  const playerHTML = `
    <div class="f1-player" id="f1Player">
      <!-- Notification toast -->
      <div class="player-toast" id="playerToast">
        <div class="toast-icon">♫</div>
        <div class="toast-info">
          <div class="toast-label">NOW PLAYING</div>
          <div class="toast-title" id="toastTitle"></div>
          <div class="toast-artist" id="toastArtist"></div>
        </div>
      </div>

      <!-- Mini tab (always visible) -->
      <div class="player-tab" id="playerTab">
        <div class="tab-bars">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>

      <!-- Full player panel -->
      <div class="player-panel" id="playerPanel">
        <div class="player-track-info">
          <div class="player-title" id="playerTitle"></div>
          <div class="player-artist" id="playerArtist"></div>
        </div>

        <div class="player-seek">
          <span class="player-time" id="playerCurrent">0:00</span>
          <input type="range" class="player-seekbar" id="playerSeekbar" min="0" max="100" value="0" />
          <span class="player-time" id="playerDuration">0:00</span>
        </div>

        <div class="player-controls">
          <button class="pc-btn" id="pcPrev" title="Précédent">⏮</button>
          <button class="pc-btn pc-play" id="pcPlay" title="Lecture / Pause">▶</button>
          <button class="pc-btn" id="pcNext" title="Suivant">⏭</button>
        </div>

        <div class="player-volume">
          <span class="vol-icon" id="volIcon">🔊</span>
          <input type="range" class="player-volbar" id="playerVolbar" min="0" max="100" value="20" />
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', playerHTML);

  // --- ELEMENTS ---
  const toast = document.getElementById('playerToast');
  const tab = document.getElementById('playerTab');
  const panel = document.getElementById('playerPanel');
  const toastTitle = document.getElementById('toastTitle');
  const toastArtist = document.getElementById('toastArtist');
  const titleEl = document.getElementById('playerTitle');
  const artistEl = document.getElementById('playerArtist');
  const currentEl = document.getElementById('playerCurrent');
  const durationEl = document.getElementById('playerDuration');
  const seekbar = document.getElementById('playerSeekbar');
  const playBtn = document.getElementById('pcPlay');
  const prevBtn = document.getElementById('pcPrev');
  const nextBtn = document.getElementById('pcNext');
  const volbar = document.getElementById('playerVolbar');
  const volIcon = document.getElementById('volIcon');

  // --- FORMAT TIME ---
  function formatTime(s) {
    if (isNaN(s) || !isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + String(sec).padStart(2, '0');
  }

  // --- OPEN PANEL BRIEFLY (for auto track change) ---
  function flashPanel() {
    // Show toast
    if (toastTimer) clearTimeout(toastTimer);
    toast.classList.add('show');

    // Also open the panel
    if (!isOpen) {
      isOpen = true;
      panel.classList.add('open');
      tab.classList.add('active');
    }

    // Close both after 3s
    if (autoOpenTimer) clearTimeout(autoOpenTimer);
    autoOpenTimer = setTimeout(() => {
      toast.classList.remove('show');
      // Close panel only if user didn't interact
      isOpen = false;
      panel.classList.remove('open');
      tab.classList.remove('active');
    }, 3000);
  }

  // --- LOAD TRACK ---
  function loadTrack(index, autoplay, isAutoChange) {
    currentIndex = index;
    const track = PLAYLIST[currentIndex];
    audio.src = track.src;
    titleEl.textContent = track.title;
    artistEl.textContent = track.artist;
    toastTitle.textContent = track.title;
    toastArtist.textContent = track.artist;
    seekbar.value = 0;
    currentEl.textContent = '0:00';
    durationEl.textContent = '0:00';

    if (autoplay) {
      audio.play().then(() => {
        playBtn.textContent = '⏸';
        tab.classList.add('playing');
        // If auto track change (ended -> next), flash the panel open
        if (isAutoChange) {
          flashPanel();
        }
      }).catch(() => {
        playBtn.textContent = '▶';
        tab.classList.remove('playing');
      });
    }
  }

  // --- FORCE AUTOPLAY on first user interaction ---
  function forcePlay() {
    if (hasStarted) return;
    hasStarted = true;
    audio.play().then(() => {
      playBtn.textContent = '⏸';
      tab.classList.add('playing');
      // Show toast on first real play
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }).catch(() => {});
    // Remove listeners once started
    document.removeEventListener('click', forcePlay);
    document.removeEventListener('keydown', forcePlay);
    document.removeEventListener('scroll', forcePlay);
    document.removeEventListener('touchstart', forcePlay);
  }

  // --- TOGGLE PANEL ---
  tab.addEventListener('click', (e) => {
    // Cancel any auto-close timer if user clicks
    if (autoOpenTimer) { clearTimeout(autoOpenTimer); autoOpenTimer = null; }
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    tab.classList.toggle('active', isOpen);
  });

  // --- PLAY / PAUSE ---
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(() => {
        playBtn.textContent = '⏸';
        tab.classList.add('playing');
      });
    } else {
      audio.pause();
      playBtn.textContent = '▶';
      tab.classList.remove('playing');
    }
  });

  // --- PREV / NEXT ---
  prevBtn.addEventListener('click', () => {
    if (autoOpenTimer) { clearTimeout(autoOpenTimer); autoOpenTimer = null; }
    const idx = (currentIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
    loadTrack(idx, true, false);
  });

  nextBtn.addEventListener('click', () => {
    if (autoOpenTimer) { clearTimeout(autoOpenTimer); autoOpenTimer = null; }
    const idx = (currentIndex + 1) % PLAYLIST.length;
    loadTrack(idx, true, false);
  });

  // --- SEEKBAR ---
  let isSeeking = false;
  seekbar.addEventListener('input', () => {
    isSeeking = true;
    const time = (seekbar.value / 100) * audio.duration;
    currentEl.textContent = formatTime(time);
  });
  seekbar.addEventListener('change', () => {
    const time = (seekbar.value / 100) * audio.duration;
    audio.currentTime = time;
    isSeeking = false;
  });

  // --- TIME UPDATE ---
  audio.addEventListener('timeupdate', () => {
    if (!isSeeking && audio.duration) {
      seekbar.value = (audio.currentTime / audio.duration) * 100;
      currentEl.textContent = formatTime(audio.currentTime);
    }
  });

  audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
  });

  // --- AUTO NEXT (track ended) ---
  audio.addEventListener('ended', () => {
    const idx = (currentIndex + 1) % PLAYLIST.length;
    loadTrack(idx, true, true); // isAutoChange = true → flash panel
  });

  // --- VOLUME ---
  volbar.addEventListener('input', () => {
    audio.volume = volbar.value / 100;
    updateVolIcon();
  });

  function updateVolIcon() {
    const v = audio.volume;
    if (v === 0) volIcon.textContent = '🔇';
    else if (v < 0.4) volIcon.textContent = '🔉';
    else volIcon.textContent = '🔊';
  }

  volIcon.addEventListener('click', () => {
    if (audio.volume > 0) {
      audio._prevVol = audio.volume;
      audio.volume = 0;
      volbar.value = 0;
    } else {
      audio.volume = audio._prevVol || 0.2;
      volbar.value = audio.volume * 100;
    }
    updateVolIcon();
  });

  // --- INIT ---
  // Load first track and attempt autoplay immediately
  loadTrack(0, true, false);

  // If browser blocks autoplay, start on first user interaction
  audio.play().then(() => {
    hasStarted = true;
    playBtn.textContent = '⏸';
    tab.classList.add('playing');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }).catch(() => {
    // Autoplay blocked — listen for any user interaction to start
    document.addEventListener('click', forcePlay, { once: false });
    document.addEventListener('keydown', forcePlay, { once: false });
    document.addEventListener('scroll', forcePlay, { once: false });
    document.addEventListener('touchstart', forcePlay, { once: false });
  });

})();

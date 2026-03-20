// ===========================
//  DONNÉES DES ÉCURIES
// ===========================

const TEAMS = [

  // ===== 1 — MAKOUTCHE =====
  {
    id: 1,
    name: "MAKOUTCHE",
    shortName: "MAK",
    logo: "assets/logos/makoutche.png",
    color: "#E85DA0",
    colorBg: "#120008",
    setup: { downforce: 65, brakeWear: 55, tyreWear: 70 },
    telemetry: {
      fuelEffect: "0.19", fuelEffectUnit: "SEC/10KG",
      fuelConsumption: "1.52", fuelConsumptionUnit: "KG/LAP",
      fullThrottle: "72", fullThrottleUnit: "% OF LAP"
    },
    drivers: [
      {
        name: "DOMA", abbr: "DOM", number: 1, photo: "assets/pilotes/doma.png",
        starts: 0, points: 0, avgPoints: 0, positionsGained: 0,
        fastestQualifying: "NONE", fastestQualifyingYear: "NONE",
        fastestLap: "NONE", fastestLapYear: "NONE",
        avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0,
        lastSeasonGrid: 0, lastSeasonRace: 0
      },
      {
        name: "NONE", abbr: "TBA", number: 2,
        starts: 0, points: 0, avgPoints: 0, positionsGained: 0,
        fastestQualifying: "NONE", fastestQualifyingYear: "NONE",
        fastestLap: "NONE", fastestLapYear: "NONE",
        avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0,
        lastSeasonGrid: 0, lastSeasonRace: 0
      }
    ],
    teamStats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, totalPoints: 0 }
  },

  // ===== 2 — OLAMBS =====
  {
    id: 2,
    name: "OLAMBS",
    shortName: "OLA",
    logo: "assets/logos/olambs.png",
    color: "#C43030",
    colorBg: "#0e0000",
    setup: { downforce: 50, brakeWear: 60, tyreWear: 45 },
    telemetry: {
      fuelEffect: "0.21", fuelEffectUnit: "SEC/10KG",
      fuelConsumption: "1.58", fuelConsumptionUnit: "KG/LAP",
      fullThrottle: "70", fullThrottleUnit: "% OF LAP"
    },
    drivers: [
      {
        name: "TISKEUR", abbr: "TIS", number: 3, photo: "assets/pilotes/tiskeur.png",
        starts: 0, points: 0, avgPoints: 0, positionsGained: 0,
        fastestQualifying: "NONE", fastestQualifyingYear: "NONE",
        fastestLap: "NONE", fastestLapYear: "NONE",
        avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0,
        lastSeasonGrid: 0, lastSeasonRace: 0
      },
      {
        name: "NONE", abbr: "TBA", number: 4,
        starts: 0, points: 0, avgPoints: 0, positionsGained: 0,
        fastestQualifying: "NONE", fastestQualifyingYear: "NONE",
        fastestLap: "NONE", fastestLapYear: "NONE",
        avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0,
        lastSeasonGrid: 0, lastSeasonRace: 0
      }
    ],
    teamStats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, totalPoints: 0 }
  },

  // ===== 3 — GIGIPRIME =====
  {
    id: 3,
    name: "GIGIPRIME",
    shortName: "GGP",
    logo: "assets/logos/gigiprime.png",
    color: "#E87B20",
    colorBg: "#100500",
    setup: { downforce: 40, brakeWear: 80, tyreWear: 60 },
    telemetry: {
      fuelEffect: "0.18", fuelEffectUnit: "SEC/10KG",
      fuelConsumption: "1.46", fuelConsumptionUnit: "KG/LAP",
      fullThrottle: "77", fullThrottleUnit: "% OF LAP"
    },
    drivers: [
      {
        name: "YEEET", abbr: "YEE", number: 5, photo: "assets/pilotes/yeeet.png",
        starts: 0, points: 0, avgPoints: 0, positionsGained: 0,
        fastestQualifying: "NONE", fastestQualifyingYear: "NONE",
        fastestLap: "NONE", fastestLapYear: "NONE",
        avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0,
        lastSeasonGrid: 0, lastSeasonRace: 0
      },
      {
        name: "NONE", abbr: "TBA", number: 6,
        starts: 0, points: 0, avgPoints: 0, positionsGained: 0,
        fastestQualifying: "NONE", fastestQualifyingYear: "NONE",
        fastestLap: "NONE", fastestLapYear: "NONE",
        avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0,
        lastSeasonGrid: 0, lastSeasonRace: 0
      }
    ],
    teamStats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, totalPoints: 0 }
  },

  // ===== 4 — BMW =====
  {
    id: 4,
    name: "BMW",
    shortName: "BMW",
    logo: "assets/logos/bmw.png",
    color: "#D4243B",
    colorBg: "#100003",
    setup: { downforce: 55, brakeWear: 45, tyreWear: 50 },
    telemetry: {
      fuelEffect: "0.20", fuelEffectUnit: "SEC/10KG",
      fuelConsumption: "1.55", fuelConsumptionUnit: "KG/LAP",
      fullThrottle: "74", fullThrottleUnit: "% OF LAP"
    },
    drivers: [
      {
        name: "VS-KF ONLY", abbr: "VSK", number: 7, photo: "assets/pilotes/vs-kf-only.png",
        starts: 0, points: 0, avgPoints: 0, positionsGained: 0,
        fastestQualifying: "NONE", fastestQualifyingYear: "NONE",
        fastestLap: "NONE", fastestLapYear: "NONE",
        avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0,
        lastSeasonGrid: 0, lastSeasonRace: 0
      },
      {
        name: "NONE", abbr: "TBA", number: 8,
        starts: 0, points: 0, avgPoints: 0, positionsGained: 0,
        fastestQualifying: "NONE", fastestQualifyingYear: "NONE",
        fastestLap: "NONE", fastestLapYear: "NONE",
        avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0,
        lastSeasonGrid: 0, lastSeasonRace: 0
      }
    ],
    teamStats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, totalPoints: 0 }
  },

  // ===== 5 — BIGFARMA =====
  {
    id: 5,
    name: "BIGFARMA",
    shortName: "BFM",
    logo: "assets/logos/bigfarma.png",
    color: "#30B860",
    colorBg: "#001208",
    setup: { downforce: 70, brakeWear: 35, tyreWear: 55 },
    telemetry: {
      fuelEffect: "0.22", fuelEffectUnit: "SEC/10KG",
      fuelConsumption: "1.60", fuelConsumptionUnit: "KG/LAP",
      fullThrottle: "68", fullThrottleUnit: "% OF LAP"
    },
    drivers: [
      {
        name: "MILKA", abbr: "MLK", number: 9, photo: "assets/pilotes/milka.png",
        starts: 0, points: 0, avgPoints: 0, positionsGained: 0,
        fastestQualifying: "NONE", fastestQualifyingYear: "NONE",
        fastestLap: "NONE", fastestLapYear: "NONE",
        avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0,
        lastSeasonGrid: 0, lastSeasonRace: 0
      },
      {
        name: "NONE", abbr: "TBA", number: 10,
        starts: 0, points: 0, avgPoints: 0, positionsGained: 0,
        fastestQualifying: "NONE", fastestQualifyingYear: "NONE",
        fastestLap: "NONE", fastestLapYear: "NONE",
        avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0,
        lastSeasonGrid: 0, lastSeasonRace: 0
      }
    ],
    teamStats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, totalPoints: 0 }
  },

  // ===== 6 à 11 — À DÉFINIR =====
  { id: 6, name: "NONE", shortName: "NONE", color: "#8890A0", colorBg: "#0e0e12",
    setup: { downforce: 50, brakeWear: 50, tyreWear: 50 },
    telemetry: { fuelEffect: "0.20", fuelEffectUnit: "SEC/10KG", fuelConsumption: "1.55", fuelConsumptionUnit: "KG/LAP", fullThrottle: "72", fullThrottleUnit: "% OF LAP" },
    drivers: [
      { name: "NONE", abbr: "TBA", number: 11, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 },
      { name: "NONE", abbr: "TBA", number: 12, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 }
    ],
    teamStats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, totalPoints: 0 }
  },
  { id: 7, name: "NONE", shortName: "NONE", color: "#8890A0", colorBg: "#0e0e12",
    setup: { downforce: 50, brakeWear: 50, tyreWear: 50 },
    telemetry: { fuelEffect: "0.20", fuelEffectUnit: "SEC/10KG", fuelConsumption: "1.55", fuelConsumptionUnit: "KG/LAP", fullThrottle: "72", fullThrottleUnit: "% OF LAP" },
    drivers: [
      { name: "NONE", abbr: "TBA", number: 13, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 },
      { name: "NONE", abbr: "TBA", number: 14, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 }
    ],
    teamStats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, totalPoints: 0 }
  },
  { id: 8, name: "NONE", shortName: "NONE", color: "#8890A0", colorBg: "#0e0e12",
    setup: { downforce: 50, brakeWear: 50, tyreWear: 50 },
    telemetry: { fuelEffect: "0.20", fuelEffectUnit: "SEC/10KG", fuelConsumption: "1.55", fuelConsumptionUnit: "KG/LAP", fullThrottle: "72", fullThrottleUnit: "% OF LAP" },
    drivers: [
      { name: "NONE", abbr: "TBA", number: 15, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 },
      { name: "NONE", abbr: "TBA", number: 16, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 }
    ],
    teamStats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, totalPoints: 0 }
  },
  { id: 9, name: "NONE", shortName: "NONE", color: "#8890A0", colorBg: "#0e0e12",
    setup: { downforce: 50, brakeWear: 50, tyreWear: 50 },
    telemetry: { fuelEffect: "0.20", fuelEffectUnit: "SEC/10KG", fuelConsumption: "1.55", fuelConsumptionUnit: "KG/LAP", fullThrottle: "72", fullThrottleUnit: "% OF LAP" },
    drivers: [
      { name: "NONE", abbr: "TBA", number: 17, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 },
      { name: "NONE", abbr: "TBA", number: 18, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 }
    ],
    teamStats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, totalPoints: 0 }
  },
  { id: 10, name: "NONE", shortName: "NONE", color: "#8890A0", colorBg: "#0e0e12",
    setup: { downforce: 50, brakeWear: 50, tyreWear: 50 },
    telemetry: { fuelEffect: "0.20", fuelEffectUnit: "SEC/10KG", fuelConsumption: "1.55", fuelConsumptionUnit: "KG/LAP", fullThrottle: "72", fullThrottleUnit: "% OF LAP" },
    drivers: [
      { name: "NONE", abbr: "TBA", number: 19, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 },
      { name: "NONE", abbr: "TBA", number: 20, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 }
    ],
    teamStats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, totalPoints: 0 }
  },
  { id: 11, name: "NONE", shortName: "NONE", color: "#8890A0", colorBg: "#0e0e12",
    setup: { downforce: 50, brakeWear: 50, tyreWear: 50 },
    telemetry: { fuelEffect: "0.20", fuelEffectUnit: "SEC/10KG", fuelConsumption: "1.55", fuelConsumptionUnit: "KG/LAP", fullThrottle: "72", fullThrottleUnit: "% OF LAP" },
    drivers: [
      { name: "NONE", abbr: "TBA", number: 21, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 },
      { name: "NONE", abbr: "TBA", number: 22, starts: 0, points: 0, avgPoints: 0, positionsGained: 0, fastestQualifying: "NONE", fastestQualifyingYear: "NONE", fastestLap: "NONE", fastestLapYear: "NONE", avgQualifying: 0, avgFinish: 0, racedLaps: 0, racedKm: 0, lastSeasonGrid: 0, lastSeasonRace: 0 }
    ],
    teamStats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, totalPoints: 0 }
  }

];

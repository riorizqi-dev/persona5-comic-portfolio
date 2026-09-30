/* =====================================================================
   MODEL — the data and state of the app. Never touches the DOM.
   Edit your content here: featured projects, skills, image overrides.
   ===================================================================== */

const Model = {

  githubUser: "riorizqi-dev",

  // Where the contact form delivers (via formsubmit.co relay)
  contactEmail: "riorizqi918@gmail.com",

  // App state (read/written by the Controller, displayed by the View)
  state: {
    screen: "home",        // which screen is showing
    menuIndex: 0,          // selected item on the home menu
    reposLoaded: false,
    skillsBuilt: false,
  },

  // ---- Featured projects (Projek otentik Rio Rizqi Saputra dari GitHub) ----
  featured: [
    {
      title: "Ryuuka-Store: Premium Subscriptions Hub",
      tag: "Full-Stack Web", color: "#38bdf8", live: true,
      url: "https://github.com/riorizqi-dev/Ryuuka-Store", cta: "Lihat di GitHub →",
      img: "assets/projects/ryuuka-store.png",
      desc: "Platform manajemen & penjualan langganan aplikasi premium modern. Dilengkapi katalog produk otomatis, pengelolaan lisensi, integrasi pembayaran manual & transaksi cepat via WhatsApp.",
    },
    {
      title: "RuangLepas: Katarsis & Curhat Anonim",
      tag: "Live Production", color: "#ff1b44", live: true,
      url: "https://ruanglepas.ryuuka.web.id/", cta: "Kunjungi Website →",
      img: "assets/projects/ruanglepas.png",
      desc: "Aplikasi web interaktif katarsis & curahan hati 100% anonim. Memberikan ruang aman bagi siapapun untuk meluapkan unek-unek tanpa stigma sosial dengan interface tenang & bebas distraksi.",
    },
    {
      title: "TaskTrack: Native Android Task Engine",
      tag: "Android Kotlin", color: "#a855f7",
      url: "https://github.com/riorizqi-dev/TaskTrack", cta: "Lihat di GitHub →",
      img: "assets/projects/tasktrack.png",
      desc: "Aplikasi Android native manajemen tugas harian yang cepat dan ringan. Dibangun dengan arsitektur Kotlin modern, SQLite/Room persistence, notifikasi terjadwal, dan UI responsif.",
    },
    {
      title: "StudentToolsHub: 15-in-1 Productivity Hub",
      tag: "TypeScript Suite", color: "#10b981", live: true,
      url: "https://github.com/riorizqi-dev/studenttoolshub", cta: "Lihat di GitHub →",
      img: "assets/projects/studenttools.png",
      desc: "Suite produktivitas lengkap berisi 15 tools terintegrasi untuk pelajar & mahasiswa Indonesia: kalkulator IPK, konverter sitasi, perangkum materi, dan pelacak deadline dalam satu interface terpadu.",
    },
    {
      title: "VANTOR: Cinematic Luxury Watch Brand",
      tag: "Next.js 15 & GSAP", color: "#ffd000", live: true,
      url: "https://github.com/riorizqi-dev/vantor", cta: "Lihat di GitHub →",
      img: "assets/projects/vantor.png",
      desc: "Cinematic landing page brand jam tangan mewah premium. Menggunakan Next.js 15, GSAP scroll-triggered animations, Framer Motion, dan estetika luxury editorial dengan performa visual 60fps.",
    },
    {
      title: "GhostMode: Android Background Service",
      tag: "Foreground Service", color: "#64748b",
      url: "https://github.com/riorizqi-dev/GhostMode", cta: "Lihat di GitHub →",
      img: "assets/projects/ghostmode.png",
      desc: "Aplikasi utilitas Android Kotlin tingkat lanjut yang memanfaatkan Foreground Service persistensi tinggi, manajemen wake-lock hemat daya, dan background event telemetry.",
    },
  ],

  // Repos already shown in "featured" get hidden from the GitHub feed
  featuredRepoNames: [
    "Ryuuka-Store",
    "ruang-lepas",
    "TaskTrack",
    "studenttoolshub",
    "vantor",
    "GhostMode",
  ],

  // Shown if the GitHub API can't be reached
  fallbackRepos: [
    {
      name: "rfm-market", language: "HTML", stargazers_count: 0,
      html_url: "https://github.com/riorizqi-dev/rfm-market",
      description: "RFM Market - Global stocks & crypto exchange dashboard UI modern dengan Tailwind CSS.",
    },
    {
      name: "kantinku", language: "TypeScript", stargazers_count: 0,
      html_url: "https://github.com/riorizqi-dev/kantinku",
      description: "Sistem pemesanan kantin sekolah digital dengan otorisasi multi-role, pelacakan stok real-time, dan komisi merchant.",
    },
    {
      name: "devspin", language: "TypeScript", stargazers_count: 0,
      html_url: "https://github.com/riorizqi-dev/devspin",
      description: "DevSpin - Generator ide project programmer interaktif dengan animasi gaya CS:GO case opening roulette!",
    },
    {
      name: "wavo", language: "TypeScript", stargazers_count: 0,
      html_url: "https://github.com/riorizqi-dev/wavo",
      description: "Wavo - Demo music streaming player interaktif dibangun dengan Next.js 16, Framer Motion, dan Zustand state management.",
    },
    {
      name: "cardflip", language: "TypeScript", stargazers_count: 0,
      html_url: "https://github.com/riorizqi-dev/cardflip",
      description: "Game memory matching kartu bertema tech logo dengan Next.js 16 + Tailwind v4 + Framer Motion.",
    },
    {
      name: "pushbattle", language: "JavaScript", stargazers_count: 0,
      html_url: "https://github.com/riorizqi-dev/pushbattle",
      description: "Prototype MVP battle push-up 1v1 real-time berbasis kamera web dan MediaPipe Pose tracking di browser.",
    },
    {
      name: "cafe-yo", language: "C#", stargazers_count: 0,
      html_url: "https://github.com/riorizqi-dev/cafe-yo",
      description: "Professional Cafe Management System dibangun dengan arsitektur ASP.NET Core MVC enterprise.",
    },
  ],

  // Optional thumbnail overrides: repo name → image path.
  projectImages: {},

  langColors: {
    TypeScript: "#3178c6", JavaScript: "#f1e05a", Kotlin: "#7f52ff",
    PHP: "#4F5D95", "C#": "#178600", HTML: "#e34c26", CSS: "#663399",
    Python: "#3572A5", "Jupyter Notebook": "#DA5B0B",
  },

  // ---- Skills screen ----
  skills: [
    { group: "Rio: Core Engineering & Architecture", items: [
      ["Android Native (Kotlin · Foreground Services · Room)", 93],
      ["Next.js 15/16 · React 19 · TypeScript", 94],
      ["Tailwind CSS v4 · Framer Motion · GSAP", 92],
      ["State Management (Zustand · React Query · Redux)", 90],
      ["Backend & API (Node.js · ASP.NET Core · Laravel PHP)", 86],
      ["Database Design (PostgreSQL · MySQL · SQLite)", 85],
    ]},
    { group: "Antigravity: The AI Cyber Tactician", items: [
      ["Autonomous Multi-File Agentic Orchestration", 99],
      ["AST-Level Precision Refactoring (Zero Regressions)", 97],
      ["Apple Liquid Glass & Hardware-Accelerated Shaders", 96],
      ["Multi-Domain Security & Code Quality Auditing", 94],
      ["60fps GPU Compositing & Web Performance Optimization", 95],
      ["Automated Failure Diagnosis & Fix Verification", 96],
    ]},
    { group: "Tools, Workflow & Ecosystem", items: [
      ["Git Ops & Conventional Commit Discipline", 95],
      ["MediaPipe ML Vision / Pose Detection in Browser", 87],
      ["UI/UX Design Systems & Micro-Interactions", 92],
      ["RESTful Architecture & Webhook Handlers", 90],
      ["Vite · Turbo · Webpack Build Systems", 89],
      ["Docker Containerization & Dev Environments", 82],
    ]},
    { group: "Human-AI Synergy & Communication", items: [
      ["Bahasa Indonesia (Native)", 100],
      ["English (Technical & Professional)", 90],
      ["Human-Agent Synchronous Pair Programming", 98],
    ]},
  ],

  // ---- Data fetching ----
  async fetchRepos() {
    const skip = new Set(this.featuredRepoNames);
    try {
      const res = await fetch(
        `https://api.github.com/users/${this.githubUser}/repos?per_page=100&sort=updated`
      );
      if (!res.ok) throw new Error(res.status);
      const repos = (await res.json()).filter(r => !r.fork && !skip.has(r.name));
      return { repos, live: true };
    } catch {
      return { repos: this.fallbackRepos.filter(r => !skip.has(r.name)), live: false };
    }
  },
};

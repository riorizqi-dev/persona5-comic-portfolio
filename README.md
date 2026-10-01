# Persona-Style Comic Portfolio — Rio Rizqi Saputra

An interactive personal portfolio for Rio Rizqi Saputra ([@riorizqi-dev](https://github.com/riorizqi-dev)). It's styled like the Persona 5 menus and uses Spider-Man comic action panels. The color palette is Deep Navy, Electric Blue and Cyan.

## Live Demo
- **Vercel (Primary)**: [https://persona5-style-portfolio.vercel.app](https://persona5-style-portfolio.vercel.app)
- **GitHub Pages**: [https://riorizqi-dev.github.io/persona5-comic-portfolio](https://riorizqi-dev.github.io/persona5-comic-portfolio)

## Tech Stack

Plain HTML5, CSS3 and JavaScript. There's no framework and no build step. The code follows a Model–View–Controller split:

```
├── index.html            View skeleton (markup only)
├── css/
│   └── style.css         All styling (theme colors in :root)
├── js/
│   ├── model.js          Data and state: featured projects, skills, GitHub repo fetch
│   ├── view.js           DOM rendering, ransom lettering, screen wipe, cursor, sound
│   └── controller.js     Keyboard/mouse input, navigation, contact form
└── assets/               Menu backgrounds, project thumbnails, cursors, sound effects
```

The Projects screen also loads public repos from the GitHub API for `riorizqi-dev`. If the API can't be reached, it shows a built-in fallback list. The contact form sends messages through formsubmit.co, with a mailto link as a fallback.

## Featured Projects

- **Ryuuka-Store**: a platform for managing and selling premium app subscriptions
- **RuangLepas**: a web app for posting anonymous vents ([live](https://ruanglepas.ryuuka.web.id/))
- **TaskTrack**: a native Android task manager built with Kotlin
- **StudentToolsHub**: a set of 15 productivity tools for students, written in TypeScript
- **VANTOR**: a cinematic landing page for a luxury watch brand (Next.js 15 + GSAP)
- **GhostMode**: an Android utility built on a Kotlin foreground service

## Run Locally

```
python3 -m http.server
```

Then open http://localhost:8000. You can also open `index.html` directly, but under `file://` most browsers block the audio fetch and the GitHub API call. A static server is recommended.

## Controls

↑ / ↓ select · Enter confirm · Esc back · click the name to go home

## Credits

- Based on the open-source template **[persona5-style-portfolio](https://github.com/m-m-rahman/persona5-style-portfolio)** by [Meraj Rahman (@m-m-rahman)](https://github.com/m-m-rahman). It provides the base layout and the interactive engine.
- Adapted and customized by **Rio Rizqi Saputra ([@riorizqi-dev](https://github.com/riorizqi-dev))** with help from Antigravity AI (Google DeepMind).

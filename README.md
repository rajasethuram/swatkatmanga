# 📚 SwatkatManga

A manga reader Progressive Web App (PWA) that works on any phone or PC — install it directly from your browser, no app store needed.

![Version](https://img.shields.io/badge/version-4.0.0-purple)
![PWA](https://img.shields.io/badge/PWA-ready-green)
![Sources](https://img.shields.io/badge/sources-490%2B-blue)

---

## ✨ Features

- 📱 **Installable PWA** — works like a native app on Android & iPhone
- 🔍 **490+ manga sources** — from the Keiyoushi/Tachiyomi extension index
- ✅ **MangaDex & ComicK** — work instantly, no setup needed
- ⚡ **490+ more sources** — unlock with a free proxy server (Railway)
- 📖 **Full manga reader** — vertical scroll, chapter navigation, page counter
- 🔖 **Library** — save your favourite manga
- 🕐 **History** — track what you've read
- ☀️ **Wake lock** — screen stays on while reading
- 🌙 **Dark theme** — easy on the eyes

---

## 🚀 Quick Start

### Open in browser (works immediately)
```
https://YOUR-USERNAME.github.io/swatkatmanga
```

### Install as App (Android)
1. Open the link in **Chrome**
2. Tap the **Install SwatkatManga** banner
3. App icon appears on home screen ✅

### Install as App (iPhone)
1. Open the link in **Safari**
2. Tap the **Share** button (box with arrow icon)
3. Tap **Add to Home Screen**
4. Tap **Add** ✅

---

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | The main app — entire manga reader |
| `sw.js` | Service Worker — enables offline + PWA install |
| `manifest.json` | PWA manifest — app name, icon, theme color |
| `README.md` | This file |

---

## 🔌 Unlock All 490+ Sources (Optional)

MangaDex and ComicK work without any setup.  
For MangaFire, Asura Scans, ReaperScans, Bato.to and 490+ more:

### Step 1 — Deploy proxy server to Railway (free)

1. Create a new GitHub repo
2. Upload `server.js` and `package.json` (from the server package)
3. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub**
4. Select your repo → Railway auto-deploys
5. Go to **Settings** → **Domains** → **Generate Domain**
6. Copy your URL:
   ```
   https://swatkat-proxy.up.railway.app
   ```

### Step 2 — Connect in the app

1. Open SwatkatManga → **Browse** tab
2. Tap **Setup** in the server bar
3. Enter your Railway URL
4. Tap **Connect**
5. All 490+ sources unlock instantly ✅

---

## 🛠️ Local Development

If you want to run this locally on your computer:

```bash
# No build tools needed!
# Just open index.html in any browser

# For PWA features (service worker needs HTTPS or localhost)
# Use a simple local server:
npx serve .
# Then open http://localhost:3000
```

---

## 📱 How It Works

```
User opens swatkatmanga (GitHub Pages)
            ↓
MangaDex API → search, chapters, pages (direct, no server)
ComicK API  → search, chapters, pages (direct, no server)
            ↓
Optional: Proxy Server (Railway)
            ↓ bypasses CORS + Cloudflare
MangaFire, Asura, ReaperScans, Bato.to + 490 more sites
```

---

## 🌐 Sources

Sources are loaded from the [Keiyoushi extensions index](https://github.com/keiyoushi/extensions) — the same source list used by Mihon (Tachiyomi) Android app.

| Source | Works Without Server | Works With Server |
|--------|---------------------|------------------|
| MangaDex | ✅ Yes | ✅ Yes |
| ComicK | ✅ Yes | ✅ Yes |
| MangaFire | ❌ No | ✅ Yes |
| Asura Scans | ❌ No | ✅ Yes |
| ReaperScans | ❌ No | ✅ Yes |
| Bato.to | ❌ No | ✅ Yes |
| 485 more... | ❌ No | ✅ Yes |

---

## 💡 Why Some Sources Need a Server

Manga sites like MangaFire and Asura block direct browser requests (called **CORS restriction**). The proxy server fetches these sites on your behalf and returns the data — exactly how the Mihon Android app works internally.

---

## 🆓 Hosting Costs

| Service | Cost | What it's used for |
|---------|------|-------------------|
| GitHub Pages | Free forever | Hosts the app HTML |
| Railway | Free ($5 credit/month) | Runs the proxy server |
| **Total** | **$0** | For personal use |

---

## 📝 Changelog

### v4.0.0
- PWA support — installable on any phone
- Service Worker for offline use
- Wake lock support
- Android back button handling
- Chapter prev/next navigation in reader
- Redesigned dark UI with noise texture

### v3.0.0
- Fixed CORS errors — only MangaDex used for direct search
- Added ComicK direct API support
- Clear error messages instead of silent failures

### v2.0.0
- Added proxy server support
- Puppeteer Cloudflare bypass
- Rate limiting and request queue
- Smart caching system

---

## 🤝 Credits

- [MangaDex API](https://api.mangadex.org) — public manga API
- [ComicK API](https://api.comick.fun) — public manga API  
- [Keiyoushi Extensions](https://github.com/keiyoushi/extensions) — source list
- Built for Raja 💜

---

## ⚠️ Disclaimer

This app is for personal use only. All manga content belongs to their respective authors and publishers. Please support the official releases.

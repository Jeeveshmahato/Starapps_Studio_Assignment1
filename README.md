
## 🔧 What It Does
This Chrome extension automatically detects if a website is built using Shopify and displays a banner on Shopify-powered sites.

## 🚀 How to Install
1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked**.
5. Select the `shopify-detector/` folder.

## ✅ How It Works
- Runs on every website you visit.
- Checks for `window.Shopify` or `cdn.shopify.com`.
- Displays a green banner saying “✅ Built with Shopify” if detected.

## 🖼️ Bonus Feature (Optional)
Add logic to `background.js` and switch the extension icon dynamically via `chrome.action.setIcon` (can be implemented if required).

(function () {
  function isShopifySite() {
    return !!window.Shopify || document.documentElement.innerHTML.includes("cdn.shopify.com");
  }

  function insertBanner() {
    const banner = document.createElement('div');
    banner.textContent = "✅ Built with Shopify";
    banner.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      background: #95bf47;
      color: white;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      z-index: 9999;
      font-family: sans-serif;
    `;
    document.body.prepend(banner);
  }

  if (isShopifySite()) {
    insertBanner();
    chrome.runtime?.sendMessage?.({ shopify: true });
  } else {
    chrome.runtime?.sendMessage?.({ shopify: false });
  }
})();

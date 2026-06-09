// Initialize medium zoom.
$(document).ready(function () {
  // 1. 网页初始加载时的判断
  var initialMargin = window.innerWidth < 768 ? 0 : 150;

  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for transparency.
    margin: initialMargin,
  });

  window.addEventListener('resize', function() {
    var dynamicMargin = window.innerWidth < 768 ? 0 : 150;
    // 实时更新 medium_zoom 的配置
    medium_zoom.update({ margin: dynamicMargin });
  });
});
// Legacy.Hockey Mobile Game Page Fix - JavaScript version
(function() {
  // Create style element
  var style = document.createElement('style');
  style.type = 'text/css';
  
  // CSS code
  var css = `
    @media screen and (max-width: 768px) {
      /* Override any absolute/fixed positioning on the game info bar */
      body ul.game_info_bar_v2 {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        transform: none !important;
        margin-top: 20px !important;
        margin-bottom: 0px !important;
        padding-top: 15px !important;
        float: none !important;
        clear: both !important;
      }
      
      /* Ensure list items display properly */
      body ul.game_info_bar_v2 li {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        transform: none !important;
        float: none !important;
        clear: both !important;
      }
      
      /* Date formatting */
      body ul.game_info_bar_v2 li.date {
        display: list-item !important;
        margin-bottom: 8px !important;
      }
      
      /* Location formatting - allow wrapping */
      body ul.game_info_bar_v2 li.location {
        display: list-item !important;
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
        white-space: normal !important;
        max-width: 100% !important;
        line-height: 1.4 !important;
        margin-bottom: 8px !important;
      }
      
      body ul.game_info_bar_v2 li.location a {
        word-wrap: break-word !important;
        white-space: normal !important;
      }
      
      /* Status/time formatting */
      body ul.game_info_bar_v2 li.status {
        display: list-item !important;
      }
    }
    
    @media screen and (max-width: 480px) {
      body ul.game_info_bar_v2 {
        margin-top: 25px !important;
        padding-top: 20px !important;
      }
      
      body ul.game_info_bar_v2 li.location {
        font-size: 14px !important;
      }
    }
  `;
  
  // Add CSS to style element
  if (style.styleSheet) {
    // IE
    style.styleSheet.cssText = css;
  } else {
    // Other browsers
    style.appendChild(document.createTextNode(css));
  }
  
  // Inject into page
  document.head.appendChild(style);
})();

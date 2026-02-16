// Legacy.Hockey Mobile Game Page Fix - JavaScript version
(function() {
  // Create style element
  var style = document.createElement('style');
  style.type = 'text/css';
  
  // CSS code
  var css = `
    @media screen and (max-width: 768px) {
      /* Push the game info bar down with top spacing */
      body .game_info_bar_v2 {
        margin-top: 60px !important;
        padding-top: 20px !important;
        position: relative !important;
        clear: both !important;
      }
      
      /* Ensure date wraps properly */
      body .game_info_bar_v2 .date {
        display: block !important;
        margin-bottom: 8px !important;
      }
      
      /* Ensure location wraps properly */
      body .game_info_bar_v2 .location {
        display: block !important;
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
        white-space: normal !important;
        max-width: 100% !important;
        line-height: 1.4 !important;
      }
      
      body .game_info_bar_v2 .location a {
        word-wrap: break-word !important;
        white-space: normal !important;
      }
    }
    
    @media screen and (max-width: 480px) {
      body .game_info_bar_v2 {
        margin-top: 80px !important;
        padding-top: 25px !important;
      }
      
      body .game_info_bar_v2 .location {
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

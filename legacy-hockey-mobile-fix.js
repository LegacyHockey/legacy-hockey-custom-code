// Legacy.Hockey Mobile Game Page Fix - JavaScript version
(function() {
  // Create style element
  var style = document.createElement('style');
  style.type = 'text/css';
  
  // CSS code
  var css = `
    /* TEST - Green background to confirm version is loading */
    body ul.game_info_bar_v2 {
      background-color: lightgreen !important;
      border: 3px solid green !important;
    }
    
    @media screen and (max-width: 768px) {
      /* Push game info bar down with massive top spacing */
      body ul.game_info_bar_v2 {
        position: relative !important;
        top: auto !important;
        left: 0 !important;
        right: 0 !important;
        margin-top: 150px !important;
        margin-bottom: 20px !important;
        padding: 15px 10px !important;
        float: none !important;
        clear: both !important;
        width: auto !important;
        z-index: 1 !important;
      }
      
      /* Format location to wrap properly */
      body ul.game_info_bar_v2 li.location {
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
        white-space: normal !important;
        max-width: 100% !important;
        line-height: 1.5 !important;
      }
      
      body ul.game_info_bar_v2 li.location a {
        word-wrap: break-word !important;
        white-space: normal !important;
      }
    }
    
    @media screen and (max-width: 480px) {
      body ul.game_info_bar_v2 {
        margin-top: 180px !important;
        padding: 20px 10px !important;
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

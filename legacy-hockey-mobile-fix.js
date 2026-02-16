// Legacy.Hockey Mobile Game Page Fix - JavaScript version
(function() {
  // Create style element
  var style = document.createElement('style');
  style.type = 'text/css';
  
  // CSS code
  var css = `
    @media screen and (max-width: 768px) {
      /* Add bottom spacing to game info bar to account for wrapping */
      body ul.game_info_bar_v2 {
        margin-bottom: 25px !important;
        padding-bottom: 15px !important;
      }
      
      /* Ensure location can wrap and has proper spacing */
      body ul.game_info_bar_v2 li.location {
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
        white-space: normal !important;
        max-width: 100% !important;
        line-height: 1.5 !important;
        margin-bottom: 10px !important;
        padding-bottom: 5px !important;
      }
      
      body ul.game_info_bar_v2 li.location a {
        word-wrap: break-word !important;
        white-space: normal !important;
        display: inline !important;
      }
      
      /* Add top spacing to line score table for extra buffer */
      body #GameShowScoreboardSimple table.stat_table {
        margin-top: 15px !important;
      }
    }
    
    @media screen and (max-width: 480px) {
      body ul.game_info_bar_v2 {
        margin-bottom: 30px !important;
        padding-bottom: 20px !important;
      }
      
      body ul.game_info_bar_v2 li.location {
        font-size: 14px !important;
        line-height: 1.4 !important;
      }
      
      body #GameShowScoreboardSimple table.stat_table {
        margin-top: 20px !important;
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

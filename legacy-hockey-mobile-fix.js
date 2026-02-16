// Legacy.Hockey Mobile Game Page Fix - JavaScript version
(function() {
  // Create style element
  var style = document.createElement('style');
  style.type = 'text/css';
  
  // CSS code
  var css = `
    /* TEST - Add visible background to see if CSS is loading */
    body ul.game_info_bar_v2 {
      background-color: yellow !important;
      border: 3px solid red !important;
    }
    
    @media screen and (max-width: 768px) {
      /* Nuclear option - massive spacing */
      body ul.game_info_bar_v2 {
        margin-bottom: 100px !important;
        padding-bottom: 50px !important;
        min-height: 150px !important;
      }
      
      body ul.game_info_bar_v2 li.location {
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
        white-space: normal !important;
        max-width: 100% !important;
        line-height: 1.5 !important;
        margin-bottom: 30px !important;
        padding-bottom: 20px !important;
      }
      
      body ul.game_info_bar_v2 li.location a {
        word-wrap: break-word !important;
        white-space: normal !important;
      }
      
      body #GameShowScoreboardSimple table.stat_table {
        margin-top: 50px !important;
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

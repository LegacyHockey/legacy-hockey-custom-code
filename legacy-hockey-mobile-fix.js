// Legacy.Hockey Mobile Game Page Fix - JavaScript version
(function() {
  // Create style element
  var style = document.createElement('style');
  style.type = 'text/css';
  
  // CSS code
  var css = `
    @media screen and (max-width: 768px) {
      /* Keep date and location in their original position but prevent overlap */
      body .game_info_bar_v2 .date {
        position: relative !important;
        z-index: 1 !important;
        background-color: transparent !important;
      }
      
      body .game_info_bar_v2 .location {
        display: block !important;
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
        white-space: normal !important;
        max-width: 100% !important;
        line-height: 1.4 !important;
        position: relative !important;
        z-index: 1 !important;
        background-color: transparent !important;
      }
      
      body .game_info_bar_v2 .location a {
        word-wrap: break-word !important;
        white-space: normal !important;
      }
      
      /* Add spacing below the game info bar to prevent overlap with line score */
      body .game_info_bar_v2 {
        margin-bottom: 15px !important;
        padding-bottom: 10px !important;
      }
      
      /* Ensure line score table starts below the game info */
      body table[id*="lineScore"] {
        margin-top: 15px !important;
        clear: both !important;
      }
      
      /* Protect team names in line score */
      body table[id*="lineScore"] .team {
        position: relative !important;
        z-index: 2 !important;
      }
    }
    
    @media screen and (max-width: 480px) {
      body .game_info_bar_v2 {
        margin-bottom: 20px !important;
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

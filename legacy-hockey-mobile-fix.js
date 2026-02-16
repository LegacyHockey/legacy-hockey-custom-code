// Legacy.Hockey Mobile Game Page Fix - JavaScript version
(function() {
  // Create style element
  var style = document.createElement('style');
  style.type = 'text/css';
  
  // CSS code
  var css = `
    /* TEST - If you see a red border, CSS is loading */
    body {
      border: 5px solid red !important;
    }
    
    @media screen and (max-width: 768px) {
      body .game_info_bar_v2,
      body div.game_info_bar_v2 {
        display: flex !important;
        flex-direction: column !important;
        margin-bottom: 30px !important;
        padding-bottom: 20px !important;
        overflow: visible !important;
        height: auto !important;
        min-height: auto !important;
        max-height: none !important;
      }
      
      body .game_info_bar_v2 .date,
      body div.game_info_bar_v2 div.date,
      body .game_info_bar_v2 > .date {
        display: block !important;
        width: 100% !important;
        float: none !important;
        clear: both !important;
        margin-bottom: 10px !important;
        position: static !important;
        left: auto !important;
        right: auto !important;
        top: auto !important;
      }
      
      body .game_info_bar_v2 .location,
      body div.game_info_bar_v2 div.location,
      body .game_info_bar_v2 > .location {
        display: block !important;
        width: 100% !important;
        float: none !important;
        clear: both !important;
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
        white-space: normal !important;
        max-width: 100% !important;
        line-height: 1.5 !important;
        margin-bottom: 15px !important;
        position: static !important;
        left: auto !important;
        right: auto !important;
        top: auto !important;
      }
      
      body .game_info_bar_v2 .location a,
      body .game_info_bar_v2 .location > a {
        display: inline !important;
        word-wrap: break-word !important;
        white-space: normal !important;
      }
      
      body table[id*="lineScore"],
      body div[id*="lineScore"],
      table.line-score {
        margin-top: 30px !important;
        clear: both !important;
        position: relative !important;
        z-index: 1 !important;
      }
      
      body .team,
      body td.team,
      body div.team {
        position: relative !important;
        z-index: 10 !important;
      }
      
      body .game_info_bar_v2::after {
        content: "" !important;
        display: block !important;
        height: 20px !important;
        clear: both !important;
      }
    }
    
    @media screen and (max-width: 480px) {
      body .game_info_bar_v2 {
        margin-bottom: 40px !important;
        padding-bottom: 25px !important;
      }
      
      body .game_info_bar_v2 .location {
        font-size: 14px !important;
        margin-bottom: 20px !important;
      }
      
      body table[id*="lineScore"] {
        margin-top: 40px !important;
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

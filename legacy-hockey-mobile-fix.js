// Legacy.Hockey Mobile Game Page Fix - JavaScript version
(function() {
  // Create style element
  var style = document.createElement('style');
  style.type = 'text/css';
  
  // CSS code
  var css = `
    /* TEST - Blue background to confirm new version is loading */
    body ul.game_info_bar_v2 {
      background-color: lightblue !important;
      border: 3px solid blue !important;
    }
    
    @media screen and (max-width: 768px) {
      /* Remove any positioning that's pulling it up */
      body ul.game_info_bar_v2 {
        position: static !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        transform: none !important;
        margin-top: 20px !important;
        margin-bottom: 20px !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding: 15px 10px !important;
        float: none !important;
        clear: both !important;
        width: auto !important;
      }
      
      /* Ensure it appears after the table */
      body #GameShowScoreboardSimple {
        display: flex !important;
        flex-direction: column !important;
      }
      
      body #GameShowScoreboardSimple > ul.game_info_bar_v2 {
        order: 999 !important;
      }
      
      body #GameShowScoreboardSimple > .game-header {
        order: 1 !important;
      }
      
      body #GameShowScoreboardSimple > table {
        order: 2 !important;
      }
      
      /* Format location properly */
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

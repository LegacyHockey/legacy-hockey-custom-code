// Legacy.Hockey Mobile Game Page Fix - JavaScript version
(function() {
  // Create style element
  var style = document.createElement('style');
  style.type = 'text/css';
  
  // CSS code
  var css = `
    @media screen and (max-width: 768px) {
      /* Make the parent container use flexbox to allow reordering */
      body #GameShowScoreboardSimple {
        display: flex !important;
        flex-direction: column !important;
      }
      
      /* Move game info bar to the bottom (after everything else) */
      body #GameShowScoreboardSimple > ul.game_info_bar_v2 {
        order: 999 !important;
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        transform: none !important;
        margin: 20px 0 0 0 !important;
        padding: 15px 10px 0 10px !important;
        width: auto !important;
        float: none !important;
        clear: both !important;
      }
      
      /* Game header (team logos) should be first */
      body #GameShowScoreboardSimple > div.game-header {
        order: 1 !important;
      }
      
      /* Line score table should be second */
      body #GameShowScoreboardSimple > table.stat_table {
        order: 2 !important;
        margin-bottom: 0 !important;
      }
      
      /* Format location to wrap properly */
      body ul.game_info_bar_v2 li.location {
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
        white-space: normal !important;
        line-height: 1.4 !important;
      }
      
      body ul.game_info_bar_v2 li.location a {
        word-wrap: break-word !important;
        white-space: normal !important;
      }
    }
    
    @media screen and (max-width: 480px) {
      body #GameShowScoreboardSimple > ul.game_info_bar_v2 {
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

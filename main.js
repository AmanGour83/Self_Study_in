/* main.js - small helpers and documented code
   - Initializes Bootstrap ScrollSpy with a dynamic offset
   - Automatically collapses mobile navbar when a nav link is clicked
*/

(function(){
  'use strict';

  // Wait until DOM is ready
  document.addEventListener('DOMContentLoaded', function(){
    var navbar = document.getElementById('mainNavbar');

    // Initialize or re-init ScrollSpy with offset (navbar height)
    function initScrollSpy(){
      var offset = navbar ? navbar.offsetHeight + 8 : 80; // small cushion
      if (window.bootstrap && document.body) {
        var existing = bootstrap.ScrollSpy.getInstance(document.body);
        if (existing) existing.dispose();
        new bootstrap.ScrollSpy(document.body, { target: '#navContent', offset: offset });
      }
    }

    initScrollSpy();
    window.addEventListener('resize', initScrollSpy);

    // Collapse mobile navbar when a link is clicked
    var navContent = document.getElementById('navContent');
    if (navContent) {
      navContent.addEventListener('click', function(e){
        var tgt = e.target;
        if (tgt && tgt.matches && tgt.matches('.nav-link')){
          // If the toggler is visible, hide the collapse (Bootstrap handles collapse via data attributes)
          var bsCollapse = bootstrap.Collapse.getInstance(navContent);
          if (bsCollapse && window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none'){
            bsCollapse.hide();
          }
        }
      });
    }

  });
})();

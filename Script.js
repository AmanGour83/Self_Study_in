// Initialize Bootstrap ScrollSpy with dynamic offset equal to navbar height
(function(){
    var nav = document.querySelector('.navbar');
    function initSpy(){
        var navHeight = nav ? nav.offsetHeight + 8 : 80; // small cushion
        var scrollSpy = bootstrap.ScrollSpy.getInstance(document.body);
        if (scrollSpy) scrollSpy.dispose();
          new bootstrap.ScrollSpy(document.body, { target: '#navbarSupportedContent', offset: navHeight });
        }
        if (window.bootstrap) {
          initSpy();
          // re-init on resize in case navbar height changes
          window.addEventListener('resize', function(){ initSpy(); });
        }
    })();
<script>
(function () {
  function init() {
    document.querySelectorAll('.panel-tabset .nav-tabs .nav-link').forEach(function (link) {
      link.addEventListener('shown.bs.tab', function () {
        var tabset = link.closest('.panel-tabset');
        if (!tabset) return;
        // Use the tabset container (not the sticky nav-tabs) to get true document position
        var top = tabset.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>

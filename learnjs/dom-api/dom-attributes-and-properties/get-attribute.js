<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    /* your code */
  </script>
</body>
</html>


const elem = document.querySelector('[data-widget-name]');

alert(elem.dataset.widgetName);
// или
alert(elem.getAttribute('data-widget-name'))
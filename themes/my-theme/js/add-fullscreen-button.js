$(document).ready( function() {
  /* add button, that allows to toggle to fullscreen mode */
  var projektButtonCode = '<div class="projekt-actions"><a href="#" class="button-projekt-fullscreen" role="button" title="Erweitern"><i class="fa fa-expand"></i></a></div>';
  var x = document.querySelectorAll(".projekt > h4");
  var i;
  for( i=0; i < x.length; i++) {
    x[i].insertAdjacentHTML('afterend', projektButtonCode);
  }
  var aufgabeButtonCode = '<div class="aufgabe-actions"><a href="#" class="button-aufgabe-fullscreen" role="button" title="Erweitern"><i class="fa fa-expand"></i></a></div>';
  x = document.querySelectorAll(".aufgabe > h4");
  for( i=0; i < x.length; i++) {
    x[i].insertAdjacentHTML('afterend', aufgabeButtonCode);
  }
});

$(document).ready(function() {
  $('#input').submit(function(event) {
    event.preventDefault();
    var entry = ('#input').val();
    var output = writeEntry(entry);
    output.forEach(function(element){
      $('#entries').append("<p>" + element + "</p>");
    });
  });
});

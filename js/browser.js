var writeEntry = require('./write-entry.js').writeEntry;

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    var entry = $('#input').val();
    var message = writeEntry(entry);
    $('#entries').prepend("<p>" +  message + "</p>");
  });
});

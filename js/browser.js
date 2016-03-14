var writeEntry = require('./write-entry.js').writeEntry;
var wordCount = require('./word-count.js').wordCount;
var moment = require('moment');


$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    var title = $('#title').val();
    var entry = $('#input').val();
    var message = writeEntry(entry);
    var word_count = wordCount(entry);
    $('#entries').prepend(date + "<br>" + "<h3>" + title + "</h3>" + "<p>" +  message + "</p>" + "<p>Your word count is " + word_count + "</p>");
  });
});

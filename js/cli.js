var writeEntry = require('./write-entry.js').writeEntry;

var result = writeEntry('Dear Diary.... blah blah blah');
result.forEach(function(element) {
  console.log(element);
});

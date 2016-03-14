var writeEntry = require('./write-entry.js').writeEntry;
var prompt = require('prompt');
prompt.start();

prompt.get('entry', function(err, result) {
  var result = writeEntry(result.entry);

    console.log(result);
});

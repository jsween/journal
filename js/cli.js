var writeEntry = require('./write-entry.js').writeEntry;
var wordCount = require('./word-count.js').wordCount;
var prompt = require('prompt');
prompt.start();

prompt.get('entry', function(err, result) {
  var result = writeEntry(result.entry);
  // var count = wordCount(result.entry);
    console.log(result);
    // console.log(count);
});

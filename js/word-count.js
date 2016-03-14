exports.wordCount = function(input) {
  var words = input.split(" ");
  var count = 0;
  for(var i = 0; i < words.length; i++){
    count += 1;
  }
  return count;
};

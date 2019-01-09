function countLetters(str) {
  var jointstr = str.toLowerCase().split(" ").join("").split("");
    var alphabets = {}
    for ( var i = 0; i < str.length; i++) {
      alphabets[str[i]] = str[i].indexOf(str);
    }
    return alphabets;
  }
  console.log(countLetters('lighthouse'));
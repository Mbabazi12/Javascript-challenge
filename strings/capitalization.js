// 6. Write a function that capitalizes the first letter of each word in a sentence.

function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
  
    for (var i = 0; i < splitStr.length; i++) {
      if (splitStr.length[i] < splitStr.length) {
        splitStr[i].charAt(0).toUpperCase();
      }
  
      str = splitStr.join(" ");
    }
  
    return str;
  }
  
  console.log(titleCase("I'm a little tea pot"));
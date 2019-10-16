// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  let string1 = 0;
  let string2 = 0;
  for (var i = 0; i < str1.length; i++) {
    string1 += str1.charCodeAt(i);
  }

  for (var i = 0; i < str2.length; i++) {
    string2 += str2.charCodeAt(i);
  }
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
};

module.exports = { checkAnagrams };

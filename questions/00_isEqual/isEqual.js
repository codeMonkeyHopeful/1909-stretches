function isEqual(obj1, obj2) {
  var obj1Again = Object.getOwnPropertyNames(obj1);
  var obj2Again = Object.getOwnPropertyNames(obj2);
  for (var i = 0; i < obj1Again.length; i++) {
    var propName = obj1Again[i];
    if (obj1[propName] !== obj2[propName]) {
      return false;
    }
  }
  if (obj1Again.length != obj2Again.length) {
    return false;
  }
  return true;
}

module.exports = { isEqual };

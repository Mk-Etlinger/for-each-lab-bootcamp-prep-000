function iterativeLog(arr) {
  arr.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}


function iterate(callback) {
  var arr = ['stuff', 'is', 'cool'];
  arr.forEach(callback)


  return arr
}

function doToArray(arr, callback) {
  arr.forEach(callback)

}

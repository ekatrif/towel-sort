
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
  if (!matrix) {return result}
  matrix.forEach(function(array,index) {
    if (index%2===0) {
      for (let i=0;i<array.length;i++) {
      result.push(array[i]);
      }
    } else {
      for (let i=array.length-1;i>=0;i--) {
        result.push(array[i]);
        }
    }
  })
  return result;
}

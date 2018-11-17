function hapusSimbol(str) {
  // you can only write your code here!
  var result='';
  for (var i = 0; i < str.length; i++) {
    if (/[a-zA-Z0-9]/.test(str[i]) === true){
      str[i].toString();
      result += str[i];
    }
  }
  return result;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100

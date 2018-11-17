function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result=[];
  var indeksNaik = 0;
  var indeksTurun = 0;
  for (var i = 0; i < arrPenumpang.length; i++) {
    var objResult ={};
    objResult.penumpang = arrPenumpang[i][0];
    objResult.naikDari = arrPenumpang[i][1];
    objResult.tujuan = arrPenumpang[i][2];
    for (var j = 0; j < rute.length; j++) {
      if (rute[j] === objResult.naikDari) {
        indeksNaik = j;
      }
      if (rute[j] === objResult.tujuan) {
        indeksTurun = j;
      }
    }
    objResult.Bayar = (indeksTurun-indeksNaik)*2000;
    result.push(objResult);
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

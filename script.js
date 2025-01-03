function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = '';

  for (let key in obj) {
    let [symbol, value] = obj[key];

    while (num >= value) {
      result += symbol;
      num -= value;
    }

}
	result = result
    .replace('DCCCC', 'CM') // 900
    .replace('CCCC', 'CD')   // 400
    .replace('LXXXX', 'XC')  // 90
    .replace('XXXX', 'XL')   // 40
    .replace('VIIII', 'IX')  // 9
    .replace('IIII', 'IV');  // 4

  return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

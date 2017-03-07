var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
console.log(x);
x.push(100);
console.log(x);
x.push(['hello','world','Javascript is Fun'])
console.log(x);
var sum = 0
for (var i = 1; i < 501; i++) {
  sum += i;
}
console.log(sum);
var arr = [1,5,90,25,-3,0];
var min = arr[0];
for (var i = 1; i > arr.length; i++){
  if (arr[i] < min){
    min = arr[i];
  }
}
console.log('min:', min);
var arr_sum = arr[0];
for (var i = 1; i < arr.length; i++){
  arr_sum += arr[i];
}
var avg = arr_sum / arr.length;
console.log('avg:', avg);

var newNinja = {
	name: 'Jessica',
	profession: 'coder',
	favorite_language: 'Javascript',
	dojo: 'Dallas'
}
for (var key in newNinja){
	console.log (key + ":" + newNinja[key]);
}


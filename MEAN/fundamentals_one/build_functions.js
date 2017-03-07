
function runningLogger() {
  console.log('I am Beautiful!')
}
runningLogger();

function timesByTen(val) {
  if (typeof(val) == 'number'){
    return val*10;
  }
}

console.log(timesByTen(5));

function stringReturnOne() {
  return 'Bacon';
}

function stringReturnTwo() {
  return 'Potato';
}

function caller(param){
  if (typeof(param)=='function'){
    param();
  }
}

function myDoubleConsoleLog(param_one,param_two){
  if (typeof(param_one) =='function' && typeof(param_two)=='function'){
    console.log(param_one());
    console.log(param_two());
  }
}

function caller2(param){
  console.log('starting...');
  var x = setTimeout(function(){
    if (typeof(param)=='function'){
      param(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('ending');
  return 'interesting';
}
console.log(caller2(myDoubleConsoleLog));


var sumXY = function(x, y) {
  var sum = 0
  for (var i = x; i < y + 1; i++) {
    sum += i;
  }
  console.log('Final sum:', sum)
}

var getMin = function(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  console.log('min:', min);
  return min;
}

var getAvg = function(arr) {
  var arr_sum = arr[0];
  for (var i = 1; i < arr.length; i++){
    arr_sum += arr[i];
  }
  var avg = arr_sum / arr.length;
  console.log('avg:', avg);
  return avg;
}

var myObject = {
  sumXY: function(x, y) {
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
      sum += i;
    }
    return sum;
  }, //end sumXY
  findAvg: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }, //end findAvg
  findMin: function(arr) {
    if (arr) {
      var min = arr[0];
      for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
        }
      }
      return min;
    }
  }// end find min
}//end object

var person = {
  name : 'Taylor',
  distance_traveled : 0,
  say_name: function(){
    console.log(person.name);
  },
  say_something: function(message){
    console.log(person.name, 'says', message);
  },
  walk: function() {
    console.log(person.name, 'is walking...')
    person.distance_traveled += 3;
    return person;
  },
  run: function() {
    console.log(person.name, 'is running...')
    person.distance_traveled += 10;
    return person;
  },
  crawl: function() {
    console.log(person.name, 'is crawling...')
    person.distance_traveled += 1;
    return person;
  },
  chewGum:function(){
    console.log("I can walk and chew gum, but I can't chew gum and walk...");
  }
}

person.walk().run();

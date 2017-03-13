var _ = {
    map: function(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = callback(arr[i]);
        }
    },
    reduce: function(arr, callback, memo) {
        index_saver = 0;
        if(!memo){
            memo = arr[0]
            index_saver = 1;
        }
        for (var i = index_saver; i < arr.length; i++ ) {
            memo = callback(arr[i], memo);
        }
        return memo
    },
    find: function(arr, callback) {
        for (var i = 0; i<arr.length; i++){
            if (callback(arr[i])) {
                return arr[i]
            }
        }
    },
    filter: function(arr, callback) {
        temp = []
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                temp.push(arr[i])
            }
        }
        return temp;
    },
    reject: function(arr, callback) {
        temp = []
        for (var i = 0; i < arr.length; i++) {
            if (!callback(arr[i])) {
                temp.push(arr[i])
            }
        }
        return temp;
    }
}

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);

// because this function is manipulating our data rather than returning it, we need to give it a variable to make changes to
var bacon = [2,4,5]
_.map(bacon, function timesThree(num){ return num * 3 });
console.log(bacon);

// example of reduce
var bits = [5,1,4,6]
console.log(_.reduce(bits, function callback(x, memo){return x + memo;}));

// example of find
var segway = _.find([1, 7, 3, 9, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(segway);

// example of reject
var poofOdds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 1; });
console.log(poofOdds);

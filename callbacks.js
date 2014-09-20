//Make the following function calls work
  var giveItName = function(name, callback) {
    callback(name);
  };
  
  giveItName('name', function(name){
    alert('Your name is ' + name);
  });

  var nums = [2,4,5,6];
  //returns true if all items in the array are evens.
  var areEvens = function(array, callback) {
    var result;
    for (var i = 0; i < array.length; i++) {
	  result = callback(array[i]);
	  if (result === false) {
	    return false;
	  }
	}
	return true;
  };
  
  areEvens(nums, function(item){
    return item % 2 === 0; 
  });


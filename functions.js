//Write a function called 'welcome' that takes in a name (say Tyler), and then returns 'Welcome, Tyler' (or whatever the name was).

  //Function definition here
var sayName = function(name) {
  return "Welcome ", name;
};

  //Call the function here
var name = sayName("Wesley");

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



//Write a function called 'multiply' that takes in two numbers, multiplies them together, and returns the result

  //Function definition here
var multiply = function(num1, num2) {
  return num1 * num2;
};

  //Call the function here
var product = multiply(num1, num2);


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



/*Write a function called 'dice' that takes in an array then returns an object
  which has two keys, 'evens' and 'odds'.'evens' is an array full of the even numbers in 
  the original array an 'odds' is an array full of the odd values in the original array

  example: 
    var myArray = [1,2,3,4,5,6];
    var obj = dice(myArray);
    obj.evens ----> [2,4,6];
    obj.odds ----> [1,3,5]
*/
var dice = function(array) {
  var even = 0;
  var odd = 0;
  var sortedObject = {};
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
	  even += 1;
	}
	else {
	  odd += 1;
	}
  }
  
  sortedObject.evens = even;
  sortetObject.odds = odd;
  
  return sortedObject;
};  
  

/* we have an i5 processor and are currious as to what cores are needed when we are playing Minecraft.

write a function that can take in an array of objects and output the ammount of total processor output by all cores that are in use */

var processors = [{
    core: 1,
    inUse: true,
    output: 4000
},{
    core: 2,
    inUse: false,
    output: 100
},{
    core: 3,
    inUse: true,
    output: 1170
},{
    core: 4,
    inUse: true,
    output: 3250
},{
    core: 5,
    inUse: false,
    output: 670
}];

var calculateProcessorOutput = function(arrayOfProcessors) {
  var totalOutput = 0;
  
  for (var i = 0; i < arrayOfProcessors.length; i++) {
    if (arrayOfProcessors[i].inUse === true) {
	  totalOutput += arrayOfProcessors[i].output;
	}
  }
  
  return totalOutput;
}
//create an array called family which has your family members in order of their age

  //code here
var family = ["Wesley", "Kristin", "William", "Zachary"];


//Remove the oldest member of your family

  //code here
family.shift();


//Add a new family member as the youngest member

  //code here
family.push("Johnny");

//LOOP over your array to see if you have a family member named 'Tyler'
// If you do, alert ('I have a Tyler'), if you do not, alert ('I have no Tylers')

  //Code here
for (var i = 0; i < family.length; i++) {
  if (family[i] === "Tyler") {
    alert("I have a Tyler");
  }
  else {
    alert("I have no Tylers");
  }
}


// Remove the second oldest member of your family

  //Code here
  family.shift();



//Write a function called 'reverse' that takes in a string and returns that string in reverse order

  //Function definition here
var reverse = function(inputString) {
  return inputString.split("").reverse().join("");
};

  //Call the function here
reverse("Hello world");
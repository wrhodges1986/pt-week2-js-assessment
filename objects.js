//Create a function called User which has the following properties
//username, email, password, birthday

  //code here
var User = { username: "woodooo", email: "whatever@yahoo.com", password: "23oij23io", birthday: "10 Jan 1909" };

//edit the username to be 'js_slinger'
  
  //code here
User["username"] = "js_slinger";

//Add a property of favoriteBook and set it to 'Mike Tyson learns to Whistle'

  // code here
User.favoriteBook = "Mike Tyson learns to Whistle";

//Remove the password property from your object
  
  // code here
delete User.password;

//Create an array called 'values'. Loop through your object and push every value
//from  your object into your 'values' array. So for example, you'll eventually have
//an array that looks similar to ['js_slinger', 'tm@gmail.com', '5/2/1990'];

  // code here 
var values = [];

for (var key in User) {
  values.push(User[key]);
}
// Password for Activity 3;
let password = prompt("Enter your password?");
if (password.length == 16 ) {
console.log("Welcome");
}
else if (password == ""){
console.log("Please provide a password.");
}
else if (password.lenth < 3) {
    console.log("Password is too short");
}
else if (password.length > 22); {
console.log("Too long password & password  should be 16 characters");
}
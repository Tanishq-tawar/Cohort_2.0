let age =prompt("Enter your age:");
if(age===null){
    console.log("User cancelled the prompt.");
}
else if( age.trim()=== ""){
    console.log("User entered an empty string.");
}
else if(isNaN(age)){
    console.log("User entered a non-numeric value.");
}
else if(age<0){
    console.log("Invalid age. Age cannot be negative.");
}
else if(age<18){
    console.log("not eligible .");
}
else if(age>18 && age<100){
    console.log("You are eligible.");
}


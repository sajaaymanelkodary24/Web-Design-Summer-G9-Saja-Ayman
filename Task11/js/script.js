let userName = prompt("Enter your name:");

if (userName === "" || userName === null) {
    alert("Please enter your name");
} else if (userName === "zein") 
    {
    let age = prompt("Enter your age");
    let address = prompt("Enter your address");
    
    console.log(`name = ${userName}`);
    console.log(`age = ${age}`);
    console.log(`address = ${address}`);

    
    let degree = prompt("Enter your degree:");

    if (degree > 90) {
        console.log("Grade: A");
    } else if (degree >= 80) {
        console.log("Grade: B");
    } else if (degree >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: F");
    }

    } 
    else {
    console.log("Invalid user");
        }

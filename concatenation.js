let submitButton = document.querySelector(".submit");
let results = document.querySelector(".results");

submitButton.addEventListener("click", function() {
    results.style.display = "block";
    let myName = document.querySelector(".my-name").value;
    let mood = document.querySelector(".mood").value;
    let food = document.querySelector(".food-name").value;
    let birthYear = document.querySelector(".year").value;
    let age = 2024 - birthYear; // update to 2024, if necessary
    // 1. Declare a variable to save the value of the city the user is from.
    let city = document.querySelector(".city").value;
    // 2. Below write your sentences! 
    // - Have them show up in the div with class "results".
    // - Example paragraph: "My name is (myName). I'm feeling (mood) and I absolutely lovveeee eating (food) 😍..."
    // - Try placing your sentences into <p> or <li> tags.
    results.innerHTML = "My name is " + myName + ". I'm feeling " + mood + " and I absolutely love eating " + food + ". My birth year is " + birthYear + ". My age is " + age + ". And I live in " + city + ".";

});
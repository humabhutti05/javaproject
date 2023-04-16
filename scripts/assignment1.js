// Task 1:


// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".


// var zakatPercentage = 0.025;
// var userInput = +prompt("Enter Your Amount");
// var result = (zakatPercentage) * (userInput)
// alert("Your Zakat Value is" + result)




// Task 2:

// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

var familyMembers = +prompt("Enter The Total Number Of Family Members")
var choose = +prompt("Enter Your Fitrah Choose : Dates, Wheat, Oats, Raisins")
if(choose == 'Oats' || choose == 'oats'){

    var price =(450)*(familyMembers)
    alert("Your Fitrah Amount is" + price)
}

if(choose == 'Wheat' || choose == 'wheat'){

    var price =(250)*(familyMembers)
    alert("Your Fitrah Amount is" + price)
}
if(choose == 'Raisins' || choose == 'raisins'){

    var price =(2800)*(familyMembers)
    alert("Your Fitrah Amount is" + price)
}
if(choose == 'Dates' || choose == 'dates'){

    var price =(2100)*(familyMembers)
    alert("Your Fitrah Amount is" + price)
}
alert("Thank You!")



// Task 3:

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

// var secretNumber = 6
// var userInput = +prompt("Guess the number between 1 to 10")

// if (userInput == '6') {
// //   console.log("Congratulations! You guessed the secret number")
// alert("Congratulations! You guessed the secret number....")
// }

// else if (secretNumber > userInput){
//     alert("the guess is too low :(")
//         alert("Please! Guess Again...")
    

// }

// else if (secretNumber < userInput){
//     alert("the guess is too high")
//     alert("Please! Guess Again...") 
// }




// Task 4:

// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

// var userName = prompt("Enter You Name:");
// var firstLetter = userName.slice(0,1);
// var next = userName.slice(1);
// console.log(firstLetter.toUpperCase()+next.toLowerCase());


// Task 5:

// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity



// var contactNumber = []
// var contactName = []

// for (var i = 0; i <= 2; i++) {
// 8
//   var userNumber = prompt("Enter Your Contact Number");
//   var userName = prompt("Enter Your Name");
  

// contactNumber.push(userNumber);
//  contactName.push(userName);


// }
// console.log(userName);
// console.log(userNumber);



// Task 6:

// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.


// var products = ['Candy' , 'Food' , 'Books' , 'Pens/Paints' , 'Inkpots' , 'Sketchbook']
// console.log(products)

// var userInput = prompt("Please Enter The Element Position You Wants : Candy , Food , Books , Pens/Paints , Inkpots , Sketchbook"
// )

// // var userInput = ("Please Enter The Element Position You Wants")

// products[5]
// var user = products.slice(5)
// console.log(user)

// var newProducts =['Candy' , 'Food' , 'Books' , 'Pens/Paints' , 'Inkpots' , 'Sketchbook']
// newProducts.splice(5)
// console.log(newProducts)

// Task 7:

// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

// var nationality = prompt("Enter Your Nationality")
// var gender = +prompt("Enter Your Gender")
// var age = +prompt("Enter Your Age")

// if(age >18 && nationality == 'Pakistani' || nationality == 'pakistani') {
//     alert("You are eligible to vote")
//     console.log("Please! go to voting are....")
//     }

//     if(gender == 'Female' || gender == 'female'){
// alert("you are eligible to vote")}

//  if(gender == 'male' || gender == 'Male'){
// alert("you are eligible to vote")
// }
    
// // alert("You are eligible to vote")

//  if (nationality == 'indian' || nationality == 'Indian'){
//   alert("You are not eligible to vote")
//   console.log("Please! go to India.....")
// }




// Task 8:

// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

// var WorldCupSquad = ['Babar Azam (c)', 'Shadab Khan', 'Asif Ali', 'Fakhar Zaman', 'Haider Ali', 'Haris Rauf', 'Iftikhar Ahmed', 'Mohammad Hasnain', 'Mohammad Nawaz', 'Mohammad Rizwan', 'Mohammad Wasim', 'Naseem Shah', 'Shaheen Shah Afridi', 'Mohammad Haris',' Shahnawaz']
// var finalTeam = ['Babar Azam (c)', 'Shadab Khan', 'Asif Ali', 'Fakhar Zaman', 'Haider Ali', 'Haris Rauf', 'Iftikhar Ahmed', 'Mohammad Rizwan', 'Naseem Shah', 'Shaheen Shah Afridi', 'Mohammad Haris']

// console.log(WorldCupSquad)
// console.log(finalTeam)

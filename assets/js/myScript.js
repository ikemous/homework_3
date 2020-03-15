//Arrays used for password characters
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];///Possible Letters
let specChars = ['!','?','@','#','$','%','^','&','*','(',')','<','>','~','`'];//Possible Special Characters
let numbers = ['0','1','2','3','4','5','6','7','8','9'];//possible numbers for password

// let allChoices = [letters, specChars, numbers];//All arrays in one list
let allChoices ;//used to store all choices in one list

//Variables used by the functions below
let password;//Password that is generated
let validInput;//Used To Check pass length input
let passLength;//Users length for password
let MIN_LENGTH = 8;//Constant for Minimum password length
let MAX_LENGTH = 128;//Constant for Maximum password length

//Variables for checkboxes
let lettersChecked;//For the letters checkbox
let numbersChecked;//For The numbers checkbox
let symbolsChecked;//For the Symbols Checkbox

//  createPassword()
//  Purpose: To Generate A random password and change the textarea text
//  Parameters: None
//  Returns: None
function createPassword()
{
    //Reset password Variable
    password = "";

    //Generate possible password options
    generateChoices();

    //Grab Password Length from the HTML Page
    passLength = document.getElementById("passLengthTextBox").value;

    //Check User Input
    validInput = checkNumberInput(passLength);

    //Check if input is valid
    if(validInput === false)
    {
        //Get out of the function if it isn't valid
        return;
    }

    //Turn String to int
    passLength = parseInt(passLength);

    //Start Generating password
    for(let i = 0; i < passLength; i++)
    {

        //Random Character is created
        let newChar = randomCharacter();

        //Check if character wasnt in any array list
        if(newChar == null)
        {
            //Tell user they suck!
            alert("You Need to have at least 1 box checked!!");
            //Tell the User They Suck Again!
            password = "Please Check at least one box"
            //Get Out Of The For Loop
            break;
        }

        //Add random character to password
        password = password + newChar;
    }

    //Reset the text of the text area
    document.getElementById("passText").innerText = password;

}//End createPassword()


//  generateChoices()
//  Purpose: To generate the array to hold arrays of character choices
//  Parameters: None
//  Returns: None
function generateChoices()
{
    //Make all choices an empty array
    allChoices = [];
    //Check if letter check box is checked
    lettersChecked = document.getElementById("letterCheckBox").checked;
    //Check if numbers check box is checked  
    numbersChecked = document.getElementById("numbersCheckBox").checked;
    //Check if symbols check box is checked
    symbolsChecked = document.getElementById("symbolsCheckBox").checked;

    //Letters box was checked
    if(lettersChecked)
    {
        //Add letters to the list of possible characters
        allChoices.push(letters);
    }
    //Numbers box was checked
    if(numbersChecked)
    {
        //Add numbers to the list of possible characters
        allChoices.push(numbers);
    }
    //Symbols box was checked
    if(symbolsChecked)
    {
        //Add symbols to the list of possible characters
        allChoices.push(specChars)
    }

}//End generateChoices()


//  randomCharacter()
//  Purpose: Generate a random character from all the choices
//  Parameters: num variable for array choice
//  Returns: character To add to password
function randomCharacter()
{
    //Temp Variables to store information
    let character;//Password Character
    let randNum = Math.floor(Math.random() * allChoices.length);//Store random number

     //Case Statements To check each choice
     switch(allChoices[randNum]) 
     {
         //Random chose letters
         case letters:
            //create random number to pick from letter list
            randNum = Math.floor(Math.random() *letters.length);
            //Upper Letter
            if(checkForUpperOrLower())
            {
               //Add upper case letter to password string
              character = letters[randNum].toUpperCase();
            }
            //Lower Letter
            else
            {
               //Add lower case letter to password string
               character = letters[randNum];
            }
            //Get Out Of The Loop
            break;
         //Random chose specChars
         case specChars:
            //create random number to pick from letter list
            randNum = Math.floor(Math.random() * specChars.length);
            //Add the special character to the password
            character = specChars[randNum];
            //Get Out of here 
            break;
         //Random Chose numbers
         case numbers:
            //create random number to pick from letter list
            randNum = Math.floor(Math.random() * numbers.length);
             //Add number to password
            character = numbers[randNum];
            //Get out of here!!!
            break;
         default:
            return null;
       }
       //Return The Character For The Password
       return character;
}//end randomCharacter()


//  checkNumberInput()
//  Purpose: To check the password length that the user input is a number
//  Parameters: length
//  Returns: boolean of true or false
function checkNumberInput(length)
{

    //Checks To See If User Input isn't a number
    if(isNaN(length))
    {
       //Tell User That They Suck!
       alert("Input Wasn't a number");
    }
    //User Input Is A number
    else if(length >= MIN_LENGTH && length <= MAX_LENGTH)
    {
        //Turn User Input Into A Number
        length = parseInt(length);
        //input is a number
        return true;
    }

    //Tell User they Suck!
    alert("Input must be between 8 and 128 characters")
    
    //input isnt a number
    return false;
//End checkNumberInput()
}

//  checkForUpperorLower()
//  Purpose: To determine if the letter is going to be upper or lower
//  Parameters: None
//  Returns: boolean of true or false
function checkForUpperOrLower()
{
    //Create a random number for upper and lower case
    let isUpper = Math.floor(Math.random() * 2);

    //0 = lower
    if(isUpper == 0)
    {
        //Return False
        return false;
    }
    //1 = upper
    else
    {
        //Return True
        return true;
    }

}//End checkForUpperOrLower()

//  copyToClipBoard()
//  Purpose: To determine if the letter is going to be upper or lower
//  Parameters: None
//  Returns: boolean of true or false
function copyToClipBoard()
{
    //Obtain Text From text area
    let clippedText = document.getElementById("passText");

    //Select The Text
    clippedText.select();

    //Copy The Text To Clipboard
    document.execCommand("copy");

}
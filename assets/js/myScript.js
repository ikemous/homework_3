//Arrays used for password characters
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];///Possible Letters
let specChars = ['!','?','@','#','$','%','^','&','*','(',')','<','>','~','`'];//Possible Special Characters
let numbers = ['0','1','2','3','4','5','6','7','8','9'];//possible numbers for password
let allChoices = [letters, specChars, numbers];//All arrays in one list

//Variables used by the functions below
let password = "";//Password that is generated
let passLength;//Users length for password
let MIN_LENGTH = 8;//Minimum password length
let MAX_LENGTH = 128;//Maximum password length

//  createPassword()
//  Purpose: To Generate A random password and change the textarea text
//  Parameters: None
//  Returns: None
function createPassword()
{

    //Reset password Variable
    password = "";

    //Bool to confirm users input is correct
    let validInput = false;    

    //Make User Input A Number
    while(validInput === false)
    {

        //Ask User How Long They want Thier Password to Be
        passLength = prompt("How Long Will Your Password Need To Be? (8-126 Characters)");

        //Check User Input
        validInput = checkNumberInput(passLength);
    }

    //Turn String to int
    passLength = parseInt(passLength);

    //Start Generating password
    for(let i = 0; i < passLength; i++)
    {

        //Random number to choose 
        let randNum = Math.floor(Math.random() * 3);

        //Add random character to password
        password = password + randomCharacter(randNum);
    }

    //Reset the text of the text area
    document.getElementById("passText").innerText = password;

}

//  randomCharacter()
//  Purpose: Generate a random character from all the choices
//  Parameters: num variable for array choice
//  Returns: character To add to password
function randomCharacter(num)
{
    //Temp Variables to store information
    let character;//Password Character
    let randNum;//Store random number

     //Case Statements To check each choice
     switch(allChoices[num]) 
     {
         //Random chose letters
         case letters:
            //create random number to pick from letter list
            randNum = Math.floor(Math.random() * 25);
            //Create a random number for upper and lower case
            let isUpper = checkForUpperOrLower();
            //Upper Letter
             if(isUpper)
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
             randNum = Math.floor(Math.random() * 14);
             //Add the special character to the password
             character = specChars[randNum];
             //Get Out of here 
             break;
         //Random Chose numbers
         case numbers:
             //create random number to pick from letter list
             randNum = Math.floor(Math.random() * 9);
             //Add number to password
             character = numbers[randNum];
             //Get out of here!!!
             break;
         default:
             //Add astrix if password fails
            character = "*";
       }
       //Return The Character For The Password
       return character;
}



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
     //User Input Is A
     else
     {
         //Turn User Input Into A Number
         length = parseInt(length);
         
         //Check if User Input is inbwetween parameters
         if(length >= MIN_LENGTH && length <= MAX_LENGTH)
         {
            return true;
         }
     }

    //Tell User they Suck!
    alert("Input must be between 8 and 128 characters")
    
    //User input isnt inbetween the parameters
    return false;

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
        return false;
    }
    //1 = upper
    else
    {
        return true;
    }
}

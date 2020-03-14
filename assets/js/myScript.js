//Arrays used for password characters
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let specChars = ['!','?','@','#','$','%','^','&','*','(',')','<','>','~','`'];
let numbers= ['0','1','2','3','4','5','6','7','8','9'];
let allChoices = [letters, specChars, numbers];//All arrays in one list

let password;
let passLength;
let MIN_LENGTH = 8;
let MAX_LENGTH = 128;

//Function To Be Able to Generate Password
function createPassword()
{
    let validInput = false;

    alert("test");
    

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
        //Choose which choice to pick

        //if letter choose upper or lower chase

        //
    }
    

}



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
//Arrays used for password characters
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let specChars = ['!','?','@','#','$','%','^','&','*','(',')','<','>','~','`'];
let numbers= ['0','1','2','3','4','5','6','7','8','9'];
let allChoices = [letters, specChars, numbers];//All arrays in one list

let password = "";
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
        //Random number to choose 
        let ranNum = Math.floor(Math.random() * 3);
        
        //Choose which choice to pick


        alert(allChoices[ranNum]);
        //Case Statements To check each choice
        switch(allChoices[ranNum]) 
        {
            case letters:
                //create random number to pick from letter list
                let randNum = Math.floor(Math.random() * 25)

                //Create a random number for upper and lower case
                let isUpper = Math.floor(Math.random() * 2);

                //0 = lower
                if(isUpper == 0)
                {
                    //Add lower case letter to password string
                    password = password + letters[randNum];
                }
                //1 = upper
                else
                {
                    //Add upper case letter to password string
                    password = password + letters[randNum].toUpperCase();
                }
                //Get out of the case
                break;
            case specChars:
                
                // code block
                break;
            case numbers:
                // code block
                break;
            default:
              // code block
          }
    }
    
    alert(password);
    console.log(password);
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

function checkForUpperOrLower()
{
    //Create a random number for upper and lower case
    let isUpper = Math.floor(Math.random() * 2);
    //0 = lower
    if(isUpper == 0)
    {
        //Add lower case letter to password string
        password = password + letters[randNum];
    }
    //1 = upper
    else
    {
        //Add upper case letter to password string
        password = password + letters[randNum].toUpperCase();
    }
}
//Arrays used for password characters
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let specChars = ['!','?','@','#','$','%','^','&','*','(',')','<','>','~','`'];
let numbers= ['0','1','2','3','4','5','6','7','8','9'];

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

        

        //Checks To See If User Input isn't a number
        if(isNaN(passLength))
        {
            //Tell User That They Suck!
            alert("Input Wasn't a number");
        }
        //User Input Is A
        else
        {
            //Turn User Input Into A Number
            passLength = parseInt(passLength);
            
            //Check if User Input is inbwetween parameters
            if(passLength >= MIN_LENGTH && passLength <= MAX_LENGTH)
            {
                //Set User input to be true
                validInput = true;
            }
            else
            {
                //Tell User Answer Is Out Of Bound
                alert("Password Must Be between 8 and 128. Please Re-enter your choice");
            }

        }

    }

}
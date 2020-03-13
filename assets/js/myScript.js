//Arrays used for password characters
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let specChars = ['!','?','@','#','$','%','^','&','*','(',')','<','>','~','`'];
let numbers= ['0','1','2','3','4','5','6','7','8','9'];

let passLength;

//Function To Be Able to Generate Password
function createPassword()
{
    let validInput = true;

    //Make User Input A Number
    While(validInput === true)
    {
        //Ask User How Long They want Thier Password to Be
        passLength = prompt("How Long Will Your Password Need To Be? (8-126");

        //Checks To See If User Input is a number
        if(isNaN(passLength))
        {
            //Turn User Input Into A Number
            passLength = parseInt(passLength);
        }
        //User Input Isnt A Number
        else
        {
            //Tell User That They Suck!
            alert("Input Wasn't a number");
        }
    }

}
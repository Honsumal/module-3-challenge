// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Using crypto.getRandomValues to get a more secure random value.
function rDec (charSetLength) {
  let array = new Uint32Array(1);
  self.crypto.getRandomValues(array);

//The following operations ensure that we get an even distribution of values for each character in the usable set.
  val = array[0]/(charSetLength) 
  rDecimal = val - Math.floor(val)
  return rDecimal
}

//Prompts
function generatePassword(){
  let length = prompt("Please enter your desired length of password between 8 and 128 characters")
  length = Math.floor(length) //Converts input into a number, and also acts as a redundancy in case user inputs a non-integer

// Adds a redundancy in case user accidentally inputs in something other than a number or a number that is out of the scope of the password generator
  while (length < 8 || length > 128 || isNaN(length)){
    length = prompt("Sorry, your input was invalid, please try again")
  }
  
  function charSelect () {
    let lConf = false;
    let uConf = false;
    let nConf = false;
    let sConf = false;

//Adds a redundancy in case a user selects no character types to be used in their password
    while (!lConf && !uConf && !nConf && !sConf) {
      lConf = confirm("Would you like lowercase letters in your password");
      uConf = confirm("Would you like uppercase letters in your password");
      nConf = confirm("Would you like numerals in your password");
      sConf = confirm("Would you like special characters in your password");

      if (!lConf && !uConf && !nConf && !sConf){
        alert("Please add at least one character type.")
      }
    }
    return [lConf, uConf, nConf, sConf]
  }

  Conf = charSelect();

//Makes Pasword with the above prompts
  function makePassword (length, lConf, uConf, nConf, sConf){
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "0123456789";
    let spec = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let charSet = ""

//Creates Character list
    let conf = [lConf, uConf, nConf, sConf]
    let allChars = [lower, upper, number, spec]

    for (x in conf){
      if (conf[x]){
        charSet += allChars[x];
      }
    }

    newPass = ""; //Defines the new password as an empty string to add the new characters in

    for (i = 0, n = charSet.length; i < length; i ++){
      newPass += charSet.charAt(Math.floor(rDec(n)* n)); //Generates password using rDec function from line 17-24
    }

    return newPass
  }

  return makePassword(length, Conf[0], Conf[1], Conf[2], Conf[3])
}





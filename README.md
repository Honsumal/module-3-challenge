# Password Generator

## Description

This application generates a random password of length between 8 and 128 characters. The user is prompted on whether or not they wish to have lowercase, uppercase, numeric, or special characters in their password. The randomization is generated using the crypto.getRandomValues method, as it is provides cryptographically secure random numbers, as indicated by the MDN documentation on Math.random(). Below, I have outlined the various functions written that provide the application's functionality.

### writePassword

This function takes the password generated from generatePassword (seen below), and casts it onto a box after it is generated.

### rDec
This function creates a random number between 0 and 1 by using the crypto.getRandomValues method. Dividing by 2<sup>32</sup> allows for the function to generate an even spread of decimals across the span of the character list as the max value of an unsigned 32-bit array is 2<sup>32</sup> - 1.

### generatePassword
This function contains both the charSelect and makePassword functions. The first part of the function asks the user to input the desired length of their password, with redundancy built in to ensure a valid input is recieved.

### charSelect
This function is nestled within the generatePassword function, and asks the user to select the types of characters they want to use in their password. If the user selects no character types, they are forced to remake their choices.

### makePassword
This function is nestled within the generatePassword function, and its main purpose is to take the information from the user prompts and convert that into a password of the user's specifications.

## Installation

This application runs from the browser and thus needs no installation.

## Usage
The site is fully operational, with all links tested and images backed up with alternate text in the case of potential problems. Link to deployed webpage: https://honsumal.github.io/module-3-challenge/

A screenshot of the completed application is provided below:

![Completed Webpage Image](/assets/images/finished-webpage.png)

## Credits

N/A

## License

N/A


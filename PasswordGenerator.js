const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", 
"8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 16
let generateButton = document.getElementById("generate-btn")
let passwordField1 = document.getElementById("pfeild1")
let passwordField2 = document.getElementById("pfeild2")


generateButton.addEventListener("click", generateRandomPassword)     // trying to add an event listener to generate button


function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)    // trying to get a a random char
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""                            //trying to make generated 16 length password go into pfield 1
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    passwordField1.textContent = randomPassword
     
}

function generateRandomPassword2() {
    let randomPassword = ""                            //trying to make generated 16 length password go into pfield 2
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    passwordField2.textContent = randomPassword
    
}


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const charSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const charNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let lengthEl = document.getElementById("flenght")
let symbolEl = document.getElementById("fsymbols")
let numberEl = document.getElementById("fnumbers")
let option1El = document.getElementById("option1")
let option2El = document.getElementById("option2")

function getPassword() {

    let value = parseInt(lengthEl.value) 
    option1El.textContent = ""
    option2El.textContent = ""
    for (let i = 0; i < value; i++) {
        if (symbolEl.checked === true && numberEl.checked === true) {
            let firstOption = Math.floor(Math.random() * characters.length)
            let secondOption = Math.floor(Math.random() * characters.length)          
            option1El.textContent += characters[firstOption]
            option2El.textContent += characters[secondOption]
        }
        else if (symbolEl.checked === false && numberEl.checked === true) {
            let firstOption = Math.floor(Math.random() * charNumbers.length)
            let secondOption = Math.floor(Math.random() * charNumbers.length)           
            option1El.textContent += charNumbers[firstOption]
            option2El.textContent += charNumbers[secondOption]
        } else if (symbolEl.checked === true && numberEl.checked === false) {
            let firstOption = Math.floor(Math.random() * charSymbols.length)
            let secondOption = Math.floor(Math.random() * charSymbols.length)           
            option1El.textContent += charSymbols[firstOption]
            option2El.textContent += charSymbols[secondOption]
        } else {
            let firstOption = Math.floor(Math.random() * letters.length)
            let secondOption = Math.floor(Math.random() * letters.length)           
            option1El.textContent += letters[firstOption]
            option2El.textContent += letters[secondOption]
        }
    }
}

option1El.onclick = function() {
    document.execCommand("copy");
}
  
option1El.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", option1El.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});

option2El.onclick = function() {
    document.execCommand("copy");
}
  
option2El.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", option2El.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});
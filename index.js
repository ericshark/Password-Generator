const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


btn1El = document.getElementById("output-1")
btn2El = document.getElementById("output-2")


function generate(){
    let result = ""
    for(let i = 0; i<15; i++){
        rand = Math.floor(Math.random() * characters.length)
        result+= characters[rand] 
    }
    return result
}


function create(){
    btn1El.textContent =  generate()
    btn2El.textContent = generate()
}
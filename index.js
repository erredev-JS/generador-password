const caracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678$@#"
let array = caracteres.split('')


function print(){
let password=""
let x = document.getElementById("input").value;
for (i = 0; i < x; i++) {    
    let num = Math.random() * array.length - 1
    num = parseInt(num.toFixed(0))    
    let letra =  array[num]
    password += letra    
    }document.getElementById("txt").innerHTML = password
}

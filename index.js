const caracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678$@#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678$@#"
let array = caracteres.split('')
let largoo = array.length

function print(){
let password=""
let x = document.getElementById("input").value;
for (i = 0; i < x; i++) {    
    let num = Math.random() * array.length
    num = parseInt(num.toFixed(0))    
    let letra =  array[num]
    password += letra    
    }document.getElementById("txt").innerHTML = password
}

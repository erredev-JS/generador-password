const caracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678$@#"
let array = caracteres.split('')
console.log(array)

function print(){
let password=""
let x = document.getElementById("input").value;
for (i = 0; i < x; i++) {    
    let num = Math.floor(Math.random() * array.length + 1)    
    let letra =  array[num]
    password += letra    
    }document.getElementById("txt").innerHTML = password
}

const readlineSync = require('readline-sync');
let num1 = readlineSync.question("Ingrese un numero entero: ");
if(num1 > 0&&(num1%2)==0){
    console.log("El numero es positivo y par")
}
else if(num1 > 0&&(num1%2)!=0){
    console.log("El numero es positivo e impar")
}
else if(num1 < 0){
    console.log("El numero es negativo")
}
else{
    console.log("El numero es cero")
}
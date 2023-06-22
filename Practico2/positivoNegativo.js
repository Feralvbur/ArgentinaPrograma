const readlineSync = require('readline-sync');
let num1 = readlineSync.question("ingrese un numero: ");

if(num1>0){
    console.log("El numero es positivo")
}
else if(num1==0){
    console.log("El numero es cero")
}

else{
    console.log("El numero es negativo")
}
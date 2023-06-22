const readlineSync = require('readline-sync');
let num = readlineSync.question("Ingrese su edad: ");
let edad = num;
if(edad >= 18){console.log("Eres mayor de edad");}
else{console.log("Eres menor de edad");}
const readlineSync = require('readline-sync');
let num1 = readlineSync.question("ingrese un numero entero del 1 al 12: ");
let meses = [" ","enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
let dias =  [" ","31","28","31","30","31","30","31","31","30","31","30","31"]
if(num1 > 0&&num1 <= 12){
console.log( "La cantidad de dias del mes de", meses[num1],"es", dias[num1])
}

else{
    console.log("Porfavor ingrese un numero dentro de los rangos indicados.")
}
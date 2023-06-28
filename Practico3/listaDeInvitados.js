let lista = ["Jose","Maria","Juan","Andres","Lionel","Sofia","Leandro","Emilia"];
let rechazados = [ ];
let admitidos = [ ];
let num1 = [ ];
for(let i = 0;i <= 7;i++){
    if(lista[i] ==="Jose" || lista[i] === "Sofia" ){
    num1 = lista[i];
    rechazados.push(num1);
              }
      else{
        num1 = lista[i];
        admitidos.push(num1);
          }
}
console.log("La lista de invitados rechazados es:");
for(let i = 0;i <= 1;i++){
console.log(rechazados[i]);
}
console.log("La lista de invitados admitidos es:");
for(let i = 0;i <= 5;i++){
  console.log(admitidos[i]);
  }
 
  //ejercicio extra
  console.log("La lista ordenada de invitados admitidos es:");


 let ordenado = admitidos.sort()
 for(let i = 0;i <= 5;i++){
console.log(ordenado[i]);
}
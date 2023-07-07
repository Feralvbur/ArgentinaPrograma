function obtenerJugadaComputadora() {
    let numeroAleatorio = Math.floor(Math.random() * 3);
    
    if (numeroAleatorio === 0) {
      return "piedra";
    } 
    else if (numeroAleatorio === 1) {
      return "papel";
    } 
    else {
        return "tijeras";
        
    }

  }

function obtenerJugadaUsuario(){
    const readlineSync = require('readline-sync');
let pregunta = readlineSync.question("Elige entre piedra,papel o tijeras: ");

return pregunta;
}

function determinarGanador(jug1,jug2){
 
    if(jug1 == jug2){
        console.log("El resultado fue: Empate.");
    }
        else if((jug1 == "piedra"&&jug2 == "papel")||(jug1 == "tijeras" &&jug2 == "piedra")||(jug1 == "papel" && jug2 == "tijeras")){
            console.log("El resultado fue: Gana la computadora.");
        }
        else if((jug1 == "papel"&&jug2 == "piedra")||(jug1 == "piedra" &&jug2 == "tijeras")||(jug1 == "tijeras" && jug2 == "papel")){
            console.log("El resultado fue: Gana el usuario.");
        }
    }

    let yo = obtenerJugadaUsuario();
    let pc = obtenerJugadaComputadora();
    console.log("La computadora eligio:", pc + ".","\nEl usuario eligio:", yo + ".");
    determinarGanador(yo,pc)
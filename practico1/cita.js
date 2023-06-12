var cita = "Tres tristes tigres comen trigo en un trigal";
var substring = "tigres comen trigo";
var tamañoDeCita =(cita.length);
console.log("El tamaño de la cita es: "+tamañoDeCita);
cita.slice(13,19); //lo que utilizo para saber el indice de substring
var indice = 13;
console.log("El indice del substring es: "+indice);
var citaRevisada = (cita.replace(" en un trigal",""))
console.log(citaRevisada)
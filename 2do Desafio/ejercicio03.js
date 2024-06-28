//3. Crea un sistema de puntuación para un juego.
//Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
//En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntosUsuario = prompt('ingrese puntuacion');
console.log("puntuacion requerida: 100")
console.log(`puntuacion conseguida ${puntosUsuario} `)
if(puntosUsuario >= 100){
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intentalo nuevamente para ganar.")
}
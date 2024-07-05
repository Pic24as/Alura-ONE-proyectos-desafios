//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numeroUsuario = prompt('ingrese numero: ')
if(numeroUsuario > 0){
    alert("su numero es positivo")
} else if (numeroUsuario < 0) {
    alert("su numero es negativo")
} else {
    alert("su numero es 0")
}
//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaUsuario = prompt('que dia de la semana es?');
if (diaUsuario == 'sabado' || diaUsuario == 'domingo'){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!")
}
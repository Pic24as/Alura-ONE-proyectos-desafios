//8. Crea una variable "numero" y solicita un valor con prompt. 
//Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = parseInt(prompt("ingrese un numero:"));
if(numero>0){
    alert("su numero es positivo");
}else if(numero<0){
    alert("su numero es negativo");
}else{
    alert("su numero es 0");
}
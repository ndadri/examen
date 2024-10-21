var numero = prompt("Ingrese un numero: ");
//6= 1,2,3= 6
var acumula = 0;


for (var i = 1; i < numero; i++) {//inicio de bucle
    
    if
        (numero % i == 0) {//operacion para verificar si los numeros son divisibles
        document.write("Los numeros divisibles son: ", i, "<br>");
        acumula = acumula + i
    }
}

//condicion para verificar si el numero es perfecto con un acumulador
if (numero == acumula) {
    document.write("El numero es perfecto");
} else {
    document.write("No lo es");
}



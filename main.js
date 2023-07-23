let numero1 = parseFloat(prompt("Ingrese un Numero, sino escriba salir"));
let operacion = prompt("coloque la operacion que desee realizar");
let numero2 = parseFloat(prompt("ingrese el otro numero."));


while(numero1 != "salir"){
    if (operacion === "+"){
    alert ("El Valor es igual a " + Number(numero1+numero2));
    } else if (operacion === "-"){
    alert ("El Valor es igual a " + Number(numero1-numero2)); 
    } else if (operacion === "/"){
    alert ("El Valor es igual a " + Number(numero1/numero2));
    }else if (operacion === "*"){
    alert ("El Valor es igual a " + Number(numero1*numero2));
    }else {
    alert ("No Ingreso numeros u operacion soportada.")
    }   
    numero1 = parseFloat(prompt("Ingrese un Numero, sino escriba salir")); 
    operacion = prompt("coloque la operacion que desee realizar");
    numero2 = parseFloat(prompt("ingrese el otro numero, sino escriba salir."));
} 

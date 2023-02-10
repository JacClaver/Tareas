//Programa que recibe el No. de mes del año
//y devuelve qué estación del año corresponde

var mes = '1'; //sirve para guardar el número de mes

//Ciclo para repetir el programa hasta que se ingrese un número de 
//mes inválido
//Noprotect
while(mes == '1' || mes == '2' || mes == '3' || mes == '4' || mes == '5' || mes == '6'|| mes == '7'|| mes == '8'|| mes == '9'|| mes == '10'|| mes == '11'|| mes == '12'){
  //Solicitud de datos al usuario
  mes = prompt("Ingrese un número que identifique un mes del año (1 - 12): ");
  if(mes != '1' && mes != '2' && mes != '3' && mes != '4' && mes != '5' && mes != '6' && mes != '7' && mes != '8' && mes != '9' && mes != '10' && mes != '11' && mes != '12'){
   alert("Valor Inválido");
    
  }else{
    if(mes == '12' || mes == '1' || mes == '2'){
      alert("Es Invierno");
    }else{
      if(mes == '3' || mes == '4' || mes == '5'){
        alert("Es Primavera");
      }else{
        if(mes == '6' || mes == '7' || mes == '8'){
          alert("Es Verano");
        }else{
          if(mes == '9' || mes == '10' || mes == '11'){
            alert("Es Otoño")
          }
        }
      }
    }
    
  }  
 
}
 alert("Julio Alejandro Clavería Samayoa; 18002142")
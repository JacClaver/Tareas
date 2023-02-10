Solución a Calculadora Estaciones

Se solicita al usuario el número que identifica a 
uno de los meses del año (1 - 12)

Como prompt devuelve un string, 
se evalúa:

si el string devuelto por prompt
es "12", "1" o "2"
para mostrar alerta "Es Invierno"

si el string devuelto por prompt
es "3", "4", o "5"
para mostrar alerta "Es Primavera"

si el string devuelto por prompt
es "6", "7" o "8"
para mostrar alerta "Es Verano"

si el string devuelto por prompt
es "9", "10" u "11"
para mostrar alerta "Es Otoño"

La evaluación anterior se incluyó dentro de un 
ciclo con la condición:
mientras el string devuelto por prompt
sea igual a "1". o "2" o...o "12" se hace la evaluación.
El ciclo terminará si cualquier string devuelto por
prompt es distinto de "1" y "2" y...y "12".

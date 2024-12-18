Calculadora estadística
Uso de métodos avanzados de array

* `string.split(",")` -> separa un array por el argumento y lo convierte en un array. Puede recibir por argumento un caracter o un RegEx
* `array.map(callback)` -> crea un nuevo array del array existente, según la salida de la callback
`array.map(el=>Number(el))` en un array de strings que son Números, esta funcion crea un nuevo array con los string parseados a numeros usando el constructor __Number()__
* `array.filter(callback)` -> crea un nuevo array con los datos filtrados del array original
`numbers.filter(el=>!isNaN(el))` en un array de números, si algun valor no corresponde con número podemos filtrando con la funcion `isNaN(dato)` que devuelve true si el argumento NO es un numero
* `array.reduce(callback)` -> devuelve un unico valor de un array aplicando los metodos del callback. Se usa para acumulaciones y otras acciones de concatenacion que pueden devolver un unico valor.
    `array.reduce((acc, el) => acc + el, 0)` ( (accumulador, elemento) => operacion, valor de retorno inicial)
* `array.sort()` El método `.sort()` de arrays ordena de forma alfabética, por lo que NO funciona de forma estandar con cifras de más de dos dígitos porque primero las convierte en string y las ordena de forma alfabética, donde 10 va antes que 2.
    Sin embargo puede recibir por parámetro una callback y devolver 1, -1 o 0 para resolver el orden de los elementos `array.sort((a,b)=>a-b)` esto ya ordenaría correctamente los valores de forma ascendente
* El uso de `.sort()` modifica directamente el array original, lo que no se considera buena práctica.
En lugar de eso vamos a usar `array.toSorted()` que crea un nuevo array sin modifcar el original
* `array.forEach(callback)` -> bucle que repite la funcion de calback para cada elemento del array, que se suele pasar como parámetro `array.forEach((elemento)=>{lógica aplicable})`
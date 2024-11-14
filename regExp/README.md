Filtro de correos spam usando Expresiones regulares

* `cadenaTexto.match(regex)` devuelve un array con las coincidencias o null
`const resultado = "hola mundo".match(/mundo/); // ["mundo"]`
* `regex.test(cadenaTexto)` devuelve un booleano si hay o no coincidencias
`const existe = /mundo/.test("hola mundo"); // true`

###FLAGS
* regex = /expresion/`i` -> ignora mayúsculas y minúsculas
* regex = /expresion`|`otraExpresion/ -> busca si hay coincidencia a uno u otro lado de `|`

Filtro de correos spam usando Expresiones regulares

* `cadenaTexto.match(regex)` devuelve un array con las coincidencias o null
`const resultado = "hola mundo".match(/mundo/); // ["mundo"]`
* `regex.test(cadenaTexto)` devuelve un booleano si hay o no coincidencias
`const existe = /mundo/.test("hola mundo"); // true`

###FLAGS
* regex = /expresion/`i` -> ignora mayúsculas y minúsculas en toda la expresión
* regex = /expresion/`g` -> busca todas las coinicidencias de manera "global", no solo la primera que encuentre
* regex = /a`(?i)`bC/ -> ignora mayúsculas y minúsculas __después__ de su aparición
* regex = /expresion`|`otraExpresion/ -> busca si hay coincidencia a uno u otro lado de `|`
* regex = /`[`aeiou`]`/ -> los `[]` delimitan una lista con la que comparar
* regex = /`[`a-z`]`/ -> además de una lista se puede poner un rango usando el `-`
* regex = /[a-z]`+`/ -> `+` para buscar "al menos una vez" la coincidencia
* regex = /[a-z]`{n}`/ -> busca una coincidencia de `n` veces (palabras de n letras, cifras de n dígitos)
* regex = /\s`*`\d/ -> cualquier número de coinidencias de la expresion anterior
* regex= /hol`(`a|i`)` amigo/ -> los `()` crean un "grupo de captura" que guarda el valor para posteriores operaciones
* regex= /hol(`?:`a|i) amigo/ -> el `?:` despues de abrir el grupo especifica un grupo NO capturante, evalúa la condición de `|` pero no guarda el resultado.
* regex= /colou`?`r/ -> `?` define su anterior expresion como opcional (color y colour)
* `^` -> tiene dos usos.
    - Fuera de un conjunto `/^hola/` indica que tiene que coincidir al _principio_ de una cadena o línea
    - Dentro de corchetes se usa como negación `/[^aeiou]` (No sea vocal)
* regex = /amigo`$`/ -> busca coincidencia solo al _final_ de frase o cadena
* regex = /a`.`b/ -> cualquier caracter escepto saltos de línea, es un comodín (acb, a1b, a_b) pasan el test
Para usar como caracter específico hay que usar el `\` para escapar el caracter `\.`
* `\b` -> límite de inicio o final de palabra, frontera entre palabras
* `\s` -> espacios en blanco, tabs y saltos de linea
* `\S` -> cualquier caracter que __NO__ sea espacios en blanco, tabs y saltos de linea
* `\d` -> cualquier dígito, equivalente a [0-9]
* `\D` -> cualquier caracter que __NO__ sea dígito
* `\w` -> cualquier caracter de palabra, letras mayus y minus, digitos y gión bajo _




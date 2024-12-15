Estudio de diferenets algoritmos de ordenamiento, usando para el ejemplo un array con números

* __Bubble sort__ Ordenamiento de burbuja.
    Un bucle recorre la coleccion múltiples veces, comparando los valores de 2 en 2 e intercambiando sus posiciones según su valor hasta que los elementos quedan ordenados
* __Selection sort__ Ordenamiento por selección.
    Un blucle recorre la colección buscando el valor más bajo e intercambiándolo por el de la primera posición. Despés busca el segundo valor más bajo y lo intercambia por el de la segunda posición y así hasyta ordenar toda la colección.
* __Insertion Sort__ Orfdenamiento por inserción.
    Se parte de la base de que el primer elemento ya se encuenta "ordenado" y después se miran los siguintes elementos y se van insertando en la posición que les corresponda, con respecto al primero, desplazando el resto hacia el final si es necesario.
    Realiza menos intercambios que el anterior y resulta algo más eficiente
* __.sort()__ El método `.sort()` de arrays ordena de forma alfabética, por lo que NO funciona de forma estandar con cifras de más de dos dígitos porque primero las convierte en string y las ordena de forma alfabética, donde 10 va antes que 2.
    Sin embargo puede recibir por parámetro una callback y devolver 1, -1 o 0 para resolver el orden de los elementos `array.sort((a,b)=>a-b)` esto ya ordenaría correctamente los valores de forma ascendente
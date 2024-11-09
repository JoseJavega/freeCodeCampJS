const inputNumber = document.getElementById("number");
const btnConvert = document.getElementById("convert-btn");
const divOutput = document.getElementById("output");

const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const equivalencia = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
};

const convertToRoman = () => {
    let numero = parseInt(inputNumber.value);
    let numeroRomano = "";
    //descomponemos el numero segun el array de valores[]
    valores.forEach(valor => {
        while (numero >= valor) {
            numeroRomano += equivalencia[valor];
            numero -= valor;
        };
    });
    //Pasamos el resultado al div
    divOutput.innerText = numeroRomano;
}

const checkUserInput = () => {

    if (inputNumber.value == "") {
        divOutput.innerText = "Introduce un número válido";
        return;
    };
    if (inputNumber.value < 0) {
        divOutput.innerText = "Introduce un número mayor o igual a 1";
        return;
    };
    if (inputNumber.value >= 4000) {
        divOutput.innerText = "Introduce un número menor o igual a 3999";
        return;
    };

    convertToRoman();
};


btnConvert.addEventListener("click", checkUserInput);

//--------------------------------------------
// OTRA FORMA USANDO METODOS DE ARRAY map() Y sort() Y LA PROPIEDAD DE Objetc.keys
//--------------------------------------------
// const convertToRoman = () => {
//     let numero = parseInt(inputNumber.value);
//     let numeroRomano = "";

//     // Obtenemos las claves del objeto equivalencia y las ordenamos de mayor a menor
//     Object.keys(equivalencia)
//         .map(Number) // Convertimos las claves a números
//         .sort((a, b) => b - a) // Orden descendente
//         .forEach((valor) => {
//             while (numero >= valor) {
//                 numeroRomano += equivalencia[valor];
//                 numero -= valor;
//             }
//         });

//     // Mostrar el resultado
//     divOutput.innerText = `El número en romano es: ${numeroRomano}`;
// };
// 1. Detectar números enteros positivos
// Crea una expresión regular que coincida con cadenas que representen números enteros positivos (por ejemplo, "123", pero no "-123" o "123.45").
const positiveNum = /^[0-9]+$/;

// 2. Validar direcciones de correo electrónico
// Escribe una expresión regular que coincida con direcciones de correo electrónico válidas. Ejemplo: "usuario@dominio.com", pero no "usuario@@dominio" o "usuario@.com".
const validEmail= /^[a-z]+[0-9]?@[a-z]+\.[a-z]+$/i;

// 3. Buscar palabras que comiencen con una vocal
// Crea una expresión regular que encuentre todas las palabras en una cadena que comiencen con una vocal (a, e, i, o, u), ya sea en mayúscula o minúscula.
const vocalStart= /\b[aeiou][a-z]*\b/i;

// 4. Validar un número de teléfono
// Crea una expresión regular que valide números de teléfono en el formato +34-123-456-789 o 123-456-789, pero no permita letras o formatos incorrectos como 123456789.


// 5. Detectar cadenas que terminen en ".jpg" o ".png"
// Escribe una expresión regular que coincida con nombres de archivo que terminen en .jpg o .png. Por ejemplo: "imagen.jpg" y "foto.png", pero no "documento.txt".
const imageExtension = /\w+(\.jpg|\.png)$/;

// 6. Verificar que una cadena contenga solo letras y espacios
// Crea una expresión regular que coincida con cadenas que contengan solo letras (mayúsculas o minúsculas) y espacios. Por ejemplo, "Hola Mundo" sería válido, pero "Hola123" no.
const letrasEspacios = /^[a-zA-Z\s]+$/

// 7. Extraer etiquetas HTML
// Escribe una expresión regular que detecte y extraiga etiquetas HTML en una cadena. Por ejemplo, de <div>Hola</div> debería identificar las etiquetas <div> y </div>.


// 8. Detectar palabras de exactamente 5 letras
// Crea una expresión regular que encuentre palabras de exactamente 5 letras en una cadena. Por ejemplo, en "Hola mundo desde JavaScript", debería coincidir con "mundo".
const cincoLetras = /\b[a-z]{5}\b/ig;

// 9. Validar una fecha en formato DD/MM/YYYY
// Escribe una expresión regular que valide cadenas en formato de fecha DD/MM/YYYY. Por ejemplo, "25/12/2023" sería válido, pero "2023/12/25" o "25-12-2023" no.
const formatoFecha = /^\d{2}\/\d{2}\/\d{4}$/; // Para validar fechas aisladas
const formatoFecha= /\b\d{2}\/\d{2}\/\d{4}\b/; // Para validar fechas dentro de frases


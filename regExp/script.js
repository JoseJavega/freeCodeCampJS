const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

//Expresiones regulares
const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ dollars/i;
//array de expresiones para compararlas todas
const denyList = [helpRegex, dollarRegex];
//se comprueba si el msg coincide con alguna de las expresiones regulares de la lista deny
const isSpam = (msg) => denyList.some(regex => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
    if (messageInput.value == "") {
        alert("Please enter a message.");
        return;
    }
    result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";
    messageInput.value = "";
});
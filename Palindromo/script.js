const textInput=document.getElementById('text-input');
const btnCheck=document.getElementById('check-btn');


const clearString=(inputString)=>{
    const validString='abcdefghijklmnñopqrstuvwxyz1234567890';
    let stringCleaned="";

    for (let i=0; i<inputString.length; i++){
        if (validString.includes(inputString[i])){
            stringCleaned+=inputString[i];
        }
    }
    return stringCleaned;
}

const isPalindrome=(string)=>{
    let palindrome=true;
    let i=0;
    while(i<string.length && palindrome){
        if(string[i]!=string[string.length -1 -i]){
            palindrome=false;
        }
        i++;
    }
    return palindrome
   
}

const checkPalindrome=()=>{
    if (textInput.value.length==0){
        alert("Please input a value");
        return;
    }

    const resultado=document.getElementById('result');

    const palindrome=isPalindrome(clearString(textInput.value.toLowerCase()));
    if (palindrome){
        resultado.innerText=`${textInput.value}  is a palindrome`;
    }else {
        resultado.innerText=`${textInput.value}  is not a palindrome`;
    }
}

btnCheck.addEventListener("click", checkPalindrome);
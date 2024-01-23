//Variables
let attempts = 1;
let listOfNumbers = [];
let numbergreater = 10;

//Funciones manuales
// let title = document.querySelector('h1');
// title.innerHTML = "Game of the secret number ";

// let text = document.querySelector('p');
// text.innerHTML = "Insert a number from 1 to 10";

// let button1 = document.querySelector('#intentar');
// onclick.button1 = "hola mundo";


//Función generico para el texto 
function textoGenerico(element, text){
   let genericText =  document.querySelector(element);
   genericText.innerHTML = text; 
}

textoGenerico('h1','Game of the secret number');
textoGenerico('p', 'Insert a number from 1 to 10');


function generateSecretNumber(){
    let generatedNumber = Math.floor(Math.random()*numbergreater)+1;
    console.log(generatedNumber);
    console.log(listOfNumbers);

    if(listOfNumbers.length == numbergreater){
        textoGenerico('p','Ya se sortearon todos los números posibles');
    }else{
    //si el número generado esta en la lista se hace lo siguiente: 
        if (listOfNumbers.includes(generatedNumber)){
            return generateSecretNumber();
        }else{
            listOfNumbers.push(generatedNumber);
            return generatedNumber;
        }

    }

    
}

let numeroSecreto = generateSecretNumber();


function verificarIntento(){
         
    let numberUser = parseInt(document.getElementById('valorUser').value);

    

    if (numberUser === numeroSecreto){
        textoGenerico('p',`you got the right number on ${attempts} ${(attempts == 1) ? 'attempt' : 'attempts'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else if(numberUser > numeroSecreto){
        textoGenerico('p','the number is lesser');
    }else{
        textoGenerico('p','the secret number is greater');
    } 

    attempts += 1;
    clearBox(); 
}

function clearBox(){
    let valorBox = document.querySelector('#valorUser');
    valorBox.value= '';
    // document.querySelector('#valorUser').value='';
    
}

function initialFunctions(){
    textoGenerico('p', `Insert a number from 1 to ${numbergreater}`);
    numeroSecreto = generateSecretNumber();
    attempts = 1; 
}

function reiniciarJuego(){
    clearBox();
    initialFunctions();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
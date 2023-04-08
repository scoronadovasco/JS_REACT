var h1 = document.querySelector('h1')
let formu = document.getElementById('formulario1')
var result = document.querySelector('#result') 
let input1 = document.querySelector('#calculo1')
let input2 = document.querySelector('#calculo2')
let Btncal = document.querySelector('#btncalcular ')


function summarinpuntValues(event){
    event.preventDefault();
    let sumainp =parseInt(input1.value) + parseInt( input2.value);
    result.innerText= 'Resultado :' + sumainp;

}

formu.addEventListener('submit',summarinpuntValues)

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('#pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');


form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    // console.log({event});
    event.preventDefault();
    const total = input1.value + input2.value;
    resultado.innerText = `El resultado es: ${total}`;
}

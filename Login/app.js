import {app} from './firebase.js'

console.log(app);



const btnCrearCuenta=document.querySelector("#btnCrearCuenta");
btnCrearCuenta.addEventListener('click', (e)=>{
    e.preventDefault();
    const email=document.querySelector("#crearEmail").value;
    const password=document.querySelector("#crearPassword").value;
    console.log(email,password);
});
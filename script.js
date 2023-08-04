const horas = document.getElementById('horas');
const segundos = document.getElementById('segundos');
const minutos = document.getElementById('minutos');

const relogio = setInterval(function time (){
    let dateToday = new Date ();
    let hora = dateToday.getHours();
    let seg = dateToday.getSeconds();
    let min = dateToday.getMinutes();

    if (hora < 10) hora = '0' + hora;
    if (hora < 10) min = '0' + min;
    if (hora < 10) seg = '0' + seg;

    horas.textContent = hora;
    segundos.textContent = seg;
    minutos.textContent = min;
})
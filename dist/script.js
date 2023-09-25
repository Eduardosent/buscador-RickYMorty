//contabilidad
function estadoDeResultados() {
    const aviso1 = document.querySelector('.formulariof');
    let it = document.querySelector('.ingresostotales').value;
    let cdv = document.querySelector('.costodeventas').value;
    let gdv = document.querySelector('.gastosdeventas').value;
    let gda = document.querySelector('.gastosdeadministracion').value;
    let gf = document.querySelector('.gastosfinancieros').value;
    let go = parseFloat(gda) + parseFloat(gdv) + parseFloat(gf);
    let utilidadDeLaOperacion = (parseFloat(it) - parseFloat(cdv)) - go;
    let tipSoc = document.getElementById('sociedad-tipo').value;
    let ReservaLegal = utilidadDeLaOperacion * tipSoc;
    const utilityBeforeISR = utilidadDeLaOperacion - parseFloat(ReservaLegal);
    it <= 150000 ? isr = 0.75 : isr = 0.7;
    const execiseUtlity = utilityBeforeISR * isr;

    if(!it || !cdv || !gdv || !gda || !gf) {
        const resultadoEstadoe = document.createElement('h3');
        resultadoEstadoe.classList.add('problema');
        resultadoEstadoe.textContent = `Por favor llene todos los campos `;

        aviso1.appendChild(resultadoEstadoe);

        setTimeout( () => {
            resultadoEstadoe.remove();
        },3500);
    }
    else {
        const resultadoEstado = document.createElement('h3');
        resultadoEstado.classList.add('resultado');
        resultadoEstado.textContent = `La Utilidad del ejercicio es de $${execiseUtlity.toFixed(2)}`;

        aviso1.appendChild(resultadoEstado);

        setTimeout( () => {
            resultadoEstado.remove();
        },3500);
    }
}

function salarioNeto() {

    const aviso2 = document.querySelector('.formularios')

    let sueldo = document.querySelector('.sueldo').value;
    const isss = (sueldo * 0.03).toFixed(2);
    const afp = (sueldo * 0.0725).toFixed(2);
    const salarioN = parseFloat(sueldo) - (parseFloat(isss) + parseFloat(afp));

    if(!sueldo) {
        const resultadosalarioe = document.createElement('h3');
        resultadosalarioe.textContent = `Por favor escriba un salario`;
        resultadosalarioe.classList.add('problema');

        aviso2.appendChild(resultadosalarioe);

        setTimeout( () => {
            resultadosalarioe.remove();
        },12000);
    }else {
        if(salarioN <= 472.00) { excedente = 0; porcentajeISR = 0; cuotaFija = 0; } 
        else if(salarioN <= 895.24) { excedente = 472.00; porcentajeISR = 0.1; cuotaFija = 17.67; }
        else if(salarioN <= 2088.10) { excedente = 895.24; porcentajeISR = 0.2; cuotaFija = 60.00; }
        else if(salarioN >= 2088.11) { excedente = 2038.57; porcentajeISR = 0.3; cuotaFija = 288.57; }
        const isrTotal = (parseFloat(((salarioN - excedente) * porcentajeISR).toFixed(2))+parseFloat(cuotaFija)).toFixed(2);
        const salarioLibre = (salarioN - isrTotal).toFixed(2);

        const resultadosalario = document.createElement('h3');
        resultadosalario.textContent = `Su descuento de AFP es $${afp}, su ISSS es $${isss}, su ISR es $${isrTotal}, entonces su salario libre de descuentos es$${salarioLibre}`  ;
        resultadosalario.classList.add('resultado');

        aviso2.appendChild(resultadosalario);

        setTimeout( () => {
            resultadosalario.remove();
        },15000);
    }
  }
        


//figuras
function areaTriangulo() {
    let base = document.querySelector('.base-t').value;
    let altura = document.querySelector('.altura-t').value;
    const area = parseFloat(base*altura) / 2;

    if(!base || !altura ) {
        const avisoTe = document.createElement('h3');
        avisoTe.textContent = `por favor llene todos los campos`;
        avisoTe.classList.add('problema');

        const figuraT = document.querySelector('.figura-t')
        figuraT.appendChild(avisoTe);

        setTimeout( ()=>{
            avisoTe.remove();
        },6000);
    }else {
        const avisoT = document.createElement('h3');
        avisoT.textContent = `El area del triangulo es de ${area}`;
        avisoT.classList.add('resultado');

        const figuraT = document.querySelector('.figura-t')
        figuraT.appendChild(avisoT);

        setTimeout( ()=>{
            avisoT.remove();
        },6000);
    }
}

function areaCirculo() {
    const figuraC = document.querySelector('.figura-c')
    let radio = document.querySelector('.radio-c').value;
    let radioTotal = radio*radio;
    const areaC = parseFloat(3.1416 * radioTotal);

    if(!radio ) {
        const avisoCe = document.createElement('h3');
        avisoCe.textContent = `por favor coloque el radio del circulo`;
        avisoCe.classList.add('problema');

        figuraC.appendChild(avisoCe);

        setTimeout( ()=>{
            avisoCe.remove();
        },6000);
    }else {
        const avisoC = document.createElement('h3');
        avisoC.textContent = `El area del Circulo es ${areaC}`;
        avisoC.classList.add('resultado');

        figuraC.appendChild(avisoC);

        setTimeout( ()=>{
            avisoC.remove();
        },6000);
    }
}

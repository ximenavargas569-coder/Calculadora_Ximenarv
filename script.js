const campoNum1 = document.getElementById("num1");
const campoNum2 = document.getElementById("num2");
const botonsumar = document.getElementById("btn-sumar");
const elementoResultado = document.getElementById("resultado");

function realizarSuma() {

    let valor1 = campoNum1.value;
    let valor2 = campoNum2.value;

    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);

    const sumaTotal = numero1 + numero2;

    elementoResultado.textContent = sumaTotal;

    console.log(`sumando ${numero1} + ${numero2} = ${sumaTotal}`);
}

botonsumar.addEventListener("click", realizarSuma);
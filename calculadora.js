function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

sumar (5, 3);
restar (5, 3);

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}
/***********************************
 *         Pipe y Compose         *
***********************************/

const calculaRadio = ({ diametro }) => diametro / 2

const calculaRadioAlCubo = radio => radio ** 3

const multiplicaPorPi = pi => radioAlCubo => radioAlCubo * pi

const multiplicaPorCuatroTercios = total => total * (4/3)

const imprimeResultado = volumen => console.log(volumen) 

const PI = 3.1416
/**
 * Compose se ejecuta de derecha a izquierda
 * 
 * const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);
 * 
 * Aplicando compose
 * 
 * const calculaVolumenEsfera = ({ diametro }) => {
 *     compose(
 *         imprimeResultado, 
 *         multiplicaPorCuatroTercios,
 *         multiplicaPorPi(PI),
 *         calculaRadioAlCubo,
 *         calculaRadio
 *     )(diametro)
 * }
 * 
 */

// Pipe se ejecuta de izquierda a derecha
const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);

// Aplicando pipe
const calculaVolumenEsfera = 
    pipe(
        calculaRadio,
        calculaRadioAlCubo,
        multiplicaPorPi(PI),
        multiplicaPorCuatroTercios,
        imprimeResultado
    )// ({ diametro: 14}) implicitamente se pasa el parametro a pipe, 
    // esto se llama programación tácita o point free  

calculaVolumenEsfera({ diametro: 14})
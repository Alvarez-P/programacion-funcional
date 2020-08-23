/***********************************
 *    Composicion de funciones    *
***********************************/

const calculaRadio = diametro => diametro / 2

const calculaRadioAlCubo = radio => radio ** 3

const multiplicaPorPi = pi => radioAlCubo => radioAlCubo * pi

const multiplicaPorCuatroTercios = total => total * (4/3)

const imprimeResultado = volumen => console.log(volumen) 

const PI = 3.1416

/**
 *  Sin composicion de funciones
 * 
 * const calculaVolumenEsfera = ({ diametro }) => {
 *     const radioCalculado = calculaRadio(diametro)
 *     const radioAlCubo = calculaRadioAlCubo(radioCalculado)
 *     const radioPorPi = multiplicaPorPi(PI)(radioAlCubo)
 *     const volumen = multiplicaPorCuatroTercios(radioPorPi)
 *     imprimeResultado(volumen)
 * }
 * 
*/


// Con composicion de funciones
const calculaVolumenEsfera = ({ diametro }) => 
    imprimeResultado(multiplicaPorCuatroTercios(multiplicaPorPi(PI)(calculaRadioAlCubo(calculaRadio(diametro)))))

calculaVolumenEsfera({ diametro: 14 })

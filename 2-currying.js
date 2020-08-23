/***********************************
 *            Currying           *  
***********************************/

/**
 * Forma normal
 * 
 * const guardarDatos = function({ escuela, nombre }) {
 *      return `El alumno ${nombre} estudia en el ${escuela}`
 * }
 *
 * console.log(guardarDatos({ escuela: 'Tec', nombre: 'Adolfo'}))
 * console.log(guardarDatos({ escuela: 'Tec', nombre: 'Esteban'}))
*/

// Aplicando currying

const datos = {
    escuela: 'Tec',
}

const guardarDatos = ({escuela}) => ({nombre}) => `El alumno ${nombre} es de la escuela ${escuela}`
    
const guardaDatosFunction = guardarDatos(datos)
console.log(guardaDatosFunction({nombre: 'Adolfo'}))
console.log(guardaDatosFunction({nombre: 'Esteban'}))

// console.log(guardarDatos(datos)({ nombre: 'Adolfo'}))

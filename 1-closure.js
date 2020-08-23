/***********************************
 *            Closure           *  
***********************************/

const a = () => {
    let variableEnA = 2
    function b(){
        let variableEnB = 5
        console.log(variableEnB + variableEnA)
    }
    b()
}

a()
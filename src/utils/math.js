export const getAverageArrayValue = (numberArr = []) => {
    const accValue = numberArr.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    
    return accValue / numberArr.length
}

export const PI = 3.14

const MathObject = {
    PI,
    getAverageArrayValue,
}

export default MathObject
import Math, { getAverageArrayValue } from './utils/math'
import { attachHandlers } from './jquery/elements'

const numbers = [1,5,6,12,34]
const avgValue = getAverageArrayValue(numbers)
console.log(avgValue)
console.log(Math.PI)

window.Math = Math

attachHandlers()
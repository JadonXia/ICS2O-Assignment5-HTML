// These are the variables I will need to calculate area and circumference.
let d = 0
const r = d / 2
const ans1 = Math.PI * r ** 2
const ans2 = 2 * Math.PI * r

// This script will link my button to a function.
document.getElementById('button1').addEventListener('click', calculate)

// Next, we have to write the code for what the function 'calculate' does.
function calculate () {
  d = document.getElementById('text1').value
  d = parseInt(d)
  document.getElementById('results1').innerHTML = ans1
  document.getElementById('results2').innerHTML = ans2
}

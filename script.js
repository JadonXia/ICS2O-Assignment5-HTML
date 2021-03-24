// These are the variables I will need to calculate area and circumference.
let d = 0
let r = 0
let ans1 = 0
let ans2 = 0

// This script will link my button to a function.
document.getElementById('button1').addEventListener('click', calculate)

// Next, we have to write the code for what the function 'calculate' does.
function calculate () {
  d = document.getElementById('text1').value
  d = parseInt(d)
  r = d / 2
  ans1 = Math.PI * r ** 2
  ans2 = 2 * Math.PI * r
  document.getElementById('results1').innerHTML = ans1
  document.getElementById('results2').innerHTML = ans2
}

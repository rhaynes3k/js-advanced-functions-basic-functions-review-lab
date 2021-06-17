// Your code here
function saturdayFun(act = 'roller-skate') {
  return `This Saturday, I want to ${act}!`
}

let mondayWork = function (act = 'go to the office') {
  return `This Monday, I will ${act}.`
}

function wrapAdjective(vf = '*') {
  let vFlair = function (words = 'special') {
    return `You are ${vf}${words}${vf}!`
  }
  return vFlair
}

let Calculator = {
    add: function (num1, num2){
      return num1 + num2
    },
    subtract: function (num1, num2){
      return num1 - num2
    },
    multiply: function (num1, num2){
      return num1 * num2
    },
    divide: function (num1, num2){
      return num1 / num2
    }
}

let mathArr = [
  function mult (num){
    return num * 2
  },
  function add (num){
    return num + 1000
  },
  function mod (num){
    return num % 7
  }
]
let actionApplyer = (int, arr) => {
    if(arr.length === 0){
        return int
    }else {
        return mathArr[2](mathArr[1](mathArr[0](int)))
    }
}

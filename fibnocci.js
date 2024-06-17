let num1=0
let num2=1
let num3
const prompt=require('prompt-sync')();
let number=prompt(" enter a limit of number")
  for(let i=2;i<number;i++){
    num3=num1+num2
    console.log(num3)
    num1=num2
    num2=num3
  }
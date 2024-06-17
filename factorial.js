let fact=1
const prompt=require('prompt-sync')();
let num=prompt("enter the number ")
for(let i=1;i<=num;i++){
    fact=fact*i

}
console.log( " number factorial is: "+fact)
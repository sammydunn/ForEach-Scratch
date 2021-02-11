

let names = ['Billy','Rob','Conor','Ray'];
//this function takes in each element from the array
//it then logs each name into the statment i have made
names.forEach((names) => {
  console.log(`My favorite name is ${names}`)
});

let numbers = [3,6,9,23];
let sum = 0;

let sumFunction = async function (a,b) {
  return a + b
}

numbers.forEach(async function(number){
  sum = await sumFunction(sum, number)
})

console.log(sum)
//1
let number = 0
do {
  number+=1;
  console.log(number)
} while (number < 1000)



//2
let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};
//3
console.log(Object.keys(person));
//4
console.log(Object.entries(person));



//5
let ArrayOfpersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  },
  {
    firstName: "Sam",
    lastName: "Dunegan",
    birthDate: "Mar 12, 1997",
    gender: "Male"
  },
  {
    firstName: "Macy",
    lastName: "Ann",
    birthDate: "Jan 6, 1995",
    gender: "female"
  },
  {
    firstName: "Dan",
    lastName: "Allen",
    birthDate: "Dec 2, 1966",
    gender: "Male"
  }
]

//come back to number 6
let oddbirth = []
for(let element of ArrayOfpersons) {
  let odd = element.birthDate.slice(-4)
  if(odd / 2 == 1){
    oddbirth.push (element)
  }
}
console.log(oddbirth);


//7
let friend = (names) => {
  let AllNames = [names.firstName];
  return AllNames;
}

console.log(ArrayOfpersons.map(friend));


//8
let males = ArrayOfpersons.filter(i => i.gender == 'Male');
console.log(males);

//9 come back to
let ageCheck = (element) => {
  let year = element.birthDate.slice(-4)
  if (year < 1990) {
    return true
  }
}

console.log(ageCheck)

//10 will use the .filter() method

let ageCheckTwo = ArrayOfpersons.filter(function(element){
  return ageCheck(element)
})

console.log(ageCheckTwo)
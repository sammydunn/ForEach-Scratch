//***if you change the .find to .filter it will log all the 4 engine cars
//the .find will log the first one with the matching if statement

let cars = [
  {
    brand: 'jeep',
    color: 'silver'
  },
  {
    brand: 'GMC',
    color: 'Black'
  },
  {
    brand: 'Chevy',
    color: 'red'
  },
  {
    brand: 'BMW',
    color: 'Black'
  }
];

//I am creating a function that finds the car brand that has the color Black

function isBlack (cars) {
  return cars.color === 'Black';
}
//the .find will call on the array and return the 
//cars with the color black
console.log(cars.find(isBlack).brand);
// 'GMC''BMW'

//this function will call on the cars array for the brand with the color "silver"
function isSilver (cars) {
  return cars.color === 'silver';
}


//this will log the brand and the color of the car with the color "silver"
console.log(cars[cars.findIndex(isSilver)]);
// {brand: 'jeep', color: 'silver'}
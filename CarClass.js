
class car {
  //what is the efficency if this car
   mpg;
 
   //the capacity of the gas tank in gallons
   tankCapacity;
 
 //current fuel level in gallons
   fuelLevel = 0;
 
 //id for this car
   id;
 
 //number of miles the car has travelled
   odometer = 0;
 
   //this is the constructor
   //is called when new instance is constructed
   constructor(inputMpg, inputTankCapacity){
    let randomNumber = Math.floor((Math.random()*1000))
    this.id = randomNumber;
 
    this.tankCapacity = inputTankCapacity;
    this.mpg = inputMpg;
   
   }
 
 //write ma method that simulates fueling up
 addFuel(gallons){
 this.fuelLevel = this.fuelLevel + gallons;
 }
 
 //returns the number of miles this car can drive before running out of gas
 milesToEmpty(){
 return  this.mpg * this.fuelLevel;
 }
 
 //drive the car for x amount of miles
 drive(distance){
 this.odometer = this.odometer + distance;
 let fuelUse = distance / this.mpg;
 this.fuelLevel = this.fuelLevel - fuelUse;
 }
 
 

 OutOfGas () {
  if (this.fuelLevel > 0) {
    return true
  } else {
    return false
  }
}

 }
 
 
 
 let pinto = new car(26, 11);
 console.log('After constructor',pinto.fuelLevel);
 pinto.addFuel(3); // add 3 gallons of gas
 console.log('After adding fuel', pinto.fuelLevel);
 console.log("pinto will run out of gas in", pinto.milesToEmpty)
console.log(pinto.OutOfGas());

 //- drive() method so the car cannot go further than the amount of fuel allows
   // - addFuel() method so the car cannot take in more fuel than the tank capacity


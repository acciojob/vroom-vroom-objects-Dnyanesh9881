// Complete the js code
function Car(make, model) {}
Car.prototype.getMakeModel=()=> {
	return make+" "+model;
}

function SportsCar(make, model, topSpeed) {}
SportsCar.prototype.getTopSpeed=()=> {
	return topspeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

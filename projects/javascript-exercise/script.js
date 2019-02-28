var myName = 'Scarlet';
console.log ('My name is', myName)

var number = 3;
console.log ('My number is', number)

var number = '3';
console.log ('My number is', number)

var real = 'true';
console.log (real)

var first = ['s','c','a','r','l','e','t'];
console.log (first)

var data = [myName, number, 8];
console.log (data)

var lastName = 'Li';
var fullName = (myName + lastName);
console.log (fullName)

var hundred = 50 + 50;
console.log (hundred)

var firstLetter = first[0];
var lastLetter = first[first.length-1];

console.log (firstLetter, lastLetter)

var amount = ['supercalifragilisticexpialidocious'.length];
console.log (amount)

var firstLast = [myName.length == lastName.length]
console.log (firstLast)

var students = 14;
if (students  >16){
	var allHere = 'All students are here';
}
else{
	var notHere = 'Not everyone is here';
}
console.log (allHere || notHere)

for (var i = 0; i < first.length; i++){
console.log (first)
}

var date = new Date;
var hour = date.getHours();

if ( hour == 0 ) {
  console.log("It's midnight");
} else if ( hour > 7 && hour < 9.40 ) {
  console.log("It's between 7 and 9:40");
} else {
  console.log("It's not between 7 and 9:40");
}

var day = date.getDay();
if (day == 1){
	console.log('Its monday');
} else if (day ==2){
	console.log('Its tuesday');
} else if (day ==3){
	console.log('Its wednesday');
} else if (day ==4){
	console.log('Its thursday'); 
} else if (day ==5){
	console.log('Its friday'); 
} else if (day ==6){
	console.log('Its saturday'); 
} else{
	console.log('Its sunday'); 
}

var food = ['fried chicken','chinese food', 'steak'];
console.log (food)

var animals = ['dogs','cats','tiger'];
console.log (animals)

var places = ['New York City','Hawaii', 'Shanghai'];
console.log (places)

var pokemon = ['pikachu','squirtle', 'charmander'];
console.log (pokemon)

var favorites = [food, animals, places, pokemon];
console.log (favorites)

var array = [favorites];
for (var i = 0; i < favorites.length; i++) {
  console.log (array)
}

var nested = [food, animals, places, pokemon];
for (var i = 0; i < favorites.length; i++) {
  console.log (nested)
}














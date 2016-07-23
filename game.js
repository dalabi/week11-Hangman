var makes = ["Alfa", "Bentley", "Chevrolet", "Daewoo", "Fisker", "GMC", "Hummer", "Infiniti", "Jaguar", "Koenigsegg", "Lamborghini", "Maserati", "Nissan", "Oldsmobile", "Peugeot", "Qvale", "Rolls", "Spyker", "Tesla", "Volkswagen"];

var pickWord = function () {

	var word = Math.floor(Math.random() * makes.length);

	console.log(makes[word]);
}

exports.pickWord = pickWord;

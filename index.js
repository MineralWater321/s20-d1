//JSON - data format used by applications to store and trasport data to one another.

/* JSON Objects
	Syntax:
	{
		"propertyA": "valueA",
		"propertyB": "valueB"
	}
*/
/*
{
	"city": "Quezon City",
	"province": "NCR",
	"country": "Philippines"
}*/

//Json Arrays

/*"cities": [
	{"city": "Quezon City", "province": "NCR", "country": "Philippines"},
	{"city": "Caloocan City", "province": "NCR", "country": "Philippines"},
	{"city": "Marikina City", "province": "NCR", "country": "Philippines"}
]*/

//JSON Methods

let batchesArr = [{batchName: 'Batch X'},{batchName: 'Batch Y'}];

//'stringify' method is used to convert JS Objects into a string

console.log('Result from stringify method: ');
console.log(JSON.stringify(batchesArr));

let data = JSON.stringify({
	name: 'John',
	age: 31,
	address: {
		city: 'Manila',
		country: 'Philippines'
	}
});

console.log(data);


//Using Stringify Method with Variables

//User details
/*let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');
let age = prompt('What is your age?');
let address = {
	city: prompt('Which city do you live in?'),
	country: prompt('Which country does your city address belong to?')
};

let otherData = JSON.stringify({
	firstName: firstName,
	lastName: lastName,
	age: age,
	address: address
});

console.log(otherData);*/

//Converting Stringified JSON into Javascript objects

let batchesJSON = `[{"batchName": "Batch X"},{"batchName": "BatchY"}]`;

console.log("Result from parse method")
console.log(JSON.parse(batchesJSON));

let stringifiedObject = JSON.parse(`{"name": "John", "age": "30", "address": {"city": "Manila", "country": "Philippines"}}`);

console.log(stringifiedObject)
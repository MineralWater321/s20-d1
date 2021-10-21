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

// Lecture variables
/*
var name = 'Brett';
console.log(name);

var lastName = 'Walker';
console.log(lastName);

var age = 33;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture variables 2
/*
var name = 'Brett';
var age = 33;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = true;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty three';
job = 'programmer';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' ' + lastName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
*/



//Lecture operators
/*
var now = 2017;
var birthYear = now - 33;

birthYear = now - 33 * 2;
//2017 - 66
//1951


console.log(birthYear);

var ageBrett = 33;
var ageMark = 40;

ageBrett = ageMark = (3 + 5) * 4 - 6;
//ageBrett = ageMark = 33
//ageBrett = 33

ageBrett++;
ageMark *= 2;
//ageMark = agerMark * 2

console.log('Brett is ' + ageBrett);
console.log('Mark is ' + ageMark);
*/








///////////////////////////////////
// Lecture: if/else statements
/*
var name = 'Brett'
var age = 33;
var isMarried = 'yes';

if (isMarried === 'yes') {
	console.log(name + ' is married.');
} else {
	console.log(name + ' will hopedfully marry soon :)');
}

isMarried = true;


if(isMarried) {
	console.log('YES!');
} else {
	console.log('NO!');
}


if(isMarried) {
	console.log('YES!');
}

if (23 === "23") {
	console.log('Something to print...');
}
*/

//////////////////////////////////////////////////
// Lecture: boolean logic and switch
/*
var age = 20

if (age < 20) {
	console.log('John is a teenager.');
} else if (age >= 20 && age < 30) {
	console.log('John is a young man.');
} else {
	console.log('John is a man.')
}


var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drives a cab in Lisbon.');
		break;
	case 'cop':
		console.log('John helps fight crime.');
		break;
	default:
		console.log('John does something else.');
}
*/


//////////////////////////////////
//CODING CHALLENGE 1

var johnHeight = 188
var mikeHeight = 175
var johnAge = 27
var mikeAge = 33

var scoreJohn = johnHeight + 5 * johnAge;
var scoreMike = mikeHeight + 5 * mikeAge;

/*if (scoreJohn > scoreMike) {
	console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn) {
	console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreJohn === scoreMike) {
	console.log('There is a draw.');
}
*/


/*
var maryHeight = 158;
var maryAge = 31;
var scoreMary = maryHeight + 5 * maryAge;

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
	console.log('John wins the game with ' + johnScore + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
	console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
	console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
	console.log('It\'s a draw.');
}
*/














////////////////////////////////////////////////////////////////////////////////
// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
	var age = 2017 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
//console.log(ageMary);


function yearsUntilRetirement(name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years.');
	} else {
		console.log(name + ' is already retired.');
	}
}


yearsUntilRetirement('John' , 1990);
yearsUntilRetirement('Mike' , 1969);
yearsUntilRetirement('Mary' , 1948);
*/



////////////////////////////////////////////////////////////////////////////////////
// Lecture: Statements and expressions
/*
function someFun(par) {
	//code
}

var someFun = function (argument) {
	// body...
}

//Expressions
3 + 4;
var x = 3;

//statements
if (x ==== 5) {
	//do something
}
*/



////////////////////////////////////////////////////////
// Lecture: Arrays
/*
var names = ['John' , 'Jane' , 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);


var john = ['John' , 'Smith' , 1990, 'designer' , false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1) {
	console.log('John is NOT a teacher.');
}
*/



////////////////////////////////////////////////////////////////////////////////
// Lecture: Objects
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastNae = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/






/////////////////////////////////////////////////////////
// Lecture: Objects and methods

//v 1.0
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		return 2017 - this.yearOfBirth;
	}
};


//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);


var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		this.age = 2017 - this.yearOfBirth;
	}
};

john.calculateAge();
console.log(john);




var mike = {
	yearOfBirth: 1950,
	calculateAge: function() {
		this.age = 2017 - this.yearOfBirth;
	}
};

mike.calculateAge();
console.log(mike);
*/


//////////////////////////////////////////////////////
// Lecture: Loops
/*
for (var i = 0; i < 10; i++) {
	console.log(i);
}

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/
/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
/*
// for loops
for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
	console.log(names[i]);
}
*/
/*
// while loops
var i = 0;
while(i < names.length) {
	console.log(names[i]);
	i++;
}


for (var i = 1; i <= 5; i++) {
	console.log(i);

	if (i === 3) {
		break;
	}
}


for (var i = 1; i <= 5; i++) {
	if (i === 3) {
		continue;
	}

	console.log (i);
}
*/






// CODING CHALLENGE 2

















/*


function printFullAge(years) {
	var ages = [];
	var fullAges = [];

	for (var i = 0; i < years.length; i++) {
		ages[i] = 2017 - years[i];
	}	

	for (i = 0; i < ages.length; i++) {
		if (ages[i] >= 2017 - 1984) {
			console.log(titles[i] + ' is ' + ages[i] + ' years old and was made before I was born.');
			fullAges.push(true);
		} else if(ages[i] > 2017 - 2016) {
			console.log(titles[i] + ' is ' + ages[i] + ' years old and was made after I was born but before Alex was born.');
			fullAges.push(true);
		} else {
			console.log(titles[i] + ' is ' + ages[i] + ' years old and was made after both Alex and I were born.');
			fullAges.push(false);
		}
	}

	return fullAges;
}

var years = [1977, 1980, 1983, 1999, 2002, 2005, 2015, 2016, 2017];
var titles = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'The Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith', 'The Force Awakens', 'Rogue One', 'The Last Jedi'];
var full_1 = printFullAge(years);
var full_2 = printFullAge([1980, 1987, 1989]);
*/










/////////////////////////////////////////////
//////////////udacity Lesson 3

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
/*
var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance === true) {
	if ( isActive === true && balance > 0) {
	console.log('Your balance is $' + balance.toFixed(2) + '.');
	} else if (isActive === true && balance === 0) {
		console.log('You account is empty.');	
	} else if (isActive === true && balance < 0) {
		console.log('Your balance is negative. Please contact bank.')
	} else {
		console.log('Your account is no longer active.');
	}
} else {
	console.log('Thank you. Have a nice day!');
}

*/

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */


/*
// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "sprinkles";

if ((flavor === 'vanilla' || flavor === 'chocolate') && (vessel === 'cone' || vessel === 'bowl') && (toppings === 'sprinkles' || toppings === 'peanuts')) {
	console.log('I\'d like two scoops of ' + flavor + ' ice cream in a ' + vessel + ' with ' + toppings + '.');
} else {
	console.log('Fuck off with your ice cream bullshit!');
}
*/



/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
/*
var shirtWidth = 28;
var shirtLength = 30;
var shirtSleeve = 8.71;

if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
	console.log('3XL');
} else if (shirtWidth >= 26 && shirtLength >= 33 && shirtSleeve >= 9.63) {
	console.log('2XL');
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
	console.log('XL');
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
	console.log('L');
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
	console.log('M');
} else if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
	console.log('S');
} else {
	console.log('N\/A');
}
*/

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */
/*
// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = true;
var eatsAnimals = false;

var category = (eatsPlants && eatsAnimals) ? 'omnivore' : eatsAnimals ? 'carnivore'  : eatsPlants ? 'herbivore' : 'undefined';

console.log(category);
*/


/*
 * Programming Quiz: Back to School (3-9)
 */
/*
// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

switch (education) {
	case 'no high school diploma':
		salary = '$25,636';
		break;
	case 'a high school diploma':
		salary = '$35,256';
		break;
	case 'an Associate\'s degree':
		salary = '$41,496';
		break;
	case 'a Bachelor\'s degree':
		salary = '$59,124';
		break;
	case 'a Master\'s degree':
		salary = '$69,732';
		break;
	case 'a Professional degree':
		salary = '89,960';
		break;
	case 'a Doctoral degree':
		salary = '$84,396';
		break;
}

console.log('In 2015, a person with ' + education + 'earned an average of ' + salary + '\/year.');
*/
//////////////////////////////////////////////////////////////
/////////// Udacity Lesson 4: Loops

/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
var x = 1;

while (x <= 20 && x > 0) {
    if ((x % 3 === 0) && (x % 5 === 0)) {
    	console.log('JuliaJames');
    } else if ( x % 3 === 0) {
    	console.log('Julia');
    } else if (x % 5 === 0) {
    	console.log('James');
    } else {
    	console.log(x);
    }
    (x = x + 1);
}
*/

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */
/*
var num = 99;

while (num > 0) {
    if (num > 2) {
    	console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ' + (num - 1) + ' bottles of juice on the wall!');
    } else if (num === 2) {
    	console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ' + (num - 1) + ' bottle of juice on the wall!');
    } else {
    	console.log(num + ' bottle of juice on the wall! ' + num + ' bottle of juice! Take one down, pass it around... ' + (num - 1) + ' bottles of juice on the wall!');
    }
    (num = num - 1);
}
*/

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */
/*
var sec = 60;

while (sec >= 0) {
	if (sec === 50) {
		console.log('Orbiter transfers from ground to internal power');
	} else if (sec === 31) {
		console.log('Ground launch sequencer is go for auto sequence start');
	} else if (sec === 16) {
		console.log('Activate launch pad sound suppression system');
	} else if (sec === 10) {
		console.log('Activate main engine hydrogen burnoff system');
	} else if (sec === 6) {
		console.log('Main engine start');
	} else if (sec === 0) {
		console.log('Solid rocket booster ignition and liftoff!');
	} else {
		console.log('T-' + sec + ' seconds');
	}

	sec = (sec - 1);
}
*/
/*
for (var sec = 60; sec >= 0; sec--) {
	if (sec === 50) {
		console.log('Orbiter transfers from ground to internal power');
	} else if (sec === 31) {
		console.log('Ground launch sequencer is go for auto sequence start');
	} else if (sec === 16) {
		console.log('Activate launch pad sound suppression system');
	} else if (sec === 10) {
		console.log('Activate main engine hydrogen burnoff system');
	} else if (sec === 6) {
		console.log('Main engine start');
	} else if (sec === 0) {
		console.log('Solid rocket booster ignition and liftoff!');
	} else {
		console.log('T-' + sec + ' seconds');
	}
}
*/
/*
var solution = 12;

 for (var x = 11; x > 0 ; x--) {
solution = solution * x;
}

console.log(solution);
*/

/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

///////////////////////////////////////////////////////////
///////////// Udacity Lesson 5: Functions

/*
function laugh() {
	return 'hahahahahahahahahaha!'
}

console.log(laugh());
*/

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 */
/*
 function laugh(num) {
 	var ha = '';
 	for (var i = 0; i <= num ; i++) {
 		ha += 'ha';
 	}
 return ha + '!';	
}

console.log(laugh(3));

/*function laughed(num) {
  var ha = "";
  for (var n = 0; n < num; n++ ) {
    ha += "ha";
  }
  return ha+ "!";
}
console.log(laughed(3));*/


function isPrim(int) {
	for(var x = 2; x < int; x++) {
		if(int % x === 0) {
			console.log(int + ' is divisible by' + x);
		}
	}
}
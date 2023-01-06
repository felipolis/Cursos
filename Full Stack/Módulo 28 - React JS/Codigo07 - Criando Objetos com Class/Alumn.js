const Person = require('./Person.js');

class Alumn extends Person {
	constructor(name, age, course) {
		super(name, age);
		this.course = course;
	}

	greetings() {
		console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos. Estudo ${this.course}.`);
	}

}

module.exports = Alumn;
const person = {
	name: 'Emerson',
	skill: 'JS'
};

const personClone = {
	...person
};

personClone.skill = 'ES6';

// personClone
// { name: "Emerson", skill: "ES6" }

// person
// { name: "Emerson", skill: "JS" }

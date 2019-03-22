const expenses = [
	{
		title: 'Food',
		value: 50
	},
	{
		title: 'Transportation',
		value: 35
	},
	{
		title: 'Hotel',
		value: 100
	}
];

const expensesTotal = expenses.reduce((acc, cur) => (
	acc + cur.value
), 0);

const message = `Your total expense is $${expensesTotal}`;

// "Your total expense is $185"

module.exports = {
	createComponentPrompt: [
		{
			type: 'input',
			name: 'name',
			message: 'What is the component name?'
		}
		// {
		//   type: 'list',
		//   name: 'category',
		//   message: 'Category:',
		//   choices: ['Tutorial', 'Reflection'],
		//   filter: function (val) {
		//     return val.toLowerCase();
		//   }
		// }
	]
};

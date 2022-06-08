const { actions, helpers, prompt, actionsType } = require('./settings');

module.exports = function (plop) {
	plop.setWelcomeMessage('Welcome to plop! What type of file would you like to generate?');

	plop.setHelper('dashCase', (text) => helpers.pascalToSpecialCase(text, '-'));
	plop.setHelper('snakeCase', (text) => helpers.pascalToSpecialCase(text, '_'));

	plop.setActionType('format-files', actionsType.formatAction);

	plop.setGenerator('full-component', {
		description: 'Auto create a full component',
		prompts: prompt.createComponentPrompt,
		actions: [actions.createComponentAction, actions.createStyleAction, actions.modifyStyleAction, actions.formatAction]
	});

	plop.setGenerator('basic-component', {
		description: 'Auto create a basic component',
		prompts: prompt.createComponentPrompt,
		actions: [actions.createComponentAction, actions.createStyleAction]
	});
};

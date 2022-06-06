const {
	createComponentAction,
	createStyleAction,
	modifyStyleAction,
	formatFilesAction
} = require('./plop-config/actions');
const { formatAction } = require('./plop-config/actionsType');
const { pascalToSpecialCase } = require('./plop-config/helpers');
const { createComponentPrompt } = require('./plop-config/prompt');

module.exports = function (plop) {
	plop.setWelcomeMessage('Welcome to plop! What type of file would you like to generate?');

	plop.setHelper('dashCase', (text) => pascalToSpecialCase(text, '-'));
	plop.setHelper('snakeCase', (text) => pascalToSpecialCase(text, '_'));

	plop.setActionType('format-files', formatAction);

	plop.setGenerator('full-component', {
		description: 'Auto create a full component',
		prompts: createComponentPrompt,
		actions: [createComponentAction, createStyleAction, modifyStyleAction, formatFilesAction]
	});

	plop.setGenerator('basic-component', {
		description: 'Auto create a basic component',
		prompts: createComponentPrompt,
		actions: [createComponentAction, createStyleAction]
	});
};

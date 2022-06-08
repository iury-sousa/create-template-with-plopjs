module.exports = {
	createComponentAction: {
		type: 'add',
		path: './../src/components/{{name}}/index.tsx',
		templateFile: 'templates/basic-component.tsx.hbs'
	},

	createStyleAction: {
		type: 'add',
		path: './../src/components/{{name}}/styles.ts',
		templateFile: 'templates/component.style.ts.hbs'
	},

	modifyStyleAction: {
		type: 'modify',
		path: './../src/components/{{name}}/index.tsx',
		pattern: /(\/\/ PLOP AUTO GENERATE. DO NOT REMOVE)/g,
		template: '// Modificando arquivo {{name}} \n$1'
	},

	formatAction: {
		type: 'format-files',
		path: './src/components/{{name}}/index.tsx',
		generatorName: 'full-component'
	}
};

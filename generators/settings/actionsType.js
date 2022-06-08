const { sh } = require('./utils');

module.exports = {
	formatAction: async function (answers, config, plop) {
		let paths = [];
		if (config.generatorName) {
			const generatorName = plop.getGenerator(config.generatorName);

			if (generatorName) {
				paths = generatorName.actions
					.filter((action) => !!action.path && action.type !== 'format-files')
					.map((action) => plop.renderString(action.path.replace('./../', ''), answers));
			}
		}

		if (paths.length > 0) {
			await sh(`yarn prettier --write ${paths.join(' ')}`);
		}

		return 'Files formatting completed!';
	}
};

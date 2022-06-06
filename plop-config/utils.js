// eslint-disable-next-line @typescript-eslint/no-var-requires
const execSync = require('child_process');

module.exports = {
	/**
	 * Execute simple shell command (async wrapper).
	 * @param {String} cmd Command
	 * @return {Object} { stdout: String, stderr: String }
	 */
	sh: async function (cmd) {
		return new Promise(function (resolve, reject) {
			execSync.exec(cmd, (error, stdout, stderr) => {
				if (error) {
					reject(error);
				} else {
					resolve({ stdout, stderr });
				}
			});
		});
	}
};

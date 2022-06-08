module.exports = {
	pascalToSpecialCase(text, separator) {
		return text.replace(/[A-Z]/g, (letter, index) =>
			index === 0 ? letter.toLowerCase() : `${separator}${letter.toLowerCase()}`,
		);
	},
};

'use strict';
const stripAnsi = require('strip-ansi');
const charRegex = require('char-regex');

const stringLength = string => {
	const strippedString = stripAnsi(string);

	if (strippedString === '') {
		return 0;
	}

	return strippedString.match(charRegex()).length;
};

module.exports = stringLength;

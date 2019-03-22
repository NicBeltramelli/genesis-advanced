module.exports = {
	'extends': 'stylelint-config-wordpress',
	'rules': {
		'no-empty-source': null,
		'string-quotes': 'double',
		'at-rule-no-unknown': [
			true,
			{
				'ignoreAtRules': [
					'extend',
					'at-root',
					'debug',
					'warn',
					'error',
					'if',
					'else',
					'for',
					'each',
					'while',
					'mixin',
					'include',
					'content',
					'return',
					'function',
				],
			},
		],
	},
};
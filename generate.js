const json = require('./http.json');

const r = Object.entries(json).map(([key, value]) => {
	return `## ${key} ${value.text}\n\n${value.desc}\n${value.refs.map((m) => `[${m}](${m})`).join('\n')}`;
}).join('\n\n');

console.log('% http(7)');
console.log('%');
console.log('% June 2022');
console.log();
console.log('# NAME\n\nhttp - describe HTTP status codes\n\n');
console.log('# DESCRIPTION');
console.log(r);

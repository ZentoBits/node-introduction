const [,, ...args] = process.argv
const allCaps = args.map(arg => arg.toUpperCase())

const aOrAn = (char) =>	'AEFHILMNORSX'.includes(char) ? 'an' : 'a'


	;[...allCaps.join('')].forEach(char => 
		setTimeout(function() {
	console.log(`Give me ${aOrAn(char)} ${char}!`)
	}, 2000)
	)
	


console.log('What does that spell?')
console.log(`${allCaps.join(' ')}!`)

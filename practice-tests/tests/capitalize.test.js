import { capitalize } from '../src/capitalize.js'  

if (capitalize('hello') !== 'Hello') {
	throw new Error('this function works wrong');
}

if (capitalize('') !== '') {
	throw new Error('this function works wrong');
}

console.log('all tests passed');

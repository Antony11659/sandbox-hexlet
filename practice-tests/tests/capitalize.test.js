import { strict as assert } from 'assert';
import { capitalize } from '../src/capitalize.js'  

if (assert.equal(capitalize('hello'),'Hello')) {
	throw new Error('this function works wrong');
}

if (assert.equal(capitalize(''), '')) {
	throw new Error('this function works wrong');
}

console.log('all tests passed');

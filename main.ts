import * as _ from 'lodash';
import {utils} from 'utils';

_.each([1, 2, 3], n => {
    console.log(n);
});



let el = document.createElement('div');
let newContent = document.createTextNode("Hi there and greetings! " + utils.testMe());
el.appendChild(newContent);
document.body.appendChild(el);
console.log('init');

console.log(utils.testMe());
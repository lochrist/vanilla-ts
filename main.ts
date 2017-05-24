import * as _ from 'lodash';
import * as utils from 'utils';

interface Foin {
    test: Map<string, string>;
}

let p = new Promise(resolve => {
    return 10;
});

let m = new Map<string, string>();
m.set('ping', 'pong');

_.each([1, 2, 3], n => {
    console.log(n);
});



let el = document.createElement('div');
let newContent = document.createTextNode("Hi there and greetings! " + utils.testMe());
el.appendChild(newContent);
document.body.appendChild(el);
console.log('init');

console.log(utils.testMe());
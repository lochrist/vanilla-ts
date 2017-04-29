import _ = require('lodash');
import {utils} from 'utils';

describe('rules', function () {
    it('Default rule', function () {
        expect(_.each).toBeDefined();
    });

    it('hello', function () {
        expect(utils.testMe()).toEqual('hello');
    });
});

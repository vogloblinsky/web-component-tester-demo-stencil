import {
    defineCustomElements
} from '../dist/esm/es2017/nova.define.js';
defineCustomElements(window);

const assert = chai.assert;
describe('Nova badge', () => {
    let element;
    before(() => {
        element = document.querySelector('nova-badge');
    });
    it('Rendered by Stencil', () => {
        const testPromise = new Promise(function(resolve) {
            setTimeout(function() {
                resolve(element.getAttribute('class'));
            }, 200);
        });
        return testPromise.then(function(result) {
            assert.include(result.split(' '), 'hydrated');
        });
    });
});
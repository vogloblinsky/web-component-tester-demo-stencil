import {
    defineCustomElements
} from '../dist/esm/es2017/nova.define.js';
defineCustomElements(window);

const assert = chai.assert;
describe('Nova badge', () => {
    let container;
    before(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        console.log('end setup: ', container);
    });
    after(() => {
        if (container && container.parentNode) {
            container.parentNode.removeChild(container);
        }
    });
    it('Rendered by Stencil', () => {
        const el = document.createElement('nova-badge');
        container.appendChild(el);
        var testPromise = new Promise(function(resolve) {
            setTimeout(function() {
                resolve(el.getAttribute('class'));
            }, 200);
        });
        return testPromise.then(function(result) {
            assert.include(result.split(' '), 'hydrated');
        });
    });
});
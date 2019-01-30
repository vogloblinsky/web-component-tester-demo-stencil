import {
    defineCustomElements
} from '../dist/esm/es2017/nova.define.js';
defineCustomElements(window);

const assert = chai.assert;
describe('Nova badge', () => {
    let element;
    let scoreElement;
    let canShadowDom;
    before(() => {
        element = document.querySelector('nova-badge');
        canShadowDom = !!(
            document.createElement('div').attachShadow ||
            document.createElement('div').createShadowRoot
        );
        if (canShadowDom) {
            scoreElement = element.shadowRoot.querySelector('.score');
        } else {
            scoreElement = document.querySelector('nova-badge .score');
        }
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
    it('should have the nova badge score to 1', () => {
        assert.equal(scoreElement.textContent, "1");
    });
    it('should have the nova badge score correct CSS class', () => {
        assert.notEqual(scoreElement.getAttribute('class').indexOf('one'), -1);
    });
});
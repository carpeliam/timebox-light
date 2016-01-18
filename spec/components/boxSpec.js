import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Box from '../../src/assets/components/Box';

describe('Box', function() {
    let box;
    beforeEach(function() {
        box = TestUtils.renderIntoDocument(<Box name={'My Box'} duration={66000} />);
    });

    it('displays the name of the Box', function() {
        expect(TestUtils.findRenderedDOMComponentWithTag(box, 'div').textContent).toContain('My Box');
    });

    it('formats the elapsed time as h:mm:ss', function() {
        expect(TestUtils.findRenderedDOMComponentWithTag(box, 'div').textContent).toContain('0:01:06');
    });
});

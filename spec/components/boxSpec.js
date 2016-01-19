import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Box from '../../src/assets/components/Box';

describe('Box', function () {
    let box;
    function callback() {
        console.log('pause please')
    }
    let callbackSpy;
    beforeEach(function () {
        callbackSpy = jasmine.createSpy('callback');
        box = TestUtils.renderIntoDocument(<Box name={'My Box'} duration={66000} onStart={callbackSpy}/>);
    });

    it('displays the name of the Box', function () {
        expect(TestUtils.findRenderedDOMComponentWithTag(box, 'div').textContent).toContain('My Box');
    });

    it('formats the elapsed time as h:mm:ss', function () {
        expect(TestUtils.findRenderedDOMComponentWithTag(box, 'div').textContent).toContain('0:01:06');
    });

    it('has a start button', function () {
        expect(TestUtils.findRenderedDOMComponentWithTag(box, 'button').textContent).toEqual('Start');
    });

    describe('clicking start', function () {
        beforeEach(function () {
            TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(box, 'button'));
        });
        it('changes to pause', function () {
            expect(TestUtils.findRenderedDOMComponentWithTag(box, 'button').textContent).toEqual('Pause');
        });

        it('calls the callback function', function () {
            expect(callbackSpy).toHaveBeenCalled();
        });
    });
});

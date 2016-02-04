import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Box from '../../src/assets/components/Box';

describe('Box', () => {
    let box;
    function callback() {
        console.log('pause please')
    }
    let callbackSpy;
    beforeEach(() => {
        callbackSpy = jasmine.createSpy('callback');
        box = TestUtils.renderIntoDocument(<Box name={'My Box'} duration={66000} paused={true} onStart={callbackSpy}/>);
    });

    it('displays the name of the Box', () => {
        expect(TestUtils.findRenderedDOMComponentWithTag(box, 'div').textContent).toContain('My Box');
    });

    it('formats the elapsed time as h:mm:ss', () => {
        expect(TestUtils.findRenderedDOMComponentWithTag(box, 'div').textContent).toContain('0:01:06');
    });

    it('has a start button', () => {
        expect(TestUtils.findRenderedDOMComponentWithTag(box, 'button').textContent).toEqual('Start');
    });

    it('has pause button when paused', () => {
        box = TestUtils.renderIntoDocument(<Box name={'My Box'} duration={66000} paused={false} onStart={callbackSpy}/>);
        expect(TestUtils.findRenderedDOMComponentWithTag(box, 'button').textContent).toEqual('Pause');
    });

    describe('clicking start', () => {
        beforeEach(() => {
            TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(box, 'button'));
        });

        it('calls the callback function', () => {
            expect(callbackSpy).toHaveBeenCalled();
        });
    });
});

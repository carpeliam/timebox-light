/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Box from '../../src/assets/components/Box';

describe('Box', () => {
  let box;

  describe('when inactive', () => {
    let callbackSpy;
    beforeEach(() => {
      callbackSpy = jasmine.createSpy('onStart');
      box = TestUtils.renderIntoDocument(
        <Box name={'My Box'} onStart={callbackSpy} />
      );
    });

    it('should have an active value of false', () => {
      expect(box.props.active).toBe(false);
    });

    it('displays the name of the Box', () => {
      expect(TestUtils.findRenderedDOMComponentWithTag(box, 'div').textContent).toContain('My Box');
    });

    it('has a start button', () => {
      expect(TestUtils.findRenderedDOMComponentWithTag(box, 'button').textContent).toEqual('Start');
    });

    it('call callback when button is clicked', () => {
      const button = TestUtils.findRenderedDOMComponentWithTag(box, 'button');
      TestUtils.Simulate.click(button);
      expect(callbackSpy).toHaveBeenCalled();
    });
  });

  describe('when active', () => {
    beforeEach(() => {
      box = TestUtils.renderIntoDocument(
        <Box name={'My Box'} active />
      );
    });

    it('has a stop button', () => {
      expect(TestUtils.findRenderedDOMComponentWithTag(box, 'button').textContent).toEqual('Stop');
    });
  });
});

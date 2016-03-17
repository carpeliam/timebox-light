/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Box from '../../src/assets/components/Box';

describe('Box', () => {
  let box;

  describe('when inactive', () => {
    beforeEach(() => {
      box = TestUtils.renderIntoDocument(
        <Box name={'My Box'} />
      );
    });

    it('displays the name of the Box', () => {
      expect(TestUtils.findRenderedDOMComponentWithTag(box, 'div').textContent).toContain('My Box');
    });

    it('has a start button', () => {
      expect(TestUtils.findRenderedDOMComponentWithTag(box, 'button').textContent).toEqual('Start');
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

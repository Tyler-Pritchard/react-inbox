import React from 'react';
import ReactDOM from 'react-dom';
import {
  shallow
} from 'enzyme';
import App from '../../App';
import MessageList from '../MessageList.js';

let wrapped;

beforeEach(() => {
  wrapped = shallow( < App / > );
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( < App / > , div);
  ReactDOM.unmountComponentAtNode(div);
});


it("shows a message list", () => {
  expect(wrapped.find(MessageList).length).toEqual(1);
});
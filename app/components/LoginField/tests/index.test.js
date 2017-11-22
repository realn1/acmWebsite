import React from 'react';
import { shallow } from 'enzyme';

import LoginField from '../index';

const submitFunction = () => {};

/**
 * Currently testing the bare minimum in this component. The functions are only
 * being tested for definition not for functionality. The submit button must be
 * inside the form for this test to pass. The two functions to be tested are
 *  1. getUsername
 *  2. getPassword
 */

describe('<LoginField />', () => {
  it('Component should render in a div', () => {
    const renderedComponent = shallow(<LoginField submit={submitFunction} />);
    expect(renderedComponent.find('div').length).toBe(1);
  });

  it('Should render a form that can submit data', () => {
    const renderedComponent = shallow(<LoginField submit={submitFunction} />);
    expect(renderedComponent.find('form').length).toBe(1);
    expect(renderedComponent.find('form').props().onSubmit).toBeDefined();
  });

  it('Should have a username field', () => {
    const usernameField = shallow(<LoginField submit={submitFunction} />).find('#username');
    expect(usernameField.type()).toBe('input');
    expect(usernameField.props().type).toBe('text');
    expect(usernameField.props().name).toBe('username');
  });

  it('Should have a password field', () => {
    const passwordField = shallow(<LoginField submit={submitFunction} />).find('#password');
    expect(passwordField.type()).toBe('input');
    expect(passwordField.props().type).toBe('password');
    expect(passwordField.props().name).toBe('password');
  });

  it('Should have a submit button', () => {
    const renderedComponent = shallow(<LoginField submit={submitFunction} />).find('form');
    expect(renderedComponent.find('button[type="submit"]').length).toBe(1);
    expect(renderedComponent.find('button[type="submit"]').text()).not.toBe('');
  });

  it('Should have a function to get the username', () => {
    const renderedComponent = shallow(<LoginField submit={submitFunction} />);
    expect(renderedComponent.instance().getUsername).toBeDefined();
  });

  it('Should have a function to get the password', () => {
    const renderedComponent = shallow(<LoginField submit={submitFunction} />);
    expect(renderedComponent.instance().getPassword).toBeDefined();
  });
});

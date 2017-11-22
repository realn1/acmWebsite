// import React from 'react';
// import { shallow } from 'enzyme';

 import LoginField from '../index';

 describe('<LoginField />', () => {
   it('Expect to have unit tests specified', () => {
     expect(true).toEqual(false);
   });
   it('should return a username', () => {
     expect(LoginField.getTheUsername.user).toEqual(document.getElementById('username').value);
   });
 });

import React from 'react';
import HelloWorldTemplate from '../templates/HelloWorldTemplate';

const Body = () => 'register body'

const Register = props => {
  return <HelloWorldTemplate body={<Body />}/>;
}

export default Register;

import React from 'react';
import {Button} from 'react-atomic-molecule';
import {djangoFormParser, DjangoForm} from 'organism-react-django';  
import {Return} from 'reshow';

import HelloWorldTemplate from '../templates/HelloWorldTemplate';

const Body = props => {
  console.log(props);
  const {form, csrfToken} = props;
  const thisForm = djangoFormParser({form})['form'];
  return (
    <DjangoForm 
      csrfToken={csrfToken}
      style={Styles.form}
      actions={
        <Button type="submit">O.K.</Button>
      }
      {...thisForm} 
    />
  ) 
}  

const Register = props => {
  return <HelloWorldTemplate body={<Return initStates={[
    'form', 'csrfToken'
  ]}><Body /></Return>}/>;
}

export default Register;

const Styles = {
  form: {
    maxWidth: '50%',
    padding: 50,
    background: '#ffe',
    margin: '0 auto'
  }  
}; 

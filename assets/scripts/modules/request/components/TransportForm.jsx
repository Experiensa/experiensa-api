import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Form, Button, Icon} from 'semantic-ui-react';

const drivers = [
  { text: 'Transport Type', value: '' },
  { text: 'Driver', value: 'driver' },
  { text: 'Self Drive', value: 'self-drive' },
]
const types = [
  { text: 'Driver Type', value: '' },
  { text: 'Rent a Car', value: 'rent a car' },
  { text: 'Public Transportation', value: 'public transportation' },
]

const TransportForm = props => {
  const { handleSubmit, previousPage } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Field name="trans_type" component="select" className="ui dropdown">
          {drivers.map((opt,index)=>(
            <option key={index} value={opt.value}>{opt.text}</option>
          ))}
        </Field>
        <Field name="trans_driver" component="select" className="ui dropdown">
          {types.map((opt,index)=>(
            <option key={index} value={opt.value}>{opt.text}</option>
          ))}
        </Field>
      </Form.Group>
      <Button type='button' className="previous" animated onClick={previousPage} color='orange' floated='left' size='big'>      
        <Button.Content visible>Previous</Button.Content>
        <Button.Content hidden>
          <Icon name='left arrow' />
        </Button.Content>
      </Button>
      <Button type='submit' className="next" animated color='blue' floated='right' size='big'>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='right arrow' />
        </Button.Content>
      </Button>      
    </Form>
  );
}

export default reduxForm({
  form: 'contact',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(TransportForm);
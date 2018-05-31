import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Form, Button, Icon, Message} from 'semantic-ui-react';
import Captcha from './sections/Captcha';
import submit from '../functions/submit';
import validate from '../functions/validate';

const ConfirmForm = props => {
  console.log('confirm form props', props)
  const { handleSubmit, pristine, previousPage, submitting, submitFailed, submitSucceeded, error } = props
  
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="captcha_value" component={Captcha}/>
      {(error && submitFailed && !submitting) && 
        <Message negative>
          <Message.Header>Error</Message.Header>
          <p>{error}</p>
        </Message>
      }
      {(submitSucceeded && !submitting)&&
        <Message
        success
        header='Success'
        content='Request sended'
        />
      }
      <Button type='button' className="previous" animated onClick={previousPage} color='orange' floated='left' size='big'>      
        <Button.Content visible>Previous</Button.Content>
        <Button.Content hidden>
          <Icon name='left arrow' />
        </Button.Content>
      </Button>
      <Button type='submit' disabled={pristine || submitting} loading={submitting} animated color='green' floated='right' size='big'>
        <Button.Content visible>Request</Button.Content>
        <Button.Content hidden>
          <Icon name='send'/>
        </Button.Content>
      </Button>   
    </Form>
  );
}

export default reduxForm({
  form: 'contact',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  onSubmit: submit
})(ConfirmForm);
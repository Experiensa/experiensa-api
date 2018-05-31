import React from 'react';
import {Fields, reduxForm} from 'redux-form';
import {Form, Button, Icon} from 'semantic-ui-react';
import HostingOptions from './sections/HostingOptions';

const HostingForm = props => {
  const { handleSubmit, previousPage } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Fields names={['hoptions','stars']} component={HostingOptions}/>
      <Button type='button' className="previous" animated onClick={previousPage} color='orange' floated='left' size='big'>      
        <Button.Content visible>Previous</Button.Content>
        <Button.Content hidden>
          <Icon name='left arrow' />
        </Button.Content>
      </Button>
      <Button type='submit' className="next" animated color='blue' floated='right' size="big">
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
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  initialValues: {'stars': 2}
})(HostingForm);
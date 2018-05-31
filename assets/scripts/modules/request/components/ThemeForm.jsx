import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Form, Button, Icon} from 'semantic-ui-react';
import CheckboxGroup from './sections/CheckboxGroup';

const themeOptions = [
  {value:'culture & history',label:'Culture & History'},
  {value:'business',label:'Business'},
  {value:'fun & entertainment',label:'Fun & Entertainment'},
  {value:'romance',label:'Romance'},
  {value:'adventure',label:'Adventure'},
  {value:'relaxation',label:'Relaxation'},
  {value:'discovery & leisure',label:'Discovery & Leisure'},
];
const ThemeForm = props => {
  const { handleSubmit, previousPage } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="themeoptions" component={CheckboxGroup} options={themeOptions} mainLabel="Themes"/>
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
})(ThemeForm);
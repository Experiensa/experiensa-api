import React from 'react';
import {Fields, Field, FieldArray, reduxForm} from 'redux-form';
import {Form, Button, Icon, Grid} from 'semantic-ui-react';
import CheckboxGroup from './sections/CheckboxGroup';
import validate from '../functions/validate';

const fclassOptions = [
  {value:'economy',label:'Economy'},
  {value:'business',label:'Business'},
  {value:'first class',label:'First class'}
];
const fseatOptions = [
  {value:'either',label:'Either'},
  {value:'asile',label:'Asile'},
  {value:'sindows',label:'Windows'}
];
const fpreferencesOptions = [
  {value:'vegeterian meal',label:'Vegeterian meal'},
  {value:'special assistance',label:'Special assistance'}
]
const FlightForm = props => {
  const { handleSubmit, previousPage } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Grid stackable centered columns={2}>
        <Grid.Row columns={3}>
          <Field name="fclass" component={CheckboxGroup} options={fclassOptions} mainLabel="Class"/>
          <Field name="fseat" component={CheckboxGroup} options={fseatOptions} mainLabel="Seat"/>
          <Field name="fpreferences" component={CheckboxGroup} options={fpreferencesOptions} mainLabel="Preferences"/>
        </Grid.Row>
      </Grid>
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
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FlightForm);
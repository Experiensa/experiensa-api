import React from 'react';
import {Field, Fields, reduxForm} from 'redux-form';
import {Form, Button, Icon} from 'semantic-ui-react';
import Contact from './sections/Contact';
import Destination from './sections/Destination';
import Budget from './sections/Budget';
import validate from '../functions/validate';

const DestinationForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Fields names={['fullname','email','phone']} component={Contact}/>
      <Fields names={['destination','departure','return','flexibility']} component={Destination}/>
      <div className="fields">
        <div className="three wide field">
            <div className="ui fluid input field">
                <Field name="companion" component="select" className="ui dropdown">
                    <option value="">Traveling with</option>
                    <option value="alone">Alone</option>
                    <option value="couple">In couple</option>
                    <option value="family">Family</option>
                    <option value="friends">Friends</option>
                    <option value="group">Group</option>
                    <option value="colleagues">Collegues</option>
                </Field>
            </div>
        </div>
        <div className="three wide field">
            <div className="ui fluid input field">
                <Field name="adults" component="select" className="ui dropdown">
                    <option value="">Adults</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="more">More</option>
                </Field>
            </div>
        </div>
        <div className="three wide field">
          <div className="ui fluid input field">
            <Field name="kids" component="select" className="ui dropdown">
              <option value="">Kids (2-11 years)</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="< 12 years">12 year old</option>
              <option value="more">More</option>
            </Field>
          </div>
        </div>
        <div className="three wide field">
          <div className="ui fluid input field">
            <Field name="babies" component="select" className="ui dropdown">
              <option value="">Babies (0-1 years)</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="more">More</option>
            </Field>
          </div>
        </div>
        <div className="four wide field">
          <strong>Budget</strong>
          <div className="budget-slider">
            <Fields names={['min_budget','max_budget']} component={Budget}/>
          </div>
          <br/>
        </div>
      </div>
      <div className="fields">
        <div className="sixteen wide field">
            <Field name="preferences" placeholder="Preferences" component="textarea" className="ui textarea wide"/>
        </div>
      </div>     
      <Button type="submit" className="next" animated color='blue' floated='left' size='big'>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='right arrow' />
        </Button.Content>
      </Button>
    </Form>
  )
}

export default reduxForm({
  form: 'contact',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  initialValues: {min_budget:500,max_budget:5000},
  validate
})(DestinationForm);
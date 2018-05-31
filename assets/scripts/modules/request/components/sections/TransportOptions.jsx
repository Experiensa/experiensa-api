import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';

const drivers = [
  { key: 'n', text: 'Select', value: 'not defined' },
  { key: 'd', text: 'Driver', value: 'driver' },
  { key: 's', text: 'Self Drive', value: 'self-drive' },
]
const types = [
  { key: 'n', text: 'Select', value: 'not defined' },
  { key: 'r', text: 'Rent a Car', value: 'male' },
  { key: 'p', text: 'Public Transportation', value: 'female' },
]
export default class TransportOptions extends Component {
  render() {
    const fields = this.props;
    return(
        <Form.Group >
          <Form.Select {...fields.trans_type.input} label='Transport Type' options={types} placeholder='Select' />
          <Form.Select {...fields.trans_driver.input} label='Driver Type' options={drivers} placeholder='Select' />
        </Form.Group>
    )
  }
}
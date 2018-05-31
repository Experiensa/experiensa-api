import React, { Component } from 'react';
import { Grid, Form, Checkbox } from 'semantic-ui-react';

export default class CheckboxGroup extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e, data) => {
    const input = this.props.input;
    const newValue = [...input.value];
    if(data.checked) {
      newValue.push(data.value);
    } else {
      newValue.splice(newValue.indexOf(data.value), 1);
    }
    return this.props.input.onChange(newValue);
  }
  render() {
    const options = this.props.options;
    const input = this.props.input;
    return(
      <Grid.Column>
        <Form.Group grouped>
          <label><strong>{this.props.mainLabel}</strong></label>
          {options.map((option, index)=>(
            <Form.Field key={index}>
            <div class="ui checkbox">
              <Checkbox type='checkbox' 
                name={`${input.name}[${index}]`} 
                value={option.value}
                label={option.label}
                checked={input.value.indexOf(option.value) !== -1}
                onChange={(e,data)=>this.handleChange(e,data)}/>
            </div>
          </Form.Field>
          ))}          
        </Form.Group>
      </Grid.Column>
    )
  }
}
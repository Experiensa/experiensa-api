import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import ReCAPTCHA from 'react-google-recaptcha';

export default class Captcha extends Component{
  constructor(){
    super()
    this.state = {
      value: ''
    }
  }
  confirmCaptcha = (value) => {
    this.props.input.onChange(value)
    this.setState({
      value: value
    })
  }
  render(){
    // console.log("Captcha props:", this.props);
    // console.log('experiensa_vars',experiensa_vars)
    const captcha = this.props.input;
    return(
      <Grid centered columns={2}>
        <Grid.Column>
          <ReCAPTCHA
          ref="recaptcha"
          sitekey={experiensa_vars.recaptcha_site_key}
          onChange={this.confirmCaptcha}
          />
          <input {...captcha} type="hidden" value={this.state.value}/>
        </Grid.Column>
      </Grid>
    )
  }
}




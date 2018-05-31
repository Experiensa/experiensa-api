import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const fields = this.props;
    const fullname = this.props.fullname
    const email = this.props.email
    const phone = this.props.phone
    return(
      <div className="fields">
        <div className="seven wide field">
          <div className={fullname.meta.error && fullname.meta.touched?"ui fluid input field error":"ui fluid input field"}>
            <div className="ui left icon input">
              <input {...fullname.input} type="text" placeholder="Full name" required/>
              <i className="user icon"></i>
            </div>
          </div>
        </div>
        <div className="five wide field">
          <div className={email.meta.error && email.meta.touched?"ui fluid input field error":"ui fluid input field"}>
            <div className="ui left icon input">
              <input {...email.input} type="text" placeholder="Email" required/>
              <i className="envelope icon"></i>
            </div>
          </div>
        </div>
        <div className="four wide field">
          <div className={phone.meta.error && phone.meta.touched?"ui fluid input field error":"ui fluid input field"}>
            <div className="ui left icon input">
              <input {...phone.input} type="text" placeholder="Phone Number" required/>
              <i className="call icon"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;
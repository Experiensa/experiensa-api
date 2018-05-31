import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Destination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
            endDate: moment()
        }
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }
    handleStartChange(date) {
        this.setState({
          startDate: date
        });
        this.props.departure.input.onChange(moment(date).format('DD-MM-YYYY'))
    }
    handleEndChange(date) {
        this.setState({
            endDate: date
        });
        this.props.return.input.onChange(moment(date).format('DD-MM-YYYY'))
    }
  render() {
    const fields = this.props;
    // console.log('destination props',fields);
    return(
      <div className="fields">
        <div className="seven wide field">
            <div className={fields.destination.meta.error && fields.destination.meta.touched?"ui fluid input field error":"ui fluid input field"}>
                <div className="ui left icon input">
                    <input {...fields.destination.input}  type="text" placeholder="Destination" required/>
                    <i className="marker icon"></i>
                </div>
            </div>
        </div>
        <div className="three wide field">
            <div className="ui fluid field">
                <DatePicker 
                    selected={this.state.startDate} 
                    dateFormat="DD/MM/YYYY" 
                    className="rc-dp-input"
                    placeholderText="Departure date"
                    onChange={this.handleStartChange}
                    style={{width:'inherit'}}/>
                <input {...fields.departure.input}  type="hidden"/>
            </div>
        </div>
        <div className="three wide field">
            <div className="ui fluid field">
                <DatePicker 
                    selected={this.state.endDate} 
                    dateFormat="DD/MM/YYYY" 
                    className="rc-dp-input"
                    placeholderText="Return date"
                    minDate={this.state.startDate}
                    onChange={this.handleEndChange}
                    style={{width:'inherit'}}/>
                <input {...fields.return.input}  type="hidden"/>
            </div>
        </div>
        <div className="three wide field">
            <div className="ui fluid input field">
                <select {...fields.flexibility.input}  className="ui dropdown">
                    <option value="">Flexibility</option>
                    <option value="Exact dates">Exact dates</option>
                    <option value="+/- 3 days">+/- 3 days</option>
                    <option value="+/- 1 week">+/- 1 week</option>
                    <option value="+/- 2 weeks">+/- 2 weeks</option>
                    <option value="+/- 1 month">+/- 1 month</option>
                    <option value="Whenever">Whenever</option>
                </select>
            </div>
        </div>
      </div>
    )
  }
}
export default Destination;
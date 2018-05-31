import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormSteps from './FormSteps';
import DestinationForm from './DestinationForm';
import FlightForm from './FlightForm';
import HostingForm from './HostingForm';
import ThemeForm from './ThemeForm';
import TransportForm from './TransportForm';
import ConfirmForm from './ConfirmForm';

class Request extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({page: this.state.page + 1})
  }
  previousPage() {
    this.setState({page: this.state.page - 1})
  }
  render() {
    const {onSubmit} = this.props;
    // console.log('props de request principal', this.props)
    const {page} = this.state;
    return (
      <div>
        <FormSteps page={page}/>
        <br/>
        {page === 1 && <DestinationForm onSubmit={this.nextPage} />}
        {page === 2 && (
          <FlightForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <HostingForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <ThemeForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 5 && (
          <TransportForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 6 && (
          <ConfirmForm
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

Request.PropTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Request;
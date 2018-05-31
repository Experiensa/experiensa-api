import React, {Component} from 'react';
import { Breadcrumb } from 'semantic-ui-react';

export default class BreadcrumbForm extends Component {
  constructor(){
    super()
  }

  render() {
    const page = this.props.page;
    return(
      <Breadcrumb size='big'>
        {
          page == 1 ? (
            <Breadcrumb.Section link>Destination</Breadcrumb.Section>
          ):(
            <Breadcrumb.Section active>Destination</Breadcrumb.Section>
          )
        }
        <Breadcrumb.Divider icon='right chevron' />
        {
          page == 2 ? (
            <Breadcrumb.Section link>Flight</Breadcrumb.Section>
          ):(
            <Breadcrumb.Section active>Flight</Breadcrumb.Section>
          )
        }
        <Breadcrumb.Divider icon='right chevron' />
        {
          page == 3 ? (
            <Breadcrumb.Section link>Hosting</Breadcrumb.Section>
          ):(
            <Breadcrumb.Section active>Hosting</Breadcrumb.Section>
          )
        }
        <Breadcrumb.Divider icon='right chevron' />
        {
          page == 4 ? (
            <Breadcrumb.Section link>Theme</Breadcrumb.Section>
          ):(
            <Breadcrumb.Section active>Theme</Breadcrumb.Section>
          )
        }
        <Breadcrumb.Divider icon='right chevron' />
        {
          page == 5 ? (
            <Breadcrumb.Section link>Transport</Breadcrumb.Section>
          ):(
            <Breadcrumb.Section active>Transport</Breadcrumb.Section>
          )
        }
        <Breadcrumb.Divider icon='right chevron' />
        {
          page == 6 ? (
            <Breadcrumb.Section link>Request</Breadcrumb.Section>
          ):(
            <Breadcrumb.Section active>Request</Breadcrumb.Section>
          )
        }
      </Breadcrumb>
    )
  }
}
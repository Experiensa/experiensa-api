import React, { Component } from 'react'
import {connect} from 'react-redux'
import {filterCatalog} from '../../actions'
import { Grid, Form, Checkbox } from 'semantic-ui-react'

class CheckboxGroup extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e, data) => {
    const {checked,value} = data
    const {originalName} = this.props
    let filterType = 'FILTER_' + originalName.toUpperCase();
    console.log('voy a buscar', filterType, value, checked)
    this.props.filterCatalog(filterType,value,checked)
  }
  render() {
    const { options, groupName } = this.props
    return(
      <Form.Group grouped>
		  {options.map((option, index)=>(
			  <Form.Field key={index}>
				  <div class="ui checkbox">
            <Checkbox type='checkbox' 
            name={`${groupName}[${index}]`} 
            value={option.name}
            label={option.name}
            onChange={ (e, data)=>this.handleChange(e, data) }/>
				  </div>
			  </Form.Field>
		  ))}          
      </Form.Group>
    )
  }
}
function mapStateToProps(state){
	return {}
}
export default connect(mapStateToProps,{filterCatalog})(CheckboxGroup)
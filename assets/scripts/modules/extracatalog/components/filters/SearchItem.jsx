import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import { Search } from 'semantic-ui-react'
import {filterCatalog} from '../../actions'
const ld = _.noConflict();

class SearchItem extends React.Component {
  constructor(props){
		super(props)
		this.handleSearchChange = this.handleSearchChange.bind(this)
	}
	componentWillMount() {
    this.resetComponent()
  }
	resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })	
	handleSearchChange(e, value){
		this.setState({
			isLoading: true,
			value
		})
		if(value.length < 1){
			this.resetComponent()
		}else{
			this.setState({
				isLoading: false
			})
		}
		this.props.filterCatalog('FILTER_INPUT',value,true)
	}
  render() {
		const {isLoading, results, value} = this.state
    return(
			<Search 
			loading={isLoading}
			size='large'
			input='text'
			placeholder='Cherche ici'
			fluid
			showNoResults={false}
			onSearchChange={this.handleSearchChange}/>
    )
  }
}
function mapStateToProps(state){
	return {
			isActive: false
	}
}
export default connect(mapStateToProps,{filterCatalog})(SearchItem)
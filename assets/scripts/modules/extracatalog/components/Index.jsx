import React from 'react';
import {connect} from 'react-redux';
import { Grid, Image } from 'semantic-ui-react';
import SearchContainer from './SearchContainer';
import FiltersContainer from './FiltersContainer';
import ResultsContainer from './ResultsContainer';
import {requestCatalog} from '../actions';

class Index extends React.Component {
  constructor(){
      super()
  }
  componentWillMount(){
    this.props.requestCatalog(this.props.filters)
  }
  render() {
    console.log('mis props son', this.props)    
    const { catalog, categories, includes, excludes, themes, destinations, countries, options, filters } = this.props
    const { elements } = options
    const values = {
      categories,
      includes,
      excludes,
      themes,
      destinations,
      countries
    }
    return(
      <Grid stackable columns={2} divided>
        <Grid.Column width={4}>
          <SearchContainer/>
          <FiltersContainer filters={filters} values={values}/>
        </Grid.Column>
        <Grid.Column width={12}>
          <ResultsContainer voyages={catalog} elements={elements} options={options}/>
        </Grid.Column>
      </Grid>
    )
  }
}
function mapStateToProps(state){
  const { catalog, categories, includes, excludes, themes, destinations, countries } = state.catalog
  return {
      catalog,
      categories,
      includes,
      excludes,
      themes,
      destinations,
      countries
  }
}

export default connect( mapStateToProps, { requestCatalog } )( Index )
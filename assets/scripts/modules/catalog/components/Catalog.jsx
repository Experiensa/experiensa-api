import React from 'react';
import {connect} from 'react-redux'

import {requestCatalog} from '../actions'

import CatalogLayout from './CatalogLayout'
import CatalogFilterLayout from './CatalogFilterLayout'

class Catalog extends React.Component {
    constructor(){
        super()
    }
    componentWillMount(){
        this.props.requestCatalog()
    }
    render() {
        let filterOptions = {
            categories: this.props.categories,
            includes: this.props.includes,
            excludes: this.props.excludes,
            themes: this.props.themes,
            destinations: this.props.destinations,
            countries: this.props.countries
        }
        // console.log('filterOptions',filterOptions)
        // console.log('mis options son',this.props.options)
        return (
            <div className="ui container">
                <br/><br/>
                <CatalogFilterLayout filters={this.props.filters} filterOptions={filterOptions} options={this.props.options}/>
                <br/><br/>
                <CatalogLayout voyages={this.props.catalog} options={this.props.options}/>
                <br/><br/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        catalog: state.catalog.catalog,
        categories: state.catalog.categories,
        includes: state.catalog.includes,
        excludes: state.catalog.excludes,
        themes: state.catalog.themes,
        destinations: state.catalog.destinations,
        countries: state.catalog.countries
    }
}

export default connect(mapStateToProps,{requestCatalog})(Catalog)
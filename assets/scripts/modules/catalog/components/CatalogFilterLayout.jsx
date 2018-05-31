import React from 'react';

import Filters from './filters/Filters'

export default class CatalogFilterLayout extends React.Component {
    constructor(){
        super()
    }
    loadFilters(){
        let filterToShow = this.props.filters
        // console.log('mis props que voy a mandar a Filters', this.props.options)
        // console.log('los filtros a mostrar son',filterToShow)
        // console.log('los filter options son',this.props.filterOptions)
        return filterToShow.map((filter,index)=>{
            let filterOptions = {}
            switch(filter){
                case 'category':
                    filterOptions = {
                        title: 'Catégories',
                        icon: 'tags icon',
                        type: 'FILTER_CATEGORY',
                        values: this.props.filterOptions.categories
                    };
                    break;
                case 'country':
                    filterOptions = {
                        title: 'Pays',
                        icon: 'world icon',
                        type: 'FILTER_COUNTRY',
                        values: this.props.filterOptions.countries
                    };
                    break;
                case 'destination':
                    filterOptions = {
                        title: 'Destinations',
                        icon: 'map icon',
                        type: 'FILTER_DESTINATION',
                        values: this.props.filterOptions.destinations
                    };
                    break;
                case 'included':
                    filterOptions = {
                        title: 'Comprend',
                        icon: 'check circle icon',
                        type: 'FILTER_INCLUDE',
                        values: this.props.filterOptions.destinations
                    };
                    break;
                case 'excluded':
                    filterOptions = {
                        title: 'Exclut',
                        icon: 'remove circle icon',
                        type: 'FILTER_EXCLUDE',
                        values: this.props.filterOptions.destinations
                    };
                    break;
                default:
                    filterOptions = {
                        title: 'Thèmes',
                        icon: 'soccer icon',
                        type: 'FILTER_THEME',
                        values: this.props.filterOptions.themes
                    }
            }
            if(filterOptions.values.length > 0){
                return (
                    <Filters 
                        filterOptions={filterOptions} 
                        key={index} 
                        color={this.props.options.button_bg_color} 
                        active_color={this.props.options.button_bg_active_color}
                        hover_color={this.props.options.button_bg_hover_color}
                    />)
            }else{
                return(
                    <div></div>
                )
            }
        })
    }
    render() {
        return (
            <div className="ui two column stackable grid">
                <div className="stretched row">
                    {this.loadFilters()}
                </div>
            </div>
        );
    }
}

require('es6-promise').polyfill();
import axios from 'axios'
import _ from 'lodash'
const ld = _.noConflict();
//Action Types
export const REQUEST_CATALOG = 'REQUEST_CATALOG'
export const FILTER_CATALOG = 'FILTER_CATALOG'
export const FILTER_CATEGORY = 'FILTER_CATEGORY'
export const FILTER_COUNTRY = 'FILTER_COUNTRY'
export const FILTER_DESTINATION = 'FILTER_DESTINATION'
export const FILTER_THEME = 'FILTER_THEME'
export const FILTER_INCLUDE = 'FILTER_INCLUDE'
export const FILTER_EXCLUDE = 'FILTER_EXCLUDE'

/**
 * Helper functions
 */
function add_filter(value, filters){
    if (filters.indexOf(value) === -1) {
        filters.push(value);
    }
    return filters
}
function delete_filter(value, filters){
    var index = filters.indexOf(value);
    if (index !== -1) {
        filters.splice(index, 1);
    }
    return filters
}

function getFilteredCatalog(catalog = [], filters = [], object_name){
    let auxList = []
    if(filters.length > 0) {
        for (var i in catalog) {
            let intersection = ld.intersection(catalog[i][object_name]['array'], filters)
            if (intersection.length > 0 && intersection.length == filters.length) {
                auxList.push(catalog[i])
            }
        }
        return auxList
    }
    return catalog
}
function searchCatalog(catalog,categories,countries,excludes,includes,destinations,themes){
    let auxCatalog = []
    if(catalog.length > 0){
        auxCatalog = getFilteredCatalog(catalog, categories,'category')
        auxCatalog = getFilteredCatalog(auxCatalog, countries,'country')
        auxCatalog = getFilteredCatalog(auxCatalog, excludes,'exclude')
        auxCatalog = getFilteredCatalog(auxCatalog, includes,'include')
        auxCatalog = getFilteredCatalog(auxCatalog, destinations,'destination')
        auxCatalog = getFilteredCatalog(auxCatalog, themes,'theme')
    }
    return auxCatalog
}

function createCatalogObject(data,type=REQUEST_CATALOG){
    let response = {}
    switch (type){
        case REQUEST_CATALOG:
            response = {
                catalog: data.catalog,
                originalCatalog: data.catalog,
                themes: data.theme_filter,
                themes_active: [],
                destinations: data.destination_filter,
                destinations_active:[],
                countries: data.country_filter,
                countries_active:[],
                categories: data.category_filter,
                categories_active: [],
                includes: data.included_filter,
                includes_active: [],
                excludes: data.excluded_filter,
                excludes_active: [],
            }
    }
    return response
}
/*
 * Action Creations
 */
export function requestCatalog() {
    return(dispatch,getState)=>{
        let localApiCatalogURL = experiensa_vars.siteurl + '/wp-json/wp/v2/catalog'
        axios.get(localApiCatalogURL, {timeout: 30000})
        .then((response)=>{
            let catalogResponse = createCatalogObject(response.data)
            dispatch(
                {
                    type: REQUEST_CATALOG,
                    payload: catalogResponse
                }
            )
        })
        .catch((error)=>{
            console.log('Error',error)
        })
    }
 }

export function filterCatalog(filterType,value,active){
    return(dispatch,getState)=>{
        let original_state = getState().catalog
        let originalCatalog = original_state.originalCatalog
        //Filters Actives
        let categories_active = original_state.categories_active
        let countries_active = original_state.countries_active
        let excludes_active = original_state.excludes_active
        let includes_active = original_state.includes_active
        let destinations_active = original_state.destinations_active
        let themes_active = original_state.themes_active
        switch (filterType){
            case FILTER_CATEGORY:
                if(active){
                    categories_active = add_filter(value,categories_active)
                }else{
                    categories_active = delete_filter(value,categories_active)
                }
                break
            case FILTER_COUNTRY:
                if(active){
                    countries_active = add_filter(value,countries_active)
                }else{
                    countries_active = delete_filter(value,countries_active)
                }
                break
            case FILTER_EXCLUDE:
                if(active){
                    excludes_active = add_filter(value,excludes_active)
                }else{
                    excludes_active = delete_filter(value,excludes_active)
                }
                break
            case FILTER_INCLUDE:
                if(active){
                    includes_active = add_filter(value,includes_active)
                }else{
                    includes_active = delete_filter(value,includes_active)
                }
                break
            case FILTER_DESTINATION:
                if(active){
                    destinations_active = add_filter(value,original_state.destinations_active)
                }else{
                    destinations_active = delete_filter(value,original_state.destinations_active)
                }
                break
            default:
                if(active){
                    themes_active = add_filter(value,original_state.themes_active)
                }else{
                    themes_active = delete_filter(value,original_state.themes_active)
                }
                break
        }
        let newCatalog
        if( categories_active.length < 1
            && countries_active.length < 1
            && excludes_active.length < 1
            && includes_active.length <1
            && destinations_active.length < 1
            && themes_active.length < 1){
            newCatalog =  originalCatalog
        }else{
            newCatalog = searchCatalog(originalCatalog,
                categories_active,
                countries_active,
                excludes_active,
                includes_active,
                destinations_active,
                themes_active
            )
        }
        const catalogResponse = {
            catalog: newCatalog,
            originalCatalog: originalCatalog,
            themes: original_state.themes,
            themes_active: themes_active,
            destinations: original_state.destinations,
            destinations_active:destinations_active,
            countries: original_state.countries,
            countries_active: countries_active,
            categories: original_state.categories,
            categories_active: categories_active,
            includes: original_state.includes,
            includes_active: includes_active,
            excludes: original_state.excludes,
            excludes_active: excludes_active,
        }
        dispatch(
            {
                type: FILTER_CATALOG,
                payload: catalogResponse
            }
        )
        // console.log('type es',filterType)
        // console.log('value es',value)
        // console.log('evento!',getState())
        // // console.log('countries_active!',countries_active)
        // console.log('newCatalog',newCatalog)
    }
}
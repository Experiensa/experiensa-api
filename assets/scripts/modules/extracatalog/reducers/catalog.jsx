import {REQUEST_CATALOG, FILTER_CATALOG} from '../actions'

const initialState = {
    catalog: [],
    originalCatalog: [],
    user_filter: [],
    themes: [],
    themes_active: [],
    destinations: [],
    destinations_active: [],
    countries: [],
    countries_active: [],
    categories: [],
    categories_active: [],
    includes: [],
    includes_active: [],
    excludes: [],
    excludes_active: [],
    price_values: [],
    input_text: ''
}
export function catalog(state = initialState, action){
    switch (action.type) {
        case REQUEST_CATALOG:
            return Object.assign({},state,action.payload)
        case FILTER_CATALOG:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}

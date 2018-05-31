import {REQUEST_CATALOG, FILTER_CATALOG} from '../actions'

const initialState = {
    catalog: [],
    originalCatalog: [],
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
    excludes_active: []
}
export function requestCatalog(state = initialState,action){
    switch (action.type) {
        case REQUEST_CATALOG:
            return Object.assign({},state,action.payload)
        case FILTER_CATALOG:
            // console.log('mi nuevo catalogo contiene ',Object.assign({}, state, action.payload))
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}

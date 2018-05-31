import { combineReducers } from 'redux'
import { requestCatalog } from './catalog'

const rootReducer = combineReducers({
    catalog: requestCatalog
})

export default rootReducer

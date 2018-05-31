import { combineReducers } from 'redux'
import { requestPosts } from './showcase'

const rootReducer = combineReducers({
    posts: requestPosts
})

export default rootReducer
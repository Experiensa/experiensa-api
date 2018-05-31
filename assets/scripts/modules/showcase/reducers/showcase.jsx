import {REQUEST_POSTS} from '../actions'

const initialState = {
    posts: []
}

export function requestPosts(state = initialState,action){
    switch (action.type) {
        case REQUEST_POSTS:
            // console.log('mis posts son',Object.assign({},state,action.payload))
            return Object.assign({},state,action.payload)
        default:
            return state
    }
}
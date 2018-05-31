require('es6-promise').polyfill();
import axios from 'axios'
import _ from 'lodash'
const ld = _.noConflict();
//Action Types
export const REQUEST_POSTS = 'REQUEST_POSTS'

function createRequestURL(post_type,taxonomy,terms,max){
    if(post_type === 'post')
        post_type = 'posts'
    const base_url = experiensa_vars.siteurl + '/wp-json/wp/v2/'
    let requestURL = base_url + post_type
    if(taxonomy !== 'all'){
        requestURL += '?per_page=' + max + '&filter[taxonomy]=' + taxonomy
        if(!ld.isEmpty(terms)){
            for(let i = 0; i < terms.length; i++){
                requestURL += '&filter[term]=' + terms[i]
            }
        }
    }
    return requestURL
}
function createPostsObject(data){
    return {
        posts: data
    }
}

export function requestPosts(post_type,taxonomy,terms,max) {
    return(dispatch,getState)=>{
        let requestURL = createRequestURL(post_type,taxonomy,terms,max)
        // console.log('requestURL',requestURL)
        axios.get(requestURL,{timeout: 30000})
        .then((response)=>{
            dispatch({
                type: REQUEST_POSTS,
                payload: createPostsObject(response.data)
            })
        })
        .catch((error)=>{
            dispatch({
                type: REQUEST_POSTS,
                payload: createPostsObject([])
            })
        })
    }
}
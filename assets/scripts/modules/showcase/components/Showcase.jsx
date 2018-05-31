import React from 'react'
import {connect} from 'react-redux'
import { Loader } from 'semantic-ui-react'
import {requestPosts} from '../actions'
import Layout from './Layout'

class Showcase extends React.Component{
    constructor(){
        super()
    }
    componentWillMount(){
        // console.log('mis query son ',this.props.query)
        // console.log('mis options son ',this.props.options)
        this.props.requestPosts(this.props.query.cpt,this.props.query.taxonomy,this.props.query.terms,this.props.query.max)
    }
    render(){
        // console.log('mi query', this.props.query)
        // console.log('mi options', this.props.options)
        const myPosts = this.props.posts
        let overlay = true
        if(this.props.options.overlay === 'false')
            overlay = false
        // console.log('el prop de overlay es',overlay)
        //  console.log('mis postx son',myPosts)
        // console.log('es array?',myPosts.constructor === Array)
        // console.log('el tamaño es ',myPosts.length)
        if(myPosts.constructor === Array && myPosts.length > 0){
            // console.log('voy a enviar posts',this.props.posts)
            // console.log('voy a enviar type',this.props.options.type)
            // console.log('voy a enviar row',this.props.options.posts_per_row)
            return (
                <div>
                    <Layout posts={this.props.posts} type={this.props.options.type} posts_per_row={this.props.options.posts_per_row} overlay={overlay}/>
                </div>
            )
        }else {
            return (
                <div>
                    <Loader active inline='centered' content='Loading'/>
                </div>
            )
        }
    }
}
function mapStateToProps(state){
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps,{requestPosts})(Showcase)
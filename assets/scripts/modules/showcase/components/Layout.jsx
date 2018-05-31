import React from 'react'
import { Segment } from 'semantic-ui-react'
import PostGrid from './PostGrid'
import Buttons from './Buttons'
import MasonryLayout from './MasonryLayout'
import Carousel from './Carousel'
import Pinterest from './Pinterest'
import VegasSlider from './VegasSlider'

export default class Layout extends React.Component{
    constructor(){
        super()
    }
    render(){
        // console.log('el type layout es',this.props.type)
        let type = this.props.type
        if(type == 'grid') {
            return (
                <Segment vertical className='component-content'>
                    <PostGrid posts={this.props.posts} posts_per_row={this.props.posts_per_row} overlay={this.props.overlay}/>
                </Segment>
            )
        }
        if(type == 'button'){
            return(
                <Segment vertical className='component-content'>
                    <Buttons posts={this.props.posts} posts_per_row={this.props.posts_per_row}/>
                </Segment>
            )
        }
        if(type == 'carousel'){
            return(
                <div className='component-content'>
                    <Carousel posts={this.props.posts} posts_per_row={this.props.posts_per_row}/>
                </div>
            )
        }
        if(type == 'vegas'){
            return(
                <div className='component-content'>
                    <VegasSlider posts={this.props.posts}/>
                </div>
            )
        }
        if(type == 'pinterest'){
            return(
                <div className='component-content'>
                    <Pinterest posts={this.props.posts} posts_per_row={this.props.posts_per_row} overlay={this.props.overlay}/>
                </div>
            )
        }
        return(
            <div className='component-content'>
                <MasonryLayout posts={this.props.posts} posts_per_row={this.props.posts_per_row} overlay={this.props.overlay}/>
            </div>
        )
    }
}
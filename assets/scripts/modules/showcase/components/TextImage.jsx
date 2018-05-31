import React from 'react'
import { Image, Dimmer } from 'semantic-ui-react'
import * as Images from '../functions/Images'

export default class TextImage extends React.Component{
    constructor(){
        super()
        this.state = {active: false}
    }
    getContent(){
        return(
            <a
                href={this.props.post.link}
                target='_blank'
                style = {{color: 'inherit'}}
            >
                {this.props.post.title.rendered}
            </a>
        )
    }
    renderSingleImage(){
        const imgURL = Images.getImageURL(this.props.post)
        return(
            <Image
                src={imgURL}
                as='a' fluid
                href={this.props.post.link}
                target='_blank'
                alt="Post Image"
            />
        )
    }
    renderTextImage(active){
        const imgURL = Images.getImageURL(this.props.post)
        const content = this.getContent()
        return(
            <Dimmer.Dimmable
                as={Image}
                dimmed={active}
                dimmer={{ active, content }}
                onMouseEnter={this.handleShow}
                onMouseLeave={this.handleHide}
                fluid
                src={imgURL}                
            />
        )
    }
    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })
    render(){
        const { active } = this.state
        if(this.props.overlay){
            return(
                <div>
                    {this.renderTextImage(active)}
                </div>
            )
        }else{
             return(
                 <div>
                     {this.renderSingleImage()}
                 </div>
             )
        }
    }
}
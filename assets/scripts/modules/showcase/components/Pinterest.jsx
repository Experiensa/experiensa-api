import React from "react";
import StackGrid from "react-stack-grid";
import { Image, Dimmer } from 'semantic-ui-react'
import * as Images from '../functions/Images';
import TextImage from './TextImage';

export default class Pinterest extends React.Component{
    constructor(){
        super()
    }
    renderCards(){
        return this.props.posts.map((post,i) => {
            return (
                <div key={i}>
                    {<TextImage post={post} overlay={this.props.overlay}/>}
                </div>
            )
        })
    }
    render(){
        let columnNumber = parseInt(this.props.posts_per_row)
        let columnWidth;
        switch(columnNumber){
            case 1:
                columnWidth = "100%";
                break;
            case 2:
                columnWidth = "50%";
                break;
            case 3:
                columnWidth = "30%";
                break;
            case 4:
                columnWidth = "25%";
                break;
            default:
                columnWidth = "10%";
        }
        return(
            <StackGrid
                columnWidth={columnWidth}
                gutterWidth={5}
                gutterHeight={5}
                duration={1000}
            >
                {this.renderCards()}
            </StackGrid>
        )
    }
}
import React from 'react'
import { Grid, Image, Segment, Container, Header, Button } from 'semantic-ui-react'

export default class Buttons extends React.Component{
    constructor(){
        super()
    }
    renderButtons(){
        return this.props.posts.map((post,i)=>{
            console.log('mi post actaul es',post)
            return (
                <Grid.Column key={i}>
                    <Button
                        className="showcase-button"
                        basic
                        as='a'
                        href={post.link}
                        target='_blank'
                    >
                        {post.title.rendered}
                    </Button>
                </Grid.Column>
            )
        })
    }
    render(){
        return(
            <Grid centered stackable columns={this.props.posts_per_row}>
                {this.renderButtons()}
            </Grid>
        )
    }
}
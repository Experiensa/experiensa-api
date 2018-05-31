import React from 'react'
import { Grid, Segment} from 'semantic-ui-react'
import TextImage from './TextImage'

export default class PostGrid extends React.Component{
    constructor(){
        super()
    }
    renderColumns(){
        return this.props.posts.map((post,i)=>{
            return (
                <Grid.Column key={i}>
                    <Segment secondary textAlign="center" style={{padding: 0}}>
                        <TextImage post={post} overlay={this.props.overlay}/>
                    </Segment>
                </Grid.Column>
            )
        })
    }
    render(){
        return(
            <Grid stackable columns={this.props.posts_per_row}>
                {this.renderColumns()}
            </Grid>
        )
    }
}
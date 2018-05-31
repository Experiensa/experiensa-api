import React from 'react'
import { Button, Header, Image, Modal, Icon, Grid, Menu, Segment, Container } from 'semantic-ui-react'
import Slider from 'react-slick'
import imageUrl from '../../../../../../images/travel-no-image.jpg'
import { getVoyageImage } from '../../common/Info'
const travelNoImage = experiensa_vars.dist_url + imageUrl

export default class DetailsModal extends React.Component {
    constructor(){
        super()
    }
    renderInformation(){
        let voyage = this.props.data
        // console.log('DetailsModal', voyage)
        let price = () =>{
            let value = ""
            if(voyage.price){
                value = "<b>Prix</b>: "+ voyage.price+" "
                if(voyage.currency)
                    value += voyage.currency
                value += "<br/>"
            }
            return value
        }
        let duration = () =>{
            return (voyage.duration.text?"<b>Durée</b>: " + voyage.duration.text+"<br/>":"")
        }
        let country = () =>{
            return (voyage.country.text?"<b>Pays</b>: " + voyage.country.text+"<br/>":"")
        }
        let destination = () =>{
            return (voyage.location.text?"<b>Destination</b>: " + voyage.location.text+"<br/>":"")
        }
        let theme = () =>{
            return (voyage.theme.text?"<b>Thème</b>: " + voyage.theme.text+"<br/>":"")
        }
        let includes = () =>{
            return (voyage.included.text?"<b>Comprend</b>: " + voyage.included.text+"<br/>":"")
        }
        let excludes = () =>{
            return (voyage.excluded.text?"<b>Exclut</b>: " + voyage.excluded.text+"<br/>":"")
        }
        return(
            <Grid stackable columns={2}>
                <Grid.Column width={6}>
                    <Container>
                    <div dangerouslySetInnerHTML={{__html: price()}}/>
                    <div dangerouslySetInnerHTML={{__html: duration()}}/>
                    <div dangerouslySetInnerHTML={{__html: country()}}/>
                    <div dangerouslySetInnerHTML={{__html: destination()}}/>
                    <div dangerouslySetInnerHTML={{__html: theme()}}/>
                    <div dangerouslySetInnerHTML={{__html: includes()}}/>
                    <div dangerouslySetInnerHTML={{__html: excludes()}}/>
                    <br/>
                    </Container>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Container>
                        <p dangerouslySetInnerHTML={{__html: voyage.content}}></p>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
    renderDetails(){
        let voyage = this.props.data
        let itinerary_title = () => {
            let title = ''
            if(voyage.itinerary && voyage.itinerary !== "")
                title = "Itinerary"
            return title
        }
        return(
            <div>
                <Header as='h2'>{itinerary_title()}</Header>
                <p dangerouslySetInnerHTML={{__html: voyage.itinerary}}/>
            </div>
        )
    }
    renderGallery(){        
        let voyage = this.props.data
        const imageObj = getVoyageImage(voyage)
        if(imageObj.gallery){
            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }
            return(
                <Container>
                    <Slider {...settings}>
                        {imageObj.src.map((image,index)=>{
                            return(
                                <div key={index} className="slider-item">
                                    <Image src={image} fluid style={{maxHeight:600}}/>
                                </div>
                            )
                        })}
                    </Slider>
                </Container>
            )
        }
        return(
            <Image src={imageObj.src} centered/>
        )
    }
    render(){
        const context = this.props.context
        if(context === 'gallery'){
            return(
                <Segment attached='bottom'>
                    <Container textAlign='center'>
                        {this.renderGallery()}
                    </Container>
                </Segment>
            )
        }else{
            if(context === 'details'){
                return(
                    <Segment attached='bottom'>
                        {this.renderDetails()}
                    </Segment>
                )
            }
        }
        return (
            <Segment attached='bottom'>
                {this.renderInformation()}
            </Segment>
        )
    }
}
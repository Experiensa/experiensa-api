import React from 'react'
import { Button, Header, Image, Modal, Icon, Grid, Menu, Segment } from 'semantic-ui-react'
import withImportantStyle from 'react-with-important-style';
import DetailModalContent from './DetailModalContent'
import imageUrl from '../../../../../../images/travel-no-image.jpg'
var CardImage = withImportantStyle('img');
const travelNoImage = experiensa_vars.dist_url + 'vendor/travel-no-image.jpg'
// console.log('experiensa_vars.dist_url',experiensa_vars.dist_url);
// console.log('imageUrl',imageUrl);
// console.log('travelNoImage',travelNoImage);
export default class DetailsModal extends React.Component {
    constructor(){
        super()
        this.state = {
            modalOpen: false,
            activeItem: 'information'
        }
    }
    handleOpen = (e) => {
        this.setState({
            modalOpen: true,
        })
        e.preventDefault()
    }
    handleClose = (e) => this.setState({
        modalOpen: false,
    })
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }
    createButtonAction(){
        if(this.props.options.price != "Non disponible"){
            return(
                <div className="content">
                    <Button id="modal-card-details" className="catalog-detail-button" onClick={this.handleOpen} fluid>{this.props.price}</Button>
                </div>
            );
        }
        return(
            <div className="content">
                <Button id="modal-card-details" className="catalog-detail-button" onClick={this.handleOpen} fluid>Details</Button>
            </div>
        );
    }
    createImage(voyageImage){
        const border = this.props.options.content_border_radius;
        // console.log('mi border es', border)
        if(border !== 'inherit'){
            // console.log('voy por aqui')
            const imgStyle = {
                borderTopLeftRadius: `${border}rem !important`,
                borderTopRightRadius: `${border}rem !important`,
            }
            // console.log(imgStyle);
            return(                
                <CardImage className="image catalog-image" src={voyageImage} onClick={this.handleOpen} style={imgStyle}/>
            )
        }else{
            // console.log('voy por alla')
            return(
                <Image className="image catalog-image" src={voyageImage} onClick={this.handleOpen}/>
            )
        }
    }
    render(){
        const { activeItem } = this.state
        let voyage = this.props.voyage
        const encodedSubject = encodeURIComponent(voyage.title)
        const mailto = 'mailto:'+experiensa_vars.agency_email+'?subject='+encodedSubject
        // console.log('lo que voy a mostrar en el mailto es',mailto)

        let voyageImage = () => {
            const lostTravelImage = travelNoImage
            // console.log(lostTravelImage)
            // console.log('mi ruta es',experiensa_vars.assets_url)
            let image = voyage.cover_image
            let imageSrc
            if(!image.feature_image && image.gallery.length < 1){
                imageSrc = lostTravelImage
            }else{
                if(image.feature_image){
                    imageSrc = image.feature_image
                }else{
                    imageSrc = image.gallery[0]
                }
            }
            return imageSrc
        }
        let itinerary_title = () => {
            let title = ''
            if(voyage.itinerary && voyage.itinerary !== "")
                title = "Itinerary"
            return title
        }

        let actionTrigger
        if(this.props.type == 'button'){
            actionTrigger = this.createButtonAction()
        }else{
            actionTrigger = this.createImage(voyageImage())
        }
        return(
            <Modal trigger={actionTrigger}
                   open={this.state.modalOpen}
                   onClose={this.handleClose}
            >
                <Modal.Header>
                    <h2>{voyage.title}</h2>
                </Modal.Header>
                <Modal.Content>
                    <Menu attached='top' tabular>
                        <Menu.Item name='information' active={activeItem === 'information'} onClick={this.handleItemClick}/>
                        {itinerary_title()!==''?(
                            <Menu.Item name='details' active={activeItem === 'details'} onClick={this.handleItemClick}/>
                        ):(<div></div>)}
                        <Menu.Item name='gallery' active={activeItem === 'gallery'} onClick={this.handleItemClick}/>
                    </Menu>
                    <DetailModalContent context={activeItem} data={voyage}/>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="black" onClick={this.handleClose}>Fermer</Button>
                    <a className="ui positive right labeled icon button" href={mailto}>
                        Nous contacter
                        <Icon name='checkmark'/>
                    </a>
                </Modal.Actions>
            </Modal>
        )
    }
}
import React from 'react'
import _ from 'lodash'
const ld = _.noConflict();
import { Card, Loader } from 'semantic-ui-react'
import VoyageCards from './themes/VoyageCards'
import VoyagePinterest from './themes/VoyagePinterest'

export default class CatalogLayout extends React.Component {
    constructor(){
        super()
    }
    elementsToShow(){
        let elements = this.props.options.elements
        return({
            title: ld.includes(elements,'title'),
            price: ld.includes(elements,'price'),
            detail_button: ld.includes(elements,'detail_button'),
            destination: ld.includes(elements,'destination'),
            duration: ld.includes(elements,'duration'),
            themes: ld.includes(elements,'themes'),
            country: ld.includes(elements,'country'),
            includes: ld.includes(elements,'includes'),
            excludes: ld.includes(elements,'excludes')
        })
    }
    renderVoyageCards(){
        return this.props.voyages.map((voyage,i) => {
            return(
                <VoyageCards voyage={voyage} key={i} options={this.props.options} show={this.elementsToShow()}/>
            )
        })
    }
    render() {
        const size = ld.size(this.props.voyages)
        if(size > 0) {
            let itemxrow = 4
            if(size < 4)
                itemxrow = size
            const type = this.props.options.type
            if (type == 'cards') {
                return (
                    <Card.Group className="stackable" itemsPerRow={4}>
                        {this.renderVoyageCards()}
                    </Card.Group>
                )
            }
            return (
                <VoyagePinterest voyages={this.props.voyages} options={this.props.options} show={this.elementsToShow()}/>
            );
        }else{
            return(
                <div>
                    <Loader active inline='centered' content='Loading'/>
                </div>
            )
        }
    }
}

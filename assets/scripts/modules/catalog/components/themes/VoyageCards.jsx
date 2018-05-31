import React from 'react'
import DataRow from '../common/DataRow'
import DetailsModal from '../voyages/layouts/DetailsModal'
import * as Info from '../common/Info'
// import { Card } from 'semantic-ui-react'

export default class VoyageCards extends React.Component {
    constructor(){
        super()
    }
    renderDetailButton(price){
        if(this.props.show.detail_button){
            return(
                <DetailsModal voyage={this.props.voyage} price={price} options={this.props.options} type="button"/>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
    render() {
        const voyage = this.props.voyage;
        const price = Info.getVoyagePrice(voyage)
        return(
            <div className="ui card">
                <DetailsModal voyage={this.props.voyage} price={price} options={this.props.options} type="image"/>
                <div className="content">
                    <DataRow show={this.props.show.title} title={voyage.title} value="" isTitle={true}/>
                    <DataRow show={this.props.show.price} title="Prix" value={price} isTitle={false}/>
                    <DataRow show={this.props.show.duration} title="Durée" value={voyage.duration} isTitle={false}/>
                    <DataRow show={this.props.show.themes} title="Thème" value={voyage.theme.text} isTitle={false}/>
                    <DataRow show={this.props.show.destination} title="Lieux" value={voyage.location.text} isTitle={false}/>
                    <DataRow show={this.props.show.country} title="Pays" value={voyage.country.text} isTitle={false}/>
                    <DataRow show={this.props.show.includes} title="Comprend" value={voyage.included.text} isTitle={false}/>
                    <DataRow show={this.props.show.excludes} title="Exclut" value={voyage.excluded.text} isTitle={false}/>                    
                </div>
                {this.renderDetailButton(price)}
            </div>
        )
    }
}

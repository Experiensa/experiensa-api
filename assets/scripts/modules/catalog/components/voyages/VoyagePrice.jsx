import React from 'react';

export default class VoyagePrice extends React.Component {
    constructor(){
        super()
    }
    render() {
        let price
        if(this.props.price) {
            price = this.props.price
        }else{
            price = 'Indisponible'
        }
        return (
            <div className="ui blue ribbon label">
                {price}
            </div>
        );
    }
}

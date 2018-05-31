import React from 'react';

export default class CatalogVoyageTitle extends React.Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="content">
                <div className="header catalog-title">{this.props.title}</div>
            </div>
        );
    }
}

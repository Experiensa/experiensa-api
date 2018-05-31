import React from 'react'

export default class DataRow extends React.Component {
    constructor(){
        super()
    }
    render(){
        if(this.props.show){
            if(this.props.isTitle  && this.props.title){
                return(
                    <div className="header voyage-title">{this.props.title}</div>
                )
            }else{
                if( this.props.value) {
                    return (
                        <div className="voyage-content">
                            <strong>{this.props.title}: </strong>{this.props.value}
                        </div>
                    )
                }else{
                    return(
                        <div></div>
                    )
                }
            }
        }else{
            return (
                <div></div>
            )
        }
    }
}
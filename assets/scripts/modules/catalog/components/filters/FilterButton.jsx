import React from 'react';
import {connect} from 'react-redux'
//https://github.com/facebook/react/issues/1881
import withImportantStyle from 'react-with-important-style';
import {filterCatalog} from '../../actions'
import { Button } from 'semantic-ui-react'
var SingleButton = withImportantStyle('button');

class FilterButton extends React.Component {
    constructor(){
        super()
        this.state = {
            isActive: false,
            classValue: 'filter-button',
            styles: {
                margin: '3px !important'
            }
        }
        this.handleClick = this.handleClick.bind(this)
        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseOut = this.onMouseOut.bind(this)
    }
    componentWillMount() {
        this.setState({
            styles: {
                backgroundColor: `${this.props.color} !important`,
                margin: '3px !important'
            }
        })
    }
    handleClick(e,filter_type){        
        const active = !this.state.isActive
        const value = active ? 'active' : '';
        const color = (active?this.props.active_color:this.props.color);
        this.setState({
            isActive: active,
            classValue: value,
            styles: {
                backgroundColor: `${color} !important`,
                margin: '3px !important'
            }
        })
        this.props.filterCatalog(filter_type,this.props.name,!this.state.isActive)
    }
    onMouseOver(e){
        this.setState({
            styles: {
                backgroundColor: `${this.props.hover_color} !important`,
                margin: '3px !important'
            }
        })
    }
    onMouseOut(e){
        const active = this.state.isActive;
        const color = active?this.props.active_color:this.props.color;
        this.setState({
            styles: {
                backgroundColor: `${color} !important`,
                margin: '3px !important'
            }
        })
    }
    render() {
        return (
            <SingleButton
                className={`ui compact toggle button ${this.state.classValue} filter-button`}
                key={this.props.id}
                style={this.state.styles}
                onClick={(e) => this.handleClick(e,this.props.filter_type)}
                onMouseOver = {this.onMouseOver}
                onMouseOut = {this.onMouseOut}
            >
                {this.props.name}
            </SingleButton>
        );
    }
}
function mapStateToProps(state){
    return {
        isActive: false,
        customClass: "ui compact button"
    }
}

export default connect(mapStateToProps,{filterCatalog})(FilterButton)
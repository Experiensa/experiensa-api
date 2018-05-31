import React from 'react'
import StackGrid, { transitions } from "react-stack-grid";
import VoyagePinterestElement from './VoyageCards'
const { scaleDown } = transitions;

export default class VoyagePinterestLayout extends React.Component {
    constructor(){
        super()
    }
    render() {
        const voyages = this.props.voyages;
        return(
            <StackGrid
                columnWidth={250}
                gutterWidth={10}
                gutterHeight={15}
                duration={1000}
                appear={scaleDown.appear}
                appeared={scaleDown.appeared}
                enter={scaleDown.enter}
                entered={scaleDown.entered}
                leaved={scaleDown.leaved}
            >

                {voyages.map((voyage,i) => (
                    <VoyagePinterestElement key={i} voyage={voyage} options={this.props.options} show={this.props.show}/>
                ))}
            </StackGrid>
        )
    }
}

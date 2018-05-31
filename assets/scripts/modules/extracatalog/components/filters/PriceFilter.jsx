import 'rc-slider/assets/index.css';
import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { Accordion, Icon } from 'semantic-ui-react';
import {filterCatalog} from '../../actions';

const Range = Slider.Range

function moneyFormatter(v) {
  return `${v} ${experiensa_vars.currency}`;
}
const marks = {
  0: `0 ${experiensa_vars.currency}`,
  9999: `9999 ${experiensa_vars.currency}`
};
const SliderWithTooltip = createSliderWithTooltip(Range);

class PriceFilter extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isActive: false };
		this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    const { isActive } = this.state;
    console.log('is active', isActive);
		this.setState({
			isActive: !isActive
		})
  }
  onSliderChange = (value) => {
    this.props.filterCatalog('FILTER_PRICE', this.props.input_text, true, value)
  }
  render(){
    const {keyVal} = this.props;
    const { isActive } = this.state;
    // console.log('keyVal', keyVal)
    // console.log('is active1', isActive)
    return(
      <div>
        <Accordion.Title
          active={isActive} 
          index={keyVal}
          onClick={(e) => this.handleClick(e)}
        >
          Prix
        </Accordion.Title>
        <Accordion.Content active={isActive}>
          <SliderWithTooltip
            tipFormatter={moneyFormatter}
            marks={marks}
            tipProps={{ overlayClassName: 'foo' }}
            defaultValue={[0, 9999]}
            min={0} max={9999}
            onChange={this.onSliderChange} 
          />
        </Accordion.Content>
      </div>
    )
  }
}
function mapStateToProps(state){
	return {
      isActive: false,
      input_text: state.catalog.input_text
	}
}
export default connect(mapStateToProps,{filterCatalog})(PriceFilter)
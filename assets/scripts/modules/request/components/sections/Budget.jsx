import 'rc-slider/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const Range = Slider.Range

function moneyFormatter(v) {
  return `${v} ${experiensa_vars.currency}`;
}

const SliderWithTooltip = createSliderWithTooltip(Range);

export default class Budget extends React.Component{
  constructor(props) {
    super(props);
  }
  onSliderChange = (value) => {
    this.props.min_budget.input.onChange(value[0])
    this.props.max_budget.input.onChange(value[1])
  }
  render(){
    const fields = this.props;
    // console.log('props budget',fields)
    return(
      <div>
        <SliderWithTooltip
        tipFormatter={moneyFormatter}
        tipProps={{ overlayClassName: 'foo' }}
        defaultValue={[this.props.min_budget.input.value, this.props.max_budget.input.value]}
        min={0} max={9000}
        onChange={this.onSliderChange} 
        />
      </div>
    )
  }
}
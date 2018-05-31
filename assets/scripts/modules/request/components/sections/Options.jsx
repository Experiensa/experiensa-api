import React, { Component } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

/*const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;*/

class Options extends Component {
    constructor(props) {
        super(props)
    }
    handleChangeCompanion = (e, data) => {
        // console.log('handleChangeCompanion e',e);
        // console.log('handleChangeCompanion data',data);
    }
    render() {
        const fields = this.props;
        // console.log('Options fields', fields);
        return(
            <div>
                <div className="fields">
                    <div className="three wide field">
                        <div className="ui fluid input field">
                            <select {...fields.companion.input} onChange={(e,data)=>this.handleChangeCompanion(e,data)} className="ui dropdown">
                                <option value="">Traveling with</option>
                                <option value="alone">Alone</option>
                                <option value="couple">In couple</option>
                                <option value="family">Family</option>
                                <option value="friends">Friends</option>
                                <option value="group">Group</option>
                                <option value="colleagues">Collegues</option>
                            </select>
                        </div>
                    </div>
                    <div className="three wide field">
                        <div className="ui fluid input field">
                            <select {...fields.adults.input} className="ui dropdown">
                                <option value="">Adults</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="more">More</option>
                            </select>
                        </div>
                    </div>
                    <div className="three wide field">
                        <div className="ui fluid input field" ng-hide="companion">
                            <select {...fields.kids.input} className="ui dropdown">
                                <option value="">Kids (2-11 years)</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="< 12 years">12 year old</option>
                                <option value="more">More</option>
                            </select>
                        </div>
                    </div>
                    <div className="three wide field">
                        <div className="ui fluid input field">
                            <select {...fields.babies.input} className="ui dropdown">
                                <option value="">Babies (0-1 years)</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="more">More</option>
                            </select>
                        </div>
                    </div>
                    <div className="four wide field">
                        <strong>Budget</strong>
                        <div className="budget-slider">
                            <div id="price-slider"></div>
                            <input type="hidden" {...fields.budget.input}/>
                        </div>
                        <br/>
                    </div>
                </div>
                <div className="fields">
                    <div className="sixteen wide field">
                        <textarea placeholder="Preferences" className="ui textarea wide" {...fields.preferences.input}></textarea>
                    </div>
                </div>     
            </div>
        );
    }
}
export default Options;
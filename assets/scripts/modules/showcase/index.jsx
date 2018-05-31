import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
require('es6-symbol/implement')
import 'semantic-ui-css/semantic.css';
import reducers from './reducers';
import Showcase from './components/Showcase'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const renderShowcase = function(){
    let showcaseComponent = document.getElementById('showcase-component');
    if(showcaseComponent != null){
        let options = JSON.parse(showcaseComponent.dataset.options)
        let query = JSON.parse(showcaseComponent.dataset.query)
        ReactDOM.render(
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Showcase options={options} query={query}/>
            </Provider>,
            showcaseComponent
        )
    }else{
        let lc_preview = document.getElementById('page-builder-frame')
        if(lc_preview != null) {
            showcaseComponent = typeof window.frames['page-builder-frame'].frameElement !== "undefined" && typeof window.frames['page-builder-frame'].frameElement.contentDocument !== "undefined" ? window.frames['page-builder-frame'].frameElement.contentDocument.getElementById('showcase-component') : null;
            if (showcaseComponent != null) {
                let options = JSON.parse(showcaseComponent.dataset.options)
                let query = JSON.parse(showcaseComponent.dataset.query)
                ReactDOM.render(
                    <Provider store={createStoreWithMiddleware(reducers)}>
                        <Showcase options={options} query={query}/>
                    </Provider>,
                    showcaseComponent
                )
            }
        }
    }
}
module.exports = {
    renderShowcase: renderShowcase
}
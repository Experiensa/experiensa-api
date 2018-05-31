import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
require('es6-symbol/implement');

import 'semantic-ui-css/semantic.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reducers from './reducers';
import Catalog from './components/Catalog';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const renderCatalog = function() {
    let catalog_app = document.getElementById('catalogApp');
    // console.log('pregunto por catalog_app1', catalog_app);
    if (catalog_app != null) {
        let options = JSON.parse(catalog_app.dataset.options)
        let filters = JSON.parse(catalog_app.dataset.filters)
        ReactDOM.render(
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Catalog options={options} filters={filters}/>
            </Provider>,
            catalog_app);
    }else{
        let lc_preview = document.getElementById('page-builder-frame')
        // console.log('pregunto por lc_preview', lc_preview);
        if(lc_preview != null){
        //     console.log('frames', window.frames)
        //     console.log('page-builder-frame',window.frames['page-builder-frame'])
        //     console.log('frameElement',window.frames['page-builder-frame'].frameElement)
        //     console.log('contentDocument',window.frames['page-builder-frame'].frameElement.contentDocument)
            catalog_app = typeof window.frames['page-builder-frame'].frameElement !== "undefined" && typeof window.frames['page-builder-frame'].frameElement.contentDocument !== "undefined" ? window.frames['page-builder-frame'].frameElement.contentDocument.getElementById('catalogApp') : null;
            // console.log('pregunto por catalog_app2', catalog_app);
            if (catalog_app != null) {
                // console.log('voy al render ', catalog_app.dataset);
                let options = JSON.parse(catalog_app.dataset.options)
                let filters = JSON.parse(catalog_app.dataset.filters)
                ReactDOM.render(
                    <Provider store={createStoreWithMiddleware(reducers)}>
                        <Catalog options={options} filters={filters}/>
                    </Provider>,
                    catalog_app);
            }
        }
    }
}
module.exports = {
    renderCatalog: renderCatalog
}
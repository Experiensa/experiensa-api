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
import Main from './components';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const renderExtraCatalog = function() {
  let extra_catalog_app = document.getElementById('extracatalogApp');
  if (extra_catalog_app != null) {
      let options = JSON.parse(extra_catalog_app.dataset.options)
      let filters = JSON.parse(extra_catalog_app.dataset.filters)
      ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Main options={options} filters={filters}/>
        </Provider>,
        extra_catalog_app);
  }else{
      
      let lc_preview = document.getElementById('page-builder-frame')
      if(lc_preview != null){
        extra_catalog_app = typeof window.frames['page-builder-frame'].frameElement !== "undefined" && typeof window.frames['page-builder-frame'].frameElement.contentDocument !== "undefined" ? window.frames['page-builder-frame'].frameElement.contentDocument.getElementById('extracatalogApp') : null;
        if (extra_catalog_app != null) {
              let options = JSON.parse(extra_catalog_app.dataset.options)
              let filters = JSON.parse(extra_catalog_app.dataset.filters)
              ReactDOM.render(
                <Provider store={createStoreWithMiddleware(reducers)}>
                    <Main options={options} filters={filters}/>
                </Provider>,
                extra_catalog_app);
        }
      }
  }
}
module.exports = {
  renderExtraCatalog
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
require('es6-symbol/implement');
import reducers from './reducers';
import Request from './components/Request';

import 'semantic-ui-css/semantic.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const renderRequest = function() {
  let requestComponent = document.getElementById('requestComponent');
  if (requestComponent != null) {
      ReactDOM.render(
        <Provider store={store}>
            <Request/>
        </Provider>,
        requestComponent
      );
  }else{
      let lc_preview = document.getElementById('page-builder-frame')
      if(lc_preview != null){
        requestComponent = typeof window.frames['page-builder-frame'].frameElement !== "undefined" && typeof window.frames['page-builder-frame'].frameElement.contentDocument !== "undefined" ? window.frames['page-builder-frame'].frameElement.contentDocument.getElementById('requestComponent') : null;
        if (requestComponent != null) {
          ReactDOM.render(
            <Provider store={store}>
                <Request/>
            </Provider>,
            requestComponent
          );
        }
      }
  }
}
module.exports = {
  renderRequest: renderRequest
}




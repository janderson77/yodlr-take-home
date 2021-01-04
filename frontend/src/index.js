import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {applyMiddleware, createStore, compose} from 'redux'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { render } from 'react-dom';
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { presentationApp } from './reducers'
import { slideLeft, slideRight } from './actions'
import { devTools, persistState } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import MyDeck from './deck'

const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)
const store = finalCreateStore(presentationApp)
let rootElement = document.getElementById('root')

render(
  <div>
    <Provider store={store}>
      <MyDeck />
    </Provider>
  </div>,
  rootElement
);

// <DebugPanel top right bottom>
//   <DevTools store={store} monitor={LogMonitor} />
// </DebugPanel>

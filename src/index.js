import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import configureStore from './store/store'



//Style
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePickerComponent from './components/DatePickerComponent';
import { StyledEngineProvider } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react'


const { store,persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StyledEngineProvider injectFirst>
        <DatePickerComponent />
      </StyledEngineProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

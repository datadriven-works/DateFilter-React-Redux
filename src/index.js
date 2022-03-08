import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store/store';

//Style
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePickerComponent from './components/DatePickerComponent';
import { StyledEngineProvider } from '@mui/material/styles';


ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <DatePickerComponent />
    </StyledEngineProvider>
  </Provider>,
  document.getElementById('root')
);

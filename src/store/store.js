import { createStore } from 'redux';
import updateDates from '../reducers/date-reducer';

export default createStore( updateDates );
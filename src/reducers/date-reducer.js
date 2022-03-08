import { START_DATE_UPDATED, END_DATE_UPDATED } from '../actions/date-actions';

const initialState = {
    startDate: null,
    endDate: null
}

export function updateDates ( state = initialState, action ) {
    switch (action.type) {
        case START_DATE_UPDATED:
            return {
                ...state,
                startDate: action.startDate
            };
        case END_DATE_UPDATED:
            return  {
                ...state,
                endDate: action.endDate 
            };
        default:
            return state;
    }
}

export default updateDates;
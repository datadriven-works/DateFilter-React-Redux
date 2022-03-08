export const START_DATE_UPDATED = 'START_DATE_UPDATED';
export const END_DATE_UPDATED = 'END_DATE_UPDATED';
export const DEFINE_INI_STATE = 'DEFINE_INI_STATE';


export function updateStartDate (startDate) {
    return {
        type: START_DATE_UPDATED,
        startDate
    };
}
export function updateEndDate (endDate) {
    return {
        type: END_DATE_UPDATED,
        endDate
    };
}
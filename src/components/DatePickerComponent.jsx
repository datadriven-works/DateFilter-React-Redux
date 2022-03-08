import * as React from 'react';
import { connect } from "react-redux";
import { updateStartDate, updateEndDate } from '../actions/date-actions'; 

//UI
import { Card, Container } from "react-bootstrap";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import * as mui from '@mui/lab';


const DatePickerComponent = ({startDate, endDate, onChangeStartDate, onChangeEndDate}) => {
    return (
        <Container>
            <Card style={{ width: 'auto', alignItems: 'center'}}>
            <Card.Body>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    {
                        <mui.DesktopDatePicker
                            label="Start Date"
                            value={startDate}
                            onChange={(newStartDate) => {
                                onChangeStartDate(newStartDate)
                            }}
                            renderInput={(params) => 
                                <TextField {...params} style={{padding: '5px'}} 
                                />
                            }
                        >
                        </mui.DesktopDatePicker>
                    }
                    {
                        <mui.DesktopDatePicker
                            label="End Date"
                            value={endDate}
                            onChange={(newEndDate) => {
                                onChangeEndDate(newEndDate)
                            }}
                            renderInput={(params) => 
                                <TextField {...params} style={{padding: '5px'}} 
                                />
                            }
                        >
                        </mui.DesktopDatePicker>
                    }
                </LocalizationProvider>
            </Card.Body>
            </Card>
        </Container>
    );
}

const mapStateToProps = state => ({
    startDate: state.startDate,
    endDate: state.endDate
});

const mapDispatchToProps = dispatch => ({
    onChangeStartDate ( startDate ) {
        dispatch(updateStartDate(startDate));
    },
    onChangeEndDate( endDate ) {
        dispatch(updateEndDate(endDate));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerComponent);

import React, {Component} from 'react';
import DateTime from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";


class DateTimePicker extends Component {

    static defaultProps = {
        value: moment(),
        onChange: console.warn("onCreate not defined")
    }
    state = {
        startDate: moment()
    }

    handleChange = (date) => {
        this.props.onChange(date);
        this.setState({
            startDate: date,
        });
    }

    render(){
       
        return(

            <DateTime className="componentOutline"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    value = {this.state.startDate}
            />

        )
    }
}

export default DateTimePicker
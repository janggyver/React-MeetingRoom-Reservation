import React, {Component} from 'react';
import DateTimePicker from "./DateTimePicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import RoomSelect from './RoomSelect';


class ReservationForm extends Component{

    static defaultProps = {
        onCreate: console.warn("onCreate not defined")
    }
    
    state = {
        startDate: moment(),
        roomName: '',
    };

    
    handleChangeDate = (date) => {
        this.setState({
            startDate: date,
        });
    }
    

    handleChangeRoom = (optionSelected) => {
        this.setState({
            roomName: optionSelected.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            date:moment(),
            roomName: ''
        })
        console.log("state after submission:  " + this.state.startDate.format() + "Room Info  "+ this.state.roomName);
    }

  render(){
    //const {startDate} = this.state;
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>

            <DateTimePicker className="componentOutline"
              value = {this.date}
              onChange = {this.handleChangeDate}
            />
            {/* <DateTimePicker className="componentOutline"
              selected={startDate}
              onChange={this.handleChangeDate}
              value = {this.date}
              showTimeSelect
              timeIntervals={30}
              dateFormat="LT"
            /> */}



                <RoomSelect onChange={this.handleChangeRoom} />


          <button type="submit">Reserve</button>
        </div>
      </form>
     )
  };
}

export default ReservationForm
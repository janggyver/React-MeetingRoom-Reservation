import React, {Component} from 'react';
import DateTimePicker from "react-datepicker";
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
            date:'',
            roomName: ''
        })
        console.log("state after submission:  " + this.state.startDate.format() + "Room Info  "+ this.state.roomName);
    }

  render(){
    const {startDate} = this.state;
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <div>
            <h3>Choose a Date to Reserve</h3>
            <DateTimePicker className="componentOutline"
              selected={startDate}
              onChange={this.handleChangeDate}
              value = {this.date}
            />
            {/* <DateTimePicker className="componentOutline"
              selected={startDate}
              onChange={this.handleChangeDate}
              value = {this.date}
              showTimeSelect
              timeIntervals={30}
              dateFormat="LT"
            /> */}
          </div>


          <div>
            <h3>Choose a meeting room to Reserve</h3>
            <div>
                <RoomSelect onChange={this.handleChangeRoom} />
            </div>
            <div>{this.state.roomName.value}</div>
          </div>
          <button type="submit">등록</button>
        </div>
      </form>
     )
  };
}

export default ReservationForm
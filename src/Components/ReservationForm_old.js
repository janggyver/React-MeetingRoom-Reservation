import React, {Component} from 'react';
import DateTimePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
// import TimeRangePicker from 'react-time-range-picker';
// import RoomSelect from './RoomSelect';
// import { findDOMNode } from'react-dom';
// import $ from 'jquery';

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'vanila', label: 'Vanila'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'grape', label: 'Grape'},
  {value: 'peach', label: 'Peach'}
]

class ReservationForm_old extends Component{


  // static defaultProps = {
  //   onChange: console.warn('onChange not defined')
  // }
    state = {
        startDate: moment(),
        roomName: '',
    };

  handleChangeDate = (date) => {
    this.setState({
      startDate: date,
    });
    console.log(date);
  }

  handleChangeRoom = (optionSelected) => {
    const value = optionSelected.value;
    this.setState({
        roomName: value
    })
    
    console.log('Options selectd', value);

}

handleSubmit = (event) => {
  event.preventDefault();
  alert("date" + this.state.startDate.format("LL"));
  alert('room' + this.state.roomName);
}

  render(){
    const {startDate, roomName} = this.state;
    const {handleChangeDate, handleChangeRoom} = this;
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <div>
            <h3>Choose a Date to Reserve</h3>
            <DateTimePicker
              selected={startDate}
              onChange={handleChangeDate}
              value = {startDate}
            />
          </div>
          <div>{this.state.startDate.format("LL")}</div>

          <div>
            <h3>Choose a meeting room to Reserve</h3>
            <div>
                <Select className='selectBox'
                    defaultValue ="any room"
                    onChange={handleChangeRoom}
                    value={this.optionSelected}
                    options={options}
                    placeholder="Select a Room"
                    name ="roomName"
                />

            </div>
            <div>{this.state.roomName}</div>
          </div>
          <button type="submit">등록</button>
        </div>
      </form>
     )
  };
}

export default ReservationForm_old
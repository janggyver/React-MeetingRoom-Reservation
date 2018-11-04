import React, {Component} from 'react';
import DateTimePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import RoomSelect from './RoomSelect';

class ReservationForm extends Component{

    state = {
        startDate: moment(),
        startTime: moment(),
        roomName: ''
    };

 
  handleChange = (date) => {
      this.setState({
      startDate: date,
      startTime: date
    });
  }
 
//   handleChangeRoom = (e) =>{
//     this.setState(
//         {
//             roomName: e.tartget.value
//         })
// }

  render() {
    return (
      <div>
        <section date>
          <div>
            <h3>Choose a Date to Reserve</h3>
            <DateTimePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>
          <div>{this.state.startDate.format("LL")}</div>
          
        </section>
        <section time>
          <div>
            <h3>Choose a time slot to Reserve</h3>
            <DateTimePicker 
              selected={this.state.startTime}
              onChange={this.handleChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              dateFormat="LT"
              timeCaption="Time" 

            />
          </div>
          <div>{this.state.startDate.format("LT")}</div>
         </section>
         <section room>
          <div>
          <h3>Choose a time slot to Reserve</h3>
          <RoomSelect 
            onChange={this.handleChangeRoom}
            name = 'roomName'
            value = {this.state.roomName}
          />
          </div>
         </section>
      </div>

    );

  }
}

export default ReservationForm
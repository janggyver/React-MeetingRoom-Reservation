import React, {Component} from 'react';
import Select from 'react-select';
import './RoomSelect.css';

let timeSlotNumber = 1;
let startTime = 9;
const options = [
   // {value: timeSlotNumber, label: (startTime + " - " + startTime+1)},
    {value: 8, label: '08:00-09:00'},
    {value: 9, label: '09:00-10:00'},
    {value: 10, label: '10:00-11:00'},
    {value: 11, label: '11:00-12:00'},
    {value: 12, label: '12:00-13:00'},
    {value: 13, label: '13:00-14:00'},
    {value: 14, label: '14:00-15:00'},
    {value: 15, label: '15:00-16:00'},
    {value: 16, label: '16:00-17:00'},
    {value: 17, label: '17:00-18:00'},
]

class TimeSlots extends Component{

    state = {
        timeSlot: '',
    }

    render(){
        const {selectedOption} = this.state;
        return(
                <Select className="roomDefaultBox"  //'selectBox'
                    selected = {selectedOption}
                    value= {selectedOption}
                    onChange={this.props.onChange}
                    options={options}
                    placeholder="Select a Time Slot"
                />
        )
    }
}
export default TimeSlots
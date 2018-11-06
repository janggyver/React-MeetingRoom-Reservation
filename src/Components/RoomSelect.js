import React, {Component} from 'react';
import Select from 'react-select';
import './RoomSelect.css';

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'vanila', label: 'Vanila'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'grape', label: 'Grape'},
    {value: 'peach', label: 'Peach'}
]

class RoomSelect extends Component{

    state = {
        roomName: '',
    }

    render(){
        const {selectedOption} = this.state;
        return(
            <div>
                <Select className='selectBox'
                    //selected = {selectedOption}
                    value= {selectedOption}
                    onChange={this.props.onChange}
                    options={options}
                    placeholder="Select a Room"
                />
            </div>

        )
    }
}
export default RoomSelect
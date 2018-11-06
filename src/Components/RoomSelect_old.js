import React, {Component} from 'react';
import { FormControl, Select, MenuItem, FormHelperText } from '@material-ui/core';

class RoomSelect_old extends Component {

    static defaultProps = {
        onChange: console.warn('onChange not defined'),
        value: 'aaa'
    }
    state = {
        roomName: ''
    }

    handleChangeRoom = (optionSelected) =>{
        const value = optionSelected.value;
        this.setState(
            {
                roomName: value
            })
        alert(this.roomName);
        }

    render(){
        let roomNo = 0;
        const rooms = ["Monday Room", "Tuesday Room", "Wednesday Room", "Thursday Room", "Friday Room", "Saturday Room", "Sunday Room"];
        const roomLists = rooms.map(
            (room) => 
            <MenuItem key={++roomNo} value={room}>{room}</MenuItem>
        )

        const {onChange} = this.handleChangeRoom;
        return(
            <form className = "root" autoComplete="off">
                <FormControl className="formControl">
                    <Select
                        // selected={this.state.roomName}
                        value={this.optionSelected}
                        onChange={onChange}
                        displayEmpty
                        className="selectEmpty"
                        placeholder="Select a Room"
                    >
                        <MenuItem value="" disabled>
                             Room to Book
                        </MenuItem>
                            {roomLists}
                    </Select>
                    <FormHelperText>Meeting Room</FormHelperText>
                </FormControl>
                <div>{this.state.roomName}</div>
            </form>
        )
    }
}
export default RoomSelect_old
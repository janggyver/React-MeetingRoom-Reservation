import React, {Component} from 'react';
import moment from 'moment';
import DateTimePicker from "./DateTimePicker";
import RoomSelect from './RoomSelect';

class ReservationInfo extends Component {

    static defaultProps = {
        info: {
            startDate: '',
            roomName: "Room Name Reserved",
            id: 0
        },
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    }


    state = {
        editing: false, //when modify button clicked, change the value to true. Change texts to editable status for components

        startDate: '',
        roomName: ''
    }

    //function to toggle editing value
    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({
            editing: !editing
        })
    }

    //logics for handling when editing value changes
    componentDidUpdate(prevProps, prevState){
        const {info, onUpdate} = this.props;
        if(!prevState.editing && this.state.editing) { //when current state's editing changes to true
            this.setState({
                startDate: info.startDate,
                roomName: info.roomName
            })
        }
        if (prevState.editing && !this.state.editing){
            onUpdate(info.id, {
                startDate: this.state.startDate,
                roomName: this.state.roomName
            });
        }
    }

    //Remove an Item from a list and pass the result to the parent
    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

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

    render(){
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {editing} = this.state;

        if(editing){ //mode for modify
            return(
                <div style = {style}>
                    <DateTimePicker className="componentOutline"
                        //
                        value = {this.state.startDate}
                        onChange = {this.handleChangeDate}
                        //placeholder = {this.state.startDate}
                        />
                    <RoomSelect 
                        selectedOption = {this.state.roomName} 
                        onChange={this.handleChangeRoom} 
                        />
                    <button onClick={this.handleToggleEdit}>Apply</button>
                    <button onClick = {this.handleRemove}>Delete</button>
                </div>
            )
        }


        const {startDate, roomName, id } = this.props.info;

        return(
            <div style = {style}>
                <div>{startDate.format("LL")}</div>
                <div>{roomName}</div>
                <button onClick={this.handleToggleEdit}>Modify</button>
                <button onClick = {this.handleRemove}>Delete</button>
            </div>

        )
    }
}

export default ReservationInfo;
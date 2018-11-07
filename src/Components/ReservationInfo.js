import React, {Component} from 'react';
import moment from 'moment';

class ReservationInfo extends Component {

    static defaultProps = {
        info: {
            startDate: moment(),
            roomName: "Room Name Reserved",
            id: 0
        }
    }

    render(){
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {startDate, roomName, id } = this.props.info;

        return(
            <div style = {style}>
                <div>{startDate.format("LL")}</div>
                <div>{roomName}</div>
            </div>

        )
    }
}

export default ReservationInfo;
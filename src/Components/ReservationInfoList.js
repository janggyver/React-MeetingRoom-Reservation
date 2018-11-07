import React, {Component} from 'react';
import ReservationInfo from './ReservationInfo';
import './ReservationInfoList.css';

class ReservationInfoList extends Component{
    static defaultProps = {
        data: []
      }
    
      render() {
        const { data } = this.props;
        const list = data.map(
          info => (<ReservationInfo key={info.id} info={info}/>)
        );
    
        return (
          <div class='listBox'>
            {list}    
          </div>
        );
      }

}

export default ReservationInfoList;
import React, {Component} from 'react';
import ReservationInfo from './ReservationInfo';
import './ReservationInfoList.css';

class ReservationInfoList extends Component{
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
      }
      
      render() {
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
          info => (
            <ReservationInfo 
                key={info.id} 
                info={info}
                onRemove = {onRemove}
                onUpdate = {onUpdate}
            />)
        );
    
        return (
          <div class='listBox'>
            {list}    
          </div>
        );
      }

}

export default ReservationInfoList;
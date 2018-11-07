import React, {Component} from 'react';
import DateTimePicker from "./DateTimePicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import RoomSelect from './RoomSelect';


class SearchForm extends Component{

    static defaultProps = {
        keyword: '',
        onSearch: console.warn("onChange not defined")

    }
    
    state = {
        keyword: '',
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            keyword: e.target.value
        })
    }

    handleClick = () => {
        this.props.onSearch(this.state.keyword);
        this.setState({
            keyword: ""
        })
    }

  render(){

    return (

        <div>
          <input 
            type ="text" 
            value = {this.state.keyword}
            placeholder = "Type Room Name to search"
            onChange = {this.handleChange}
            />
          <button onClick={this.handleClick}>Search</button>
        </div>
     )
  };
}

export default SearchForm
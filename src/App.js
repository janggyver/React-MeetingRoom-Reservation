import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import ReservationForm from './Components/ReservationForm.js';
import ReservationInfoList from './Components/ReservationInfoList';


class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id:0,
        startDate: moment("2018-10-01"),
        roomName: 'Apple'
      },
      {
        id:1,
        startDate: moment("2018-11-02"),
        roomName: 'Banana'
      }
    ]
  };

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(
        info => info.id !==id
      )
    })
  }

  //update existing information
  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => info.id === id
        ? {...info, ...data} // create new object and overwrite whole data with existing data and passed data
        : info //use the existing value if no change
      )
    })
  }

  render() {
    const {information} = this.state;
    return (
      <div>
        <div className="">
          <header className="App-header"><h1>Welcome to the Meeting Room Reservation System</h1></header>
          <section date>
            <div>
              <ReservationForm
                onCreate = {this.handleCreate}
              />
              {/* {JSON.stringify(information)} */}
            </div>
            <div>
              <ReservationInfoList 
                data={this.state.information} 
                onRemove = {this.handleRemove}
                onUpdate = {this.handleUpdate}
              />
            </div>

          </section>

        </div>
        <div>

        </div>
      </div>



    );
  }
}

export default App;

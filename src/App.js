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
              {JSON.stringify(information)}
            </div>
            <div>
              <ReservationInfoList data={this.state.information} />
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

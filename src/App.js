import React, { Component } from 'react';
import './App.css';
import ReservationForm from './Components/ReservationForm.js';


class App extends Component {
  
  handleCreate = (data) => {
    console.log(data+"Handle Create에서");
  }


  render() {
    return (
      <div>
        <div className="">
          <header className="App-header"><h1>Welcome to the Meeting Room Reservation System</h1></header>
          <section date>
            <div>
              <ReservationForm
                onCreate = {this.handleCreate}
              />
            </div>
            <div>
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

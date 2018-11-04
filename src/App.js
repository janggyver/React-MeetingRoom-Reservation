import React, { Component } from 'react';
import './App.css';
import ReservationForm from './Components/ReservationForm.js';


class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header"><h1>Welcome to the Meeting Room Reservation System</h1></header>
          <section date>
            <div>
              <ReservationForm  />
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

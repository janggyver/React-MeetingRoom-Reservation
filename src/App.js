import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import ReservationForm from './Components/ReservationForm.js';
import ReservationInfoList from './Components/ReservationInfoList';
import SearchForm from './Components/SearchForm.js';

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id:0,
        startDate: moment("2018-10-01"),
        roomName: 'Apple',
        timeSlot: '09:00 - 10:00'
      },
      {
        id:1,
        startDate: moment("2018-11-02"),
        roomName: 'Banana',
        timeSlot: '14:00 - 15:00'
      }
    ],
    keyword:''
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

  // handleSearch = (e) => {
  //   this.setState({
  //     keyword: e.target.value
  //   })
  // }

  handleSearch = (keyword) => {

    this.setState({
      keyword
    })
  }

  render() {
    const {information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.roomName.indexOf(keyword) !==-1
    );
    return (
      <div>
        <div className="">
          <header className="App-header"><h1>Welcome to the Meeting Room Reservation System</h1></header>
          <section >
            <div>            
              <h3>Choose a Date and a Room Name to Reserve</h3>
              <ReservationForm
                onCreate = {this.handleCreate}
              />
              {/* {JSON.stringify(information)} */}
            </div>
            </section>
            <header className="App-header"><h2>Reservation Search</h2></header>
            <h3>Search by Room Name</h3>
            <section> 
              <div>
                <SearchForm
                  onSearch = {this.handleSearch}
                />
                {/* {JSON.stringify(information)} */}
              </div>
            </section>   
            <section>
               <header className="App-header"><h2>Reservation Lists </h2>{ "Number of Lists: "+ filteredList.length}</header>

               <div>
                <ReservationInfoList 
                  data={filteredList} 
                  onRemove = {this.handleRemove}
                  onUpdate = {this.handleUpdate}
                />
              </div>
            </section>

        </div>
      </div>



    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  // initalize state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  // on component mounting, fetch all existing data in the db
  // incorperate polling logic to check if db has changed
  // if yes - implement those changes into UI

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  };

  // kill process when done
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  };

  // note on ID's - on frontend, using id key of object
  // on backend, we use the object id assigned by MongoDB to modify
  // database entries
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message,
    });
  };

  // delete method uses backend api
  // to remove existing database info
  deleteFromDB = (idToDelete) => {
    parseInt(idToDelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id === idToDelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // update method uses backend api
  // to overwrite existing data in db
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.put('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };


  render() {
    return (
      <div>
        <ul>
          {data.length <= 0
            ? 'NO DB ENTIRES YET'
            : data.map((dat) => (
              <li style={{ padding: '10px' }} key={data.message}>
                <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
                <span stye={{ color: 'gray' }}> data: </span> {dat.message} <br />
              </li>
          ))}
        </ul>
      </div>
    )
  }
};

export default App;

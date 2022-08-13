import React from 'react';
import './App.css';
import GuestList from "./state/GuestList";
import UserSearch from "./refs/UserSearch";
import EventComponent from "./events/EventComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <GuestList/>
          <UserSearch/>
          <EventComponent/>
      </header>
    </div>
  );
}

export default App;

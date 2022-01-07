import { useState } from "react";
import "./App.scss";

function App() {
  return (
    <div className="trello-container">
      <div className="navbar app">App bar</div>
      <div className="navbar board">Board bar</div>
      <div className="board-columns">
        <div className="column">
          <header>Babara Muhanme</header>
          <ul>
            <li>
              <img
                src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              Title: Tech Rex
            </li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}

export default App;

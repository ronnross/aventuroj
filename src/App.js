import React, { Component, Fragment } from "react";
import Connection from "./components/Connection";
import OptionBar from "./components/OptionBar";
import Message from "./components/Message";
import Prompt from "./components/Prompt";
import File from "./components/File";
// import './App.css';

class App extends Component {
  render() {
    return (
      <div class="f5">
        <header>
          <Connection />
        </header>
        <main className="crt">
          <p>This is a response from the computer</p>
          <File />
          <br />
          <Prompt />
          <OptionBar />
          <img src="images/city.jpg" id="imageFile" alt="" />
          <Message>this is a new message</Message>
        </main>
      </div>
    );
  }
}

export default App;

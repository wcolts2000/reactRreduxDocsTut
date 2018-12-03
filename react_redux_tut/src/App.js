import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import AddToDo from "./containers/AddToDo";
import VisibleToDoList from "./containers/VisibleToDoList";

const GLobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.App {
  text-align: center;
}

`;

class App extends Component {
  render() {
    return (
      <>
        <GLobalStyles />
        <div className="App">
          <AddToDo />
          <VisibleToDoList />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;

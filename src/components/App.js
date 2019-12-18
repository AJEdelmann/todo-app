import React from "react";
import "../css/App.scss";
import Navigation from "./Navigation";
import MainContainer from "./MainContainer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation></Navigation>
        <MainContainer></MainContainer>
      </div>
    );
  }
}

export default App;

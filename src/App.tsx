import React from "react";
import logo from "./assets/logo.svg";
import "./styles/App.scss";
import InformationWrapper from "./components/InformationWrapper";
import Nav from "./components/Nav";

const App: React.FC = () => {
  return (
    <div className='App'>
      <header>
        <h2>FRONT-END DEVELOPER</h2>
        <p>coming soon</p>
      </header>
      <Nav />
      <main>
        <InformationWrapper />
        <dl>
          <dt>
            {" "}
            <img className='App-logo' src={logo} alt='' />
          </dt>
          <dt></dt>
          <dt></dt>
        </dl>
      </main>
    </div>
  );
};

export default App;

import React from "react";
import logo from "./assets/logo.svg";
import InformationWrapper from "./components/InformationWrapper";
import Nav from "./components/Nav";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Nav />
      <main>
        <header className='my-job'>
          <h2>Front-end Developer</h2>
        </header>
        <InformationWrapper />
        <dl>
          <dt>
            {" "}
            <img
              className='App-logo'
              src={logo}
              alt='Mahfouzer personal logo'
            />
          </dt>
          <dd className='email'>mahfouzs96@gmail.com</dd>
          <dd className='mobile-number'>+201286854355</dd>
          <dd className='social-media-handel'>@Mahfouzer</dd>
        </dl>
      </main>
    </div>
  );
};

export default App;

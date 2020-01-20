import React from "react";
import logo from "../assets/logo.svg";

const Nav: React.FC = () => {
  return (
    <section className='main-navigation'>
      <figure>
        <img src={logo} alt='Elephant at sunset' />
        <figcaption>Nader Mahfouz</figcaption>
      </figure>
      <nav>
        <ul>
          <li>
            <a href='#there'>ABOUT</a>
          </li>
          <li>
            <a href='#there'>EDUCATION</a>
          </li>
          <li>
            <a href='#there'>EXPERIENCES</a>
          </li>
          <li>
            <a href='#there'>EXTRACURRICULAR ACTIVITIES</a>
          </li>
          <li>
            <a href='#there'>SKILLS</a>
          </li>
          <li>
            <a href='#there'>PROJECTS</a>
          </li>
          <li>
            <a href='#there'>LANGUAGES</a>
          </li>
          <li>
            <a href='#there'>HOBBIES</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;

import React, { Component } from 'react';

import NavbarMain from './components/NavbarMain';
import NavbarTop from './components/NavbarTop';
import CoursesForm from './components/CoursesForm/CoursesForm';
import FeaturedCourses from './components/FeaturedCourses/FeaturedCourses';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container__app">
        <NavbarTop/>
        <NavbarMain/>
        <CoursesForm/>
        <FeaturedCourses/>
      </div>
    );
  }
}

export default App;

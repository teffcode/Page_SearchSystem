import React, { Component } from 'react';
import axios from 'axios';

import CoursesCards from '../CoursesCards/CoursesCards';

import '../../styles/FeaturedCourses.css';

class FeaturedCourses extends Component {

  constructor() {
    super();

    this.state = {
      query: '',
      courses: [],
      loading: false,
      error: ''
    }
  }

  getCoursesDataFromAPI = () => {
    axios.get(`https://api.cebroker.com/v2/featuredCoursesProfession?profession=36`)
        .then(result => {
            this.setState({
                courses: result.data,
            });
            console.log(result)
        })
        .catch(err => {
            this.setState({
                courses: []
            });
        });
  }

  render() {
    return (
      <div className="container__featured">
        <h2>Featured Courses</h2>
        <CoursesCards/>
      </div>
    );
  }
}

export default FeaturedCourses;

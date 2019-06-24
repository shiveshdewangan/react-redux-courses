import React, { useState } from "react";
import { connect } from "react-redux";
import { addCourse } from "../actions";
import "./CourseListPage.css";

const CourseListPage = ({ courses, dispatch }) => {
  const [courseName, setCourseName] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(courseName);
    dispatch(addCourse(courseName));
  };

  return courses.length === 0 ? (
    <div className="CreateCourse">
      <h1>Create Your First Course</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pick a name:
          <input
            value={courseName}
            onChange={event => setCourseName(event.target.value)}
          />
          <button type="submit">Create Course</button>
        </label>
      </form>
    </div>
  ) : (
    <div>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  courses: state.courses
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  null
)(CourseListPage);

import { createCourse, getCourses } from "./api";

export const ADD_COURSE_BEGIN = "ADD_COURSE_BEGIN";
export const ADD_COURSE_SUCCESS = "ADD_COURSE_SUCCESS";
export const ADD_COURSE_ERROR = "ADD_COURSE_ERROR";
export const LOAD_COURSES_BEGIN = "LOAD_COURSES_BEGIN";
export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_COURSES_ERROR = "LOAD_COURSES_ERROR";

export const addCourse = name => {
  return dispatch => {
    dispatch({
      type: ADD_COURSE_BEGIN
    });
    createCourse(name)
      .then(course => {
        dispatch({
          type: ADD_COURSE_SUCCESS,
          payload: course
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_COURSE_ERROR,
          error
        });
      });
  };
};

export const loadCourses = () => {
  return dispatch => {
    dispatch({
      type: LOAD_COURSES_BEGIN
    });
    getCourses()
      .then(courses => {
        dispatch({
          type: LOAD_COURSES_SUCCESS,
          payload: courses
        });
      })
      .catch(error => {
        dispatch({
          type: LOAD_COURSES_ERROR,
          error
        });
      });
  };
};

import * as courseActions from './CourseActions';
import * as types from './ActionTypes';
import { courses } from '../../../tools/mockData';

describe('createCourseSuccess', () => {
  it('should create a CREATE_COURSE_SUCCESS action', () => {
    const course = courses[0];

    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course
    };
    //act
    const action = courseActions.createCourseSuccess(course);

    // assert
    expect(action).toEqual(expectedAction);
  });
});

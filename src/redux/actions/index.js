
import constants from "../constants";

export default {
  userReceived: user => {
    return {
      type: constants.USER_RECEIVED,
      data: user
    };
  },
  ownerReceived: owner => {
    return {
      type: constants.OWNER_RECEIVED,
      data: owner
    }
  },
  classmateSelected: classmate => {
    return {
      type: constants.CLASSMATE_SELECTED,
      data: classmate
    }
  },
studentProfileRecieved: student => {
  return {
    type: constants.STUDENT_PROFILE_RECIEVED,
    data: student
  }
},
teacherSelected: teacher => {
  return {
    type: constants.TEACHER_SELECTED,
    data: teacher
  }
},
switchedToTeaching: teacher => {
  return {
    type : constants.SWITCHED_TO_TEACHING,
    data: teacher
  }
}
}

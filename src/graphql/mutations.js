/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      name
      url
      isAVideo
      studentProfileID
      student {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          body
          postID
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      name
      url
      isAVideo
      studentProfileID
      student {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          body
          postID
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      name
      url
      isAVideo
      studentProfileID
      student {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          body
          postID
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      teacher {
        id
        teacherName
        teacherBio
        nationality
        teacherAvatar
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        introductionVideo {
          id
          title
          url
          description
          teacherID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      teacherID
      title
      description
      thumbnail
      level
      lessonVideos {
        items {
          id
          courseID
          title
          description
          thumbnail
          url
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      teacher {
        id
        teacherName
        teacherBio
        nationality
        teacherAvatar
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        introductionVideo {
          id
          title
          url
          description
          teacherID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      teacherID
      title
      description
      thumbnail
      level
      lessonVideos {
        items {
          id
          courseID
          title
          description
          thumbnail
          url
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      teacher {
        id
        teacherName
        teacherBio
        nationality
        teacherAvatar
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        introductionVideo {
          id
          title
          url
          description
          teacherID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      teacherID
      title
      description
      thumbnail
      level
      lessonVideos {
        items {
          id
          courseID
          title
          description
          thumbnail
          url
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createLessonVideo = /* GraphQL */ `
  mutation CreateLessonVideo(
    $input: CreateLessonVideoInput!
    $condition: ModelLessonVideoConditionInput
  ) {
    createLessonVideo(input: $input, condition: $condition) {
      id
      course {
        id
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        teacherID
        title
        description
        thumbnail
        level
        lessonVideos {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      courseID
      title
      description
      thumbnail
      url
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateLessonVideo = /* GraphQL */ `
  mutation UpdateLessonVideo(
    $input: UpdateLessonVideoInput!
    $condition: ModelLessonVideoConditionInput
  ) {
    updateLessonVideo(input: $input, condition: $condition) {
      id
      course {
        id
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        teacherID
        title
        description
        thumbnail
        level
        lessonVideos {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      courseID
      title
      description
      thumbnail
      url
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteLessonVideo = /* GraphQL */ `
  mutation DeleteLessonVideo(
    $input: DeleteLessonVideoInput!
    $condition: ModelLessonVideoConditionInput
  ) {
    deleteLessonVideo(input: $input, condition: $condition) {
      id
      course {
        id
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        teacherID
        title
        description
        thumbnail
        level
        lessonVideos {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      courseID
      title
      description
      thumbnail
      url
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      teacherName
      teacherBio
      nationality
      teacherAvatar
      studentProfileID
      student {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      introductionVideo {
        id
        title
        url
        description
        teacherID
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      courses {
        items {
          id
          teacherID
          title
          description
          thumbnail
          level
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      teacherName
      teacherBio
      nationality
      teacherAvatar
      studentProfileID
      student {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      introductionVideo {
        id
        title
        url
        description
        teacherID
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      courses {
        items {
          id
          teacherID
          title
          description
          thumbnail
          level
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      teacherName
      teacherBio
      nationality
      teacherAvatar
      studentProfileID
      student {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      introductionVideo {
        id
        title
        url
        description
        teacherID
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      courses {
        items {
          id
          teacherID
          title
          description
          thumbnail
          level
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createTeacherIntroductionVideo = /* GraphQL */ `
  mutation CreateTeacherIntroductionVideo(
    $input: CreateTeacherIntroductionVideoInput!
    $condition: ModelTeacherIntroductionVideoConditionInput
  ) {
    createTeacherIntroductionVideo(input: $input, condition: $condition) {
      id
      title
      url
      description
      teacherID
      teacher {
        id
        teacherName
        teacherBio
        nationality
        teacherAvatar
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        introductionVideo {
          id
          title
          url
          description
          teacherID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateTeacherIntroductionVideo = /* GraphQL */ `
  mutation UpdateTeacherIntroductionVideo(
    $input: UpdateTeacherIntroductionVideoInput!
    $condition: ModelTeacherIntroductionVideoConditionInput
  ) {
    updateTeacherIntroductionVideo(input: $input, condition: $condition) {
      id
      title
      url
      description
      teacherID
      teacher {
        id
        teacherName
        teacherBio
        nationality
        teacherAvatar
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        introductionVideo {
          id
          title
          url
          description
          teacherID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteTeacherIntroductionVideo = /* GraphQL */ `
  mutation DeleteTeacherIntroductionVideo(
    $input: DeleteTeacherIntroductionVideoInput!
    $condition: ModelTeacherIntroductionVideoConditionInput
  ) {
    deleteTeacherIntroductionVideo(input: $input, condition: $condition) {
      id
      title
      url
      description
      teacherID
      teacher {
        id
        teacherName
        teacherBio
        nationality
        teacherAvatar
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        introductionVideo {
          id
          title
          url
          description
          teacherID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      body
      postID
      post {
        id
        name
        url
        isAVideo
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      studentProfileID
      postAuthor {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      body
      postID
      post {
        id
        name
        url
        isAVideo
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      studentProfileID
      postAuthor {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      body
      postID
      post {
        id
        name
        url
        isAVideo
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      studentProfileID
      postAuthor {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createStudentProfile = /* GraphQL */ `
  mutation CreateStudentProfile(
    $input: CreateStudentProfileInput!
    $condition: ModelStudentProfileConditionInput
  ) {
    createStudentProfile(input: $input, condition: $condition) {
      owner
      name
      bio
      avatar
      id
      company {
        items {
          id
          companyName
          logo
          bio
          verified
          owner
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      teacher {
        id
        teacherName
        teacherBio
        nationality
        teacherAvatar
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        introductionVideo {
          id
          title
          url
          description
          teacherID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      messages {
        items {
          owner
          senderID
          id
          body
          studentProfileID
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      posts {
        items {
          id
          name
          url
          isAVideo
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateStudentProfile = /* GraphQL */ `
  mutation UpdateStudentProfile(
    $input: UpdateStudentProfileInput!
    $condition: ModelStudentProfileConditionInput
  ) {
    updateStudentProfile(input: $input, condition: $condition) {
      owner
      name
      bio
      avatar
      id
      company {
        items {
          id
          companyName
          logo
          bio
          verified
          owner
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      teacher {
        id
        teacherName
        teacherBio
        nationality
        teacherAvatar
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        introductionVideo {
          id
          title
          url
          description
          teacherID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      messages {
        items {
          owner
          senderID
          id
          body
          studentProfileID
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      posts {
        items {
          id
          name
          url
          isAVideo
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteStudentProfile = /* GraphQL */ `
  mutation DeleteStudentProfile(
    $input: DeleteStudentProfileInput!
    $condition: ModelStudentProfileConditionInput
  ) {
    deleteStudentProfile(input: $input, condition: $condition) {
      owner
      name
      bio
      avatar
      id
      company {
        items {
          id
          companyName
          logo
          bio
          verified
          owner
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      teacher {
        id
        teacherName
        teacherBio
        nationality
        teacherAvatar
        studentProfileID
        student {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        introductionVideo {
          id
          title
          url
          description
          teacherID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      messages {
        items {
          owner
          senderID
          id
          body
          studentProfileID
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      posts {
        items {
          id
          name
          url
          isAVideo
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      owner
      sender {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      senderID
      id
      body
      studentProfileID
      recipient {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      owner
      sender {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      senderID
      id
      body
      studentProfileID
      recipient {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      owner
      sender {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      senderID
      id
      body
      studentProfileID
      recipient {
        owner
        name
        bio
        avatar
        id
        company {
          nextToken
          startedAt
        }
        teacher {
          id
          teacherName
          teacherBio
          nationality
          teacherAvatar
          studentProfileID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
      id
      owner
      uri
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
      id
      owner
      uri
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
      id
      owner
      uri
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      id
      companyName
      logo
      bio
      verified
      owner
      programs {
        items {
          id
          name
          location
          image
          description
          verified
          companyID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      id
      companyName
      logo
      bio
      verified
      owner
      programs {
        items {
          id
          name
          location
          image
          description
          verified
          companyID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      id
      companyName
      logo
      bio
      verified
      owner
      programs {
        items {
          id
          name
          location
          image
          description
          verified
          companyID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProgram = /* GraphQL */ `
  mutation CreateProgram(
    $input: CreateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    createProgram(input: $input, condition: $condition) {
      id
      name
      location
      image
      description
      verified
      companyID
      company {
        id
        companyName
        logo
        bio
        verified
        owner
        programs {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateProgram = /* GraphQL */ `
  mutation UpdateProgram(
    $input: UpdateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    updateProgram(input: $input, condition: $condition) {
      id
      name
      location
      image
      description
      verified
      companyID
      company {
        id
        companyName
        logo
        bio
        verified
        owner
        programs {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteProgram = /* GraphQL */ `
  mutation DeleteProgram(
    $input: DeleteProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    deleteProgram(input: $input, condition: $condition) {
      id
      name
      location
      image
      description
      verified
      companyID
      company {
        id
        companyName
        logo
        bio
        verified
        owner
        programs {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;

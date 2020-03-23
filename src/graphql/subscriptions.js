/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String!) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String!) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String!) {
    onDeletePost(owner: $owner) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($owner: String!) {
    onCreateCourse(owner: $owner) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($owner: String!) {
    onUpdateCourse(owner: $owner) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($owner: String!) {
    onDeleteCourse(owner: $owner) {
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
export const onCreateLessonVideo = /* GraphQL */ `
  subscription OnCreateLessonVideo($owner: String!) {
    onCreateLessonVideo(owner: $owner) {
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
export const onUpdateLessonVideo = /* GraphQL */ `
  subscription OnUpdateLessonVideo($owner: String!) {
    onUpdateLessonVideo(owner: $owner) {
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
export const onDeleteLessonVideo = /* GraphQL */ `
  subscription OnDeleteLessonVideo($owner: String!) {
    onDeleteLessonVideo(owner: $owner) {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($owner: String!) {
    onCreateTeacher(owner: $owner) {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($owner: String!) {
    onUpdateTeacher(owner: $owner) {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($owner: String!) {
    onDeleteTeacher(owner: $owner) {
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
export const onCreateTeacherIntroductionVideo = /* GraphQL */ `
  subscription OnCreateTeacherIntroductionVideo($owner: String!) {
    onCreateTeacherIntroductionVideo(owner: $owner) {
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
export const onUpdateTeacherIntroductionVideo = /* GraphQL */ `
  subscription OnUpdateTeacherIntroductionVideo($owner: String!) {
    onUpdateTeacherIntroductionVideo(owner: $owner) {
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
export const onDeleteTeacherIntroductionVideo = /* GraphQL */ `
  subscription OnDeleteTeacherIntroductionVideo($owner: String!) {
    onDeleteTeacherIntroductionVideo(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String!) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String!) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String!) {
    onDeleteComment(owner: $owner) {
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
export const onCreateStudentProfile = /* GraphQL */ `
  subscription OnCreateStudentProfile($owner: String!) {
    onCreateStudentProfile(owner: $owner) {
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
export const onUpdateStudentProfile = /* GraphQL */ `
  subscription OnUpdateStudentProfile($owner: String!) {
    onUpdateStudentProfile(owner: $owner) {
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
export const onDeleteStudentProfile = /* GraphQL */ `
  subscription OnDeleteStudentProfile($owner: String!) {
    onDeleteStudentProfile(owner: $owner) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($owner: String!) {
    onCreateMessage(owner: $owner) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($owner: String!) {
    onUpdateMessage(owner: $owner) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($owner: String!) {
    onDeleteMessage(owner: $owner) {
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String!) {
    onCreatePicture(owner: $owner) {
      id
      owner
      uri
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String!) {
    onUpdatePicture(owner: $owner) {
      id
      owner
      uri
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String!) {
    onDeletePicture(owner: $owner) {
      id
      owner
      uri
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($owner: String!) {
    onCreateCompany(owner: $owner) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($owner: String!) {
    onUpdateCompany(owner: $owner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($owner: String!) {
    onDeleteCompany(owner: $owner) {
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
export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram($owner: String!) {
    onCreateProgram(owner: $owner) {
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
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram($owner: String!) {
    onUpdateProgram(owner: $owner) {
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
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram($owner: String!) {
    onDeleteProgram(owner: $owner) {
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

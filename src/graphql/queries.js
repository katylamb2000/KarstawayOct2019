/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLessonVideos = /* GraphQL */ `
  query SyncLessonVideos(
    $filter: ModelLessonVideoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessonVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        course {
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
  }
`;
export const getLessonVideo = /* GraphQL */ `
  query GetLessonVideo($id: ID!) {
    getLessonVideo(id: $id) {
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
export const listLessonVideos = /* GraphQL */ `
  query ListLessonVideos(
    $filter: ModelLessonVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        course {
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
  }
`;
export const syncTeachers = /* GraphQL */ `
  query SyncTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeachers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
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
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTeacherIntroductionVideos = /* GraphQL */ `
  query SyncTeacherIntroductionVideos(
    $filter: ModelTeacherIntroductionVideoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeacherIntroductionVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTeacherIntroductionVideo = /* GraphQL */ `
  query GetTeacherIntroductionVideo($id: ID!) {
    getTeacherIntroductionVideo(id: $id) {
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
export const listTeacherIntroductionVideos = /* GraphQL */ `
  query ListTeacherIntroductionVideos(
    $filter: ModelTeacherIntroductionVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeacherIntroductionVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        body
        postID
        post {
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
        studentProfileID
        postAuthor {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        body
        postID
        post {
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
        studentProfileID
        postAuthor {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStudentProfiles = /* GraphQL */ `
  query SyncStudentProfiles(
    $filter: ModelStudentProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudentProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getStudentProfile = /* GraphQL */ `
  query GetStudentProfile($id: ID!) {
    getStudentProfile(id: $id) {
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
export const listStudentProfiles = /* GraphQL */ `
  query ListStudentProfiles(
    $filter: ModelStudentProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        owner
        sender {
          owner
          name
          bio
          avatar
          id
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        owner
        sender {
          owner
          name
          bio
          avatar
          id
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPictures = /* GraphQL */ `
  query SyncPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        owner
        uri
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      id
      owner
      uri
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        uri
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPrograms = /* GraphQL */ `
  query SyncPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrograms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
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
export const listPrograms = /* GraphQL */ `
  query ListPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const postsByStudent = /* GraphQL */ `
  query PostsByStudent(
    $studentProfileID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByStudent(
      studentProfileID: $studentProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const coursesByTeacher = /* GraphQL */ `
  query CoursesByTeacher(
    $teacherID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesByTeacher(
      teacherID: $teacherID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const lessonsByCourse = /* GraphQL */ `
  query LessonsByCourse(
    $courseID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelLessonVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonsByCourse(
      courseID: $courseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        course {
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
  }
`;
export const teacherByStudentProfileId = /* GraphQL */ `
  query TeacherByStudentProfileId(
    $studentProfileID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teacherByStudentProfileId(
      studentProfileID: $studentProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const introVideosByTeacher = /* GraphQL */ `
  query IntroVideosByTeacher(
    $teacherID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelTeacherIntroductionVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    introVideosByTeacher(
      teacherID: $teacherID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const commentsByPost = /* GraphQL */ `
  query CommentsByPost(
    $postID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPost(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        body
        postID
        post {
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
        studentProfileID
        postAuthor {
          owner
          name
          bio
          avatar
          id
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const byOwner = /* GraphQL */ `
  query ByOwner(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelStudentProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const byStudent = /* GraphQL */ `
  query ByStudent(
    $studentProfileID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byStudent(
      studentProfileID: $studentProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        owner
        sender {
          owner
          name
          bio
          avatar
          id
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const byMessageOwner = /* GraphQL */ `
  query ByMessageOwner(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byMessageOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        owner
        sender {
          owner
          name
          bio
          avatar
          id
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const byMessageSender = /* GraphQL */ `
  query ByMessageSender(
    $senderID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byMessageSender(
      senderID: $senderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        owner
        sender {
          owner
          name
          bio
          avatar
          id
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const companyAdminOwner = /* GraphQL */ `
  query CompanyAdminOwner(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CompanyAdminOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;

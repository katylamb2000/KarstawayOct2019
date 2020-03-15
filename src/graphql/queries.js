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
        description
        _version
        _deleted
        _lastChangedAt
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
      description
      _version
      _deleted
      _lastChangedAt
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
        description
        _version
        _deleted
        _lastChangedAt
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

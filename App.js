import React, { useEffect, useReducer, Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import PubSub from '@aws-amplify/pubsub';
import { createAppContainer } from 'react-navigation'

import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Amplify, { Auth, API, graphqlOperation  } from 'aws-amplify';
// import { Authenticator, SignIn } from 'aws-amplify-react-native';
import awsmobile from './aws-exports'
// API.configure(awsmobile)             // Configure Amplify
PubSub.configure(awsmobile)
import Icon from 'react-native-vector-icons/FontAwesome';
import { withAuthenticator } from 'aws-amplify-react-native'
// import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact, withAuthenticator } from 'aws-amplify-react';


// import config from './aws-exports'


import store from './src/redux/store'
import { Provider } from "react-redux"




Amplify.configure(awsmobile)


  

import UserProfile from './src/components/screens/UserProfile'
import { Login, MainFeed, NewCourseForm, EditCourseForm, NewMessage, MyTeachingPage, AddAProgramForm, Camera, Discover, ClassmatesProfile, NewCompanyForm, Company, Settings, Profile, Messages, Classroom, About, Discussion, Activities, AllClassmates, SelectedCamps, Home, AllTeachers, AddClassmates, UserDetailsForm, NewTeacherForm } from './src/components/screens';


// <Authenticator hideDefault={true}>
//   <SignIn />
//   {/* <MyCustomSignUp override={'SignUp'}/>  */}
// </Authenticator>



const CameraStack = createMaterialTopTabNavigator({
  Camera
  
})






 const teacherPageTabs = createMaterialTopTabNavigator({
  about: About,  
  profile: Profile, 
  discussion: Discussion
 },
 {
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
 
    style: {
      backgroundColor: 'purple',
      paddingTop:30
    },
  }
 })

 const CampsMarketPageStack = createStackNavigator({
  MainFeed: {
    screen: MainFeed,
    navigationOptions: {
      header: null
    }},
    Activities: {
    screen: Activities,
    navigationOptions: {
      header: null
    }
    },
    AllClassmates: {
      screen: AllClassmates,
      navigationOptions: {
        header: null
      }},
      NewMessage: {
        screen: NewMessage,
        navigationOptions: {
          header: null
        }
      },
      Messages: {
        screen: Messages,
        navigationOptions: {
          header: null
        }
  },
  AddAProgramForm: {
    screen: AddAProgramForm,
    navigationOptions: {
      header: null
    }
  },
  MyTeachingPage: {
    screen: MyTeachingPage,
    navigationOptions: {
      header: null
    }
  },
  NewCourseForm: {
    screen: NewCourseForm,
    navigationOptions: {
      header: null
    }
  },
  EditCourseForm: {
    screen: EditCourseForm,
    navigationOptions: {
      header: null
    }
  },
  NewTeacherForm: {
    screen: NewTeacherForm,
    navigationOptions: {
      header: null
    }
  },
  Company: {
    screen: Company,
    navigationOptions: {
      header: null
    }
},
  SelectedCamps: {
    screen: SelectedCamps,
    navigationOptions: {
      header: null
    }},
  teacherPageTabs: {
    screen: teacherPageTabs,
    navigationOptions: {
      header: null
    }},
  AllTeachers: {
    screen: AllTeachers,
    navigationOptions: {
      header: null
    }},
    ClassmatesProfile: {
      screen: ClassmatesProfile,
    navigationOptions: {
      header: null
    }
    },
    newCompanyForm: {
      screen: NewCompanyForm 
  
    
      },
    AddClassmates: {
      screen: AddClassmates,
      navigationOptions: {
        header: null
      }
    }
  }
)
 const UserTabs = createMaterialTopTabNavigator(
   {
  userProfile: UserProfile,
  classroom: Classroom,
  settings: Settings
  
  
},

{
tabBarOptions: {
  header:{ style:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 } },
  labelStyle: {
    fontSize: 12,
    paddingTop:30
  },

  style: {
    backgroundColor: 'purple',
  },
}
})

const Tabs = createBottomTabNavigator({
  home: {
    screen: CampsMarketPageStack,
    navigationOptions: {
      header: null,
      tabBarLabel:"Home",
    tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={18} color="purple" />
  )}
    },
  discover: {
    screen: Discover,
    navigationOptions: {
      header: null,
      tabBarLabel:"Discover",
    tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={18} color="purple" />
  )}
    },



  camera: {
    screen: CameraStack, 
    navigationOptions: {
      tabBarLabel:"Camera",
    tabBarIcon: ({ tintColor }) => (
    <Icon name="camera" size={18} color="purple" />
  )}
    },
   

  profile: {
  screen: UserTabs, 
  navigationOptions: {
    header: null,
    tabBarLabel:"profile",
  tabBarIcon: ({ tintColor }) => (
  <Icon name="user" size={18} color="purple" />
)}
  }
  // classroom: {
  //   screen: Classroom,
  //   navigationOptions: {
  //     tabBarLabel:"Classroom",
  //   tabBarIcon: ({ tintColor }) => (
  //   <Icon name="graduation-cap" size={18} color="purple" />
  // )}
  //   }
  
})

const IntroStack = createStackNavigator({ 
  login: Login,
  // register: Register,
  userDetailsForm: {screen: UserDetailsForm,
    navigationOptions: {
      header: null
    }
  }
})

const KarstawayApp = createStackNavigator({
  login: IntroStack,
  main: { screen: Tabs,
    navigationOptions: {
      header: null
    }
    //   headerRight: (
    //     <TouchableOpacity style={{paddingRight: 10}} >
    //     {/* onPress={() => this.props.navigation.navigate('Camera')}>  */}
    //     <Icon name="user-plus" size={24} color="purple"  />
    //     </TouchableOpacity>
    //   ),
    //   headerLeft: (
    //     <TouchableOpacity style={{paddingLeft: 10}} >
    //     {/* onPress={() => this.props.navigation.navigate('AddClassmates')}>  */}
    //     <Icon name="home" size={24} color="purple"  />
    //     </TouchableOpacity>
    //   )
    // }
  }
  
}
)


// const MyTheme = {
  // googleSignInButton: { backgroundColor: "red", borderColor: "red" },
//   button: { backgroundColor: "green", borderColor: "red" },
//   signInButtonIcon: { display: "none" }
// };
// export default withAuthenticator(App, false, [], null, MyTheme, {
//   signUpConfig: {
//     hiddenDefaults: ["phone_number"],
//     signUpFields: [
//       { label: "Name", key: "name", required: true, type: "string" }
//     ]
//   }
// });



const AppContainer = createAppContainer(KarstawayApp)
// export default AppContainer 


class App extends Component {


  render() {
    return (
      <Provider store={store.configureStore()}>
{/* <Authenticator> */}
 
        <AppContainer  />
        {/* </Authenticator> */}
 
     </Provider>
    );
  }
}
 export default withAuthenticator(App,  {
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
    
    // signUpFields: [
    //   { label: "Name", key: "name", required: true, type: "string" }
    // ],
    // this.props.navigation.navigate('userDetailsForm')
 includeGreetings: true}}
 
//     <Greetings
//    inGreeting={(username) => 'Ni Hao ' + username}
//    outGreeting="Please sign in..."
// />

 )
// export default App

 
import React, { useEffect, useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from './src/graphql/mutations';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Amplify, { Auth } from 'aws-amplify';
// import Auth from '@aws-amplify/auth'

Amplify.configure({
  Auth: {

    // IdentityPoolId: 'us-east-1:ed99a0bd-fef8-4a69-becd-639ca24ddcbd',
    userPoolId: 'us-east-1_YUfboTttx',
    userPoolWebClientId: '1u2a5v13bm1n7u3p8e31uufdsa',
      // REQUIRED - Amazon Cognito Region
      region: 'us-east-1'
  }
})

import { Login, MainFeed, Camera, Profile, Register, Classroom } from './src/components/screens';

import config from './aws-exports'
API.configure(config)             // Configure Amplify
PubSub.configure(config)

async function createNewTodo() {
  const todo = { name: "Use AppSync" , description: "Realtime and Offline"}
  await API.graphql(graphqlOperation(createTodo, { input: todo }))
}


const Tabs = createBottomTabNavigator({
  discover: MainFeed,
  camera: Camera,
  profile: Profile, 
  classroom: Classroom
})

const IntroStack = createStackNavigator({
  login: Login,
  register: Register
})

const KarstawayApp = createStackNavigator({
  login: IntroStack,
  main: Tabs
  
})
const AppContainer = createAppContainer(KarstawayApp)
export default AppContainer 


 

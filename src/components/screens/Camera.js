import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { ConsoleLogger } from '@aws-amplify/core';
import { RNS3 } from 'react-native-aws3'

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    uri: "",
    aws3Uri: ''
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync()
      .then( photo => {
          console.log(photo)
          const file = {
              uri: photo.uri,
              name: 'photo.jpg',
              type: 'image/jpg'

          }
    //   this.setState({
    //       uri: photo.uri
    //   })
     
      const options = {
          keyPrefix: 'images/',
          bucket: 'karstawayoct2019',
          region: 'us-east-1',
          accessKey: 'AKIATGCGWC4IAFF7M2KI',
          secretKey: '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',
          successActionStatus: 201

      }
      RNS3.put(file, options).then(response => {
          this.setState({
              aws3Uri: response.body.postResponse.location
          })
          this.props.navigation.navigate('profile', {
            photo: this.state.aws3Uri
        }) 
          if(response.body.staus !== 201) {
              throw new Error('Failed to upload image', response);
          }
          
      })
    })
    .catch(err => console.log(err))
    }
}

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}   ref={ref => {
    this.camera = ref;
  }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 0.1,
                  
                  alignItems: 'center',
                }}
                onPress={this.snap}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> take pic </Text>
              </TouchableOpacity>
              
            </View>
          </Camera>
        </View>
      );
    }
  }
}
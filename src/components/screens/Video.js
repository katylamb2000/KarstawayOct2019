// import React from 'react';
// import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
// import * as Permissions from 'expo-permissions';
// import { Camera } from 'expo-camera';
// import { RNS3 } from 'react-native-aws3'
// export default class Video extends React.Component {
//   constructor(props){
//     super(props)    
//     this.camera=undefined
//     this.state = {permissionsGranted:false,bcolor:'red', videoUri: ''}
//     this.takeFilm = this.takeFilm.bind(this)
    
//   }

//   async componentWillMount() {    
//     let cameraResponse = await Permissions.askAsync(Permissions.CAMERA)
//     if (cameraResponse.status == 'granted'){
//       let audioResponse = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
//       if (audioResponse.status == 'granted'){
//         this.setState({ permissionsGranted: true });
//       }
//     }                  
//   }

//   takeFilm(){    
//     let self = this;
//     if (this.camera){
//       this.camera.recordAsync().then(data => 
//         self.setState({bcolor:'green', videoUri: data.uri})
//         // console.log(data)
//         )
//     }
//     const file = {
//               uri: this.state.videoUri,
//               name: 'video.mov',
//               type: 'video/mp4'
//         }  
//         const options = {
//             keyPrefix: 'videos/',
//             bucket: 'karstawayoct2019',
//             region: 'us-east-1',
//             accessKey: 'AKIATGCGWC4INBMWWS5E',
//             secretKey: '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',
//             successActionStatus: 201
  
//         }
//         RNS3.put(file, options).then(response => {
//             console.log(response)
//             // this.setState({
//             //     aws3Uri: response.body.postResponse.location
//             })
//             // console.log(this.state.aws3Uri)
//             // this.props.navigation.navigate('profile', {
//             //   photo: this.state.aws3Uri
//         //   }) 
          
//         //     if(response.body.staus !== 201) {
//         //         throw new Error('Failed to upload video', response);
//         //     }
            
//         // })
      
//       .catch(err => console.log(err))
//       }
  


//   render() {    
//     if (!this.state.permissionsGranted){
//       return <View><Text>Camera permissions not granted</Text></View>
//     } else {
//       return (
//         <View style={{flex: 1}}>
//           {/* <View style={{ flex: 1 }}> */}
//             <Camera ref={ref => this.camera = ref} style={{flex: 1}} ></Camera>
//           {/* </View> */}
//           <TouchableOpacity style={{backgroundColor:this.state.bcolor, flex:0.3, width: 100, borderRadius:25,    flex: 0.1,
//                   alignSelf: 'center'
//                  }} onPress={() => {

//             if(this.state.cameraIsRecording){
//               this.setState({cameraIsRecording:false})
//               this.camera.stopRecording();
//             }
//             else{
//               this.setState({cameraIsRecording:true})
//               this.takeFilm();
//             }
//           }} />
//         </View>)
//     }
//   }
// }

import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { PostFeed } from '../container'
import { SearchBar } from 'react-native-elements';



class Activities extends Component {

  
            viewCamp() {
            
                
                this.props.navigation.navigate('SelectedCamps')
                }
          
        
            render(){
                return(
        
               <View style={{flex: 1, paddingTop: 20}}>
        
        <ScrollView>
        
                        {/* <View style={styles.welcome}> 
           
                            <Text style={{color: 'black', fontWeight: 500, fontSize: 24, paddingHorizontal: 20}}>What is going to be your next adventure  </Text> 
        
                         </View> */}
  
        {/* <SearchBar
                placeholder="Type Here..."
                inputContainerStyle={{ backgroundColor: "white" }}
                containerStyle={{ backgroundColor: "white", width: 80 + '%'}}
        
                // onChangeText={this.updateSearch}
                // value={search}
              /> */}
 


    


            <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 24, paddingHorizontal: 20}}> 
                Featured Camps
            </Text>

            <ScrollView horizontal > 
            <TouchableOpacity style={{paddingHorizontal: 10}} onPress={() => this.viewCamp()}> 
                   
            <View style={{flex: 2}} > 
                
            
              

                    <ImageBackground style={{flex: 1, height: 300, width: 300, borderRadius: 5}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHNhD2MEfdCulIUMxLtCxqdyfOvYOTA7f7wjCq6JJ0VkurVQz&s'}}/>
                    <View style={{position: 'absolute', left: 0, right: 0, top: 0, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold',  color: 'white'}}> English Adventure</Text>
             </View> 
             </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 300, width: 300, borderRadius: 5}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 300, width: 300, borderRadius: 5}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 300, width: 300, borderRadius: 5}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>
            </ScrollView> 
            </View>

         
            <View>
            <Text style={{color: 'black', fontWeight: 500, fontSize: 24, paddingHorizontal: 20}}> 
                International Camps
            </Text>
            <ScrollView horizontal > 
            <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
         
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>
            </ScrollView> 
            </View>


    
            <View>
            <Text style={{color: 'black', fontWeight: 500, fontSize: 24, paddingHorizontal: 20}}> 
                 Camps Near You
            </Text>
            <ScrollView horizontal > 
            <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
         
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>
            </ScrollView> 
            </View>



            <View>
            <Text style={{color: 'black', fontWeight: 500, fontSize: 24, paddingHorizontal: 20}}> 
               Sports Camps
            </Text>
            <ScrollView horizontal > 
            <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
         
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingHorizontal: 10}}> 
                    <Image style={{height: 100, width: 100}} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/>
                    </TouchableOpacity>
            </ScrollView> 
            </View>


    </ScrollView>
   </View> 


      
        

        

                     
                )
        
            }
        }
        
        const styles = StyleSheet.create({
           tempNav: {
               width: 100 + '%',
               height: 50,
               backgroundColor: 'green',
               borderBottomWidth: StyleSheet.hairlineWidth,
               justifyContent: 'center',
               alignItems: 'center'
           
           },
           welcome: {
            width: 100 + '%',
            height: 70,
            backgroundColor: 'white' 
            // borderBottomWidth: StyleSheet.hairlineWidth
            // justifyContent: 'space-between',
            // alignItems: 'center'
        
        }
        })

       

export default Activities
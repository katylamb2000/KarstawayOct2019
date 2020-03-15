import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Icon, Card } from 'react-native-elements'



class SelectedCamps extends Component {

    openTeacherProfile() {
        this.props.navigation.navigate('profile')
        }
    
    render(){
        return (
            <View style={{flex: 1}}>  

            <ScrollView > 

               
                {/* <VideoPlayer
  videoProps={{
    shouldPlay: true,
    
    resizeMode: Video.RESIZE_MODE_COVER,
    source: {
        uri: 'https://www.youtube.com/watch?v=Y7Hnq-RWYQs',s
    },
  }}
//   inFullscreen={true}
  width={100 + "%"}
      height={300}
/> */}
<View  style={{backgroundColor: 'transparent', top: 0, width: 100 + '%', height: 300 }} >

         {/* <Image  source={{uri: 'https://img.grouponcdn.com/deal/bcUBXpEujnrbYDaTUZW8/sb-2048x1229/v1/c700x420.jpg'}}/>  */}
         <Image source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}} style={{flex: 1}}/> 
        
  </View>
 
               
               
                <View style={{backgroundColor: '#6200ea', height: 200}}>
                    <Text style={{fontSize: 24, fontWeight: 300, color: 'white', paddingLeft: 25, paddingTop: 10}}>Karstaway Summer Camp</Text>
                    <Text style={{fontSize: 14, fontWeight: 100, color: 'white', paddingLeft: 25}}>Yangshuo</Text>
                    <Text style={{fontSize: 14, fontWeight: 100, color: 'white', paddingLeft: 25}}>7 days</Text>
                    <Text style={{fontSize: 18, fontWeight: 200, color: 'white', paddingLeft: 25}}>An action packed adventure that you will never forget!</Text>
                        <View style={{ paddingTop: 20, flexDirection: "row",  paddingLeft: 15, paddingVertical: 15, alignContent: 'left', marginLeft: 10 }}>
                            <View style={{height: 30, width: 100, backgroundColor: '#ff1744', alignContent: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
                                <Text style={{color: 'white'}}> Adventure</Text> 
                            </View>
                            <View style={{height: 30, width: 100, backgroundColor: '#ff1744', alignContent: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginLeft: 10}}>
                                <Text style={{color: 'white'}}> English</Text> 
                            </View>
                            {/* <View style={{height: 30, width: 100, backgroundColor: 'purple', alignContent: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 15}}>
                                <Text style={{color: 'white'}}> Caving</Text> 
                            </View> */}
                        </View> 
                </View>

           <View> 
               <Text style={{fontSize: 24, fontWeight: 'bold', paddingTop: 10, paddingLeft: 15}}> What's Included?</Text> 
           </View>

                <ScrollView horizontal style={{paddingTop: 10, paddingLeft: 10, flexDirection: 'row', marginTop: 10, marginBottom: 10}}> 
           
            <View> 
                <View style={{ height: 150, width: 150, borderWidth: 0.5}}> 
                    <View style={{flex: 2, marginLeft: 10, alignContent: 'left', alignItems: 'left', justifyContent: 'left'}}> 
                        <Icon name='pool' color='#517fa4' />
                       <Text style={{fontWeight: 'bold'}}> Activities</Text>
                       <Text >Rock climbing, kayaking, biking, hiking, raft building</Text>
                    </View> 
                </View>
            </View>


        <View style={{paddingHorizontal: 10}} > 
                <View style={{ height: 150, width: 150, borderWidth: 0.5}}> 
             

                <View style={{flex: 2, marginLeft: 10, alignContent: 'left', alignItems: 'left', justifyContent: 'left'}}> 
                     <Icon name='hotel' color='#651fff' />
                       <Text style={{fontWeight: 'bold'}}> Accomodation</Text>
                       <Text>Students will be sharing a 2-4 bed room with other children in our cusgtom designed camp hotel.  </Text>
                </View>
                </View>
                </View>


                <View style={{paddingHorizontal: 10}} > 
                <View style={{ height: 150, width: 150, borderWidth: 0.5}}> 
           

<View style={{flex: 2, marginLeft: 10, alignContent: 'left', alignItems: 'left', justifyContent: 'left'}}> 
                     <Icon name='restaurant' color='#ff5722' />
                       <Text style={{fontWeight: 'bold'}}> Food</Text>
                       <Text>Healthy breakfast meals and dinners every day as well as healthy snacks and water and the occasional sweet treat</Text>
                       
                    </View> 
                </View>
                </View>


                <View style={{paddingHorizontal: 10}} > 
                <View style={{ height: 150, width: 150, borderWidth: 0.5}}> 
                    {/* <View style={{flex: 2}} > 
                       <Image style={{flex: 1, width: 100, height: 100}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Nz71bO2_5eHkBjSpqbtqmZxhMR41D7ovML-wq0bW1RCflv0Ppg&s"}} />
                    </View> */}

<View style={{flex: 2, marginLeft: 10, alignContent: 'left', alignItems: 'left', justifyContent: 'left'}}> 
                     <Icon name='school' color='#76ff03'  />
                       <Text style={{fontWeight: 'bold'}}> Online classes</Text>
                       <Text>5 online class  credits </Text>
                    </View> 
                </View>
                </View>
  
                </ScrollView>

<View>
        <Text style={{fontSize: 24, fontWeight: 'bold', paddingTop: 10, marginleft: 15}}> Your Itinerary </Text> 

        <Text style={{fontSize: 14, fontWeight: 'bold', paddingTop: 10, paddingLeft: 10, marginLeft: 15}}> Day 1 </Text>            
</View>

                {/* <View style={{borderLeftWidth: 1, marginLeft:20, marginTop: 10, marginRight: 10}}>  */}
                <View style={{ marginLeft:20, marginTop: 10, marginRight: 10}}> 
                    <ScrollView horizontal style={{flexDirection: 'row'}}>
                  {/* <View style={{flexDirection: 'column', width: 80 + "%"}}> 
                    <Text style={{fontsize: 18, fontWeight: 'bold'}}> 
                    Team building and Games
                </Text>
                    <Image style={{width: 300, height: 200, marginLeft: 10 }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAReGmszQD3sKa153IlyloWg6AjkDhzforVsx_pmq2JW3JkZtsw&s'}}/> 
               

                <Text style={{fontsize: 14, marginLeft: 10}}> 
                    Arriving in Yangshuo the kids will get to know each other and learn how to work together as a team with our fun and educational team building challenges. 
                </Text>
                </View> */}

<View> 
  <Text>West Street Challenge</Text> 
  <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s'}} style={{flex: 2, height: 200, width: 320}}/>
                <View style={{width: 350}}>
  <Text >
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  </View>
</View>

<View> 
  <Text> Team building and Games</Text> 
  <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s'}} style={{flex: 2, height: 200, width: 320}}/>
                <View style={{width: 350}}>
  <Text >
  Arriving in Yangshuo the kids will get to know each other and learn how to work together as a team with our fun and educational team building challenges.  </Text>
  </View>
</View>



      
                {/* <Card title="West Street Challenge" style={{width: 200}}>
 
 <View >
   <Image
 source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{flex: 2, height: 100 + "%", width: 100 + '%'}}
   />
   <Text >Arriving in Yangshuo the kids will get to know each other and learn how to work together as a team with our fun and educational team building challenges. 
</Text>
 </View>

</Card> */}







                {/* <View>

                    <Text style={{fontsize: 18, fontWeight: 'bold'}}> 
                   
                </Text>
                    <Image style={{width: 300, height: 200, marginLeft: 10 }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAReGmszQD3sKa153IlyloWg6AjkDhzforVsx_pmq2JW3JkZtsw&s'}}/> 
               

                <Text style={{fontsize: 14, marginLeft: 10}}> 
                    Arriving in Yangshuo the kids will get to know each other and learn how to work together as a team with our fun and educational team building challenges. 
                </Text>
                </View>



                <View>
                    <Text style={{fontSize: 24, fontWeight: 'bold', paddingTop: 10}}> Your Itinerary </Text> 

                    <Text style={{fontSize: 14, fontWeight: 100, paddingTop: 10}}> Day 1 </Text> 
                    <Text style={{fontsize: 18, fontWeight: 'bold'}}> 
                    Team building and Games
                </Text>
                    <Image style={{width: 300, height: 200, marginLeft: 10 }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAReGmszQD3sKa153IlyloWg6AjkDhzforVsx_pmq2JW3JkZtsw&s'}}/> 
               

                <Text style={{fontsize: 14, marginLeft: 10}}> 
                    Arriving in Yangshuo the kids will get to know each other and learn how to work together as a team with our fun and educational team building challenges. 
                </Text>
                </View> */}


                </ScrollView>
                {/* <TouchableOpacity>
             <View style={{height: 30, width: 90, backgroundColor: '#d500f9', alignContent: 'center', alignItems: 'center', borderRadius: 8, justifyContent: 'center', marginLeft: 10}}>
                 <Text style={{color: 'white', fontWeight: 'bold'}}> 
                   More
                 </Text> */}
                 
            
     {/* </TouchableOpacity> */}

                           

                    <Text style={{fontSize: 14, fontWeight: 100, paddingTop: 10, marginLeft: 10, fontWeight: 'bold'}}> Day 2 </Text> 
                    <Image style={{width: 300, height: 200, marginLeft: 10 }} source={{uri: 'https://farm6.static.flickr.com/5288/5224686903_1b5f6db290_b.jpg'}}/> 
                <Text style={{fontsize: 18, fontWeight: 'bold', paddingVertical: 10, marginLeft: 10}}> 
                    Kayaking and Caving
                </Text>

                <Text style={{fontsize: 14, paddingVertical: 10, marginLeft: 10}}> 
    This adventure filled day will start with a spectacular kayaking trip down the Li river, learning new skills and English from our expereinced International instrucors.                 </Text>
                
    <TouchableOpacity>
             <View style={{marginLeft: 10, height: 30, width: 90, backgroundColor: '#d500f9', alignContent: 'center', alignItems: 'center', borderRadius: 8, justifyContent: 'center'}}>
                 <Text style={{color: 'white', fontWeight: 'bold'}}> 
                   More
                 </Text>
                 
             </View> 
     </TouchableOpacity>


                <Text style={{fontSize: 18, fontWeight: 'bold', paddingTop: 10, marginLeft: 10}}> Day 3 </Text> 
                <Text style={{fontsize: 18, fontWeight: 'bold', marginLeft: 10}}> 
                    Hiking and Camping
                </Text>
                    <Image style={{width: 300, height: 200, marginLeft: 10 }} source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/87687718.jpg?k=3fb3adb0c09c754b5c020c4f3f72227954014da42ff79e37baff7eb76ab8a2dc&o='}}/> 
               

                <Text style={{fontsize: 14, marginLeft: 10}}> 
            Learn about nature and develop wilderness skills with hiking and camping           
         </Text>

         <TouchableOpacity>
             <View style={{height: 30, width: 90, backgroundColor: '#d500f9', alignContent: 'center', alignItems: 'center', borderRadius: 8, justifyContent: 'center'  , marginLeft: 10}}>
                 <Text style={{color: 'white', fontWeight: 'bold'}}> 
                   More
                 </Text>
                 
             </View> 
     </TouchableOpacity>
     </View> 

     <View> 
         <Text style={{fontSize: 24, fontWeight: 'bold', paddingTop: 10, marginLeft: 15}}> 
             Our Instructors
         </Text>
         
         <ScrollView horizontal style={{paddingHorizontal: 15, paddingVertical: 15}} > 
         
    
    <TouchableOpacity  style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center', paddingHorizontal : 10}} onPress={() => (this.openTeacherProfile())}>      
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 120, width: 120, borderRadius: 60}} />

         <Text style={{fontWeight: 'bold'}} >Lucy </Text> 
         <Text style={{fontWeight: 'bold'}} >England </Text> 
    </TouchableOpacity>

    <TouchableOpacity  style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center', paddingHorizontal : 10}} onPress={() => (this.openTeacherProfile())}>      
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 120, width: 120, borderRadius: 60}} />

         <Text style={{fontWeight: 'bold'}} >Lucy </Text> 
         <Text style={{fontWeight: 'bold'}} >England </Text> 
    </TouchableOpacity>

    <TouchableOpacity  style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center', paddingHorizontal : 10}} onPress={() => (this.openTeacherProfile())}>      
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 120, width: 120, borderRadius: 60}} />

         <Text style={{fontWeight: 'bold'}} >Lucy </Text> 
         <Text style={{fontWeight: 'bold'}} >England </Text> 
    </TouchableOpacity>


    <TouchableOpacity  style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center', paddingHorizontal : 10}} onPress={() => (this.openTeacherProfile())}>      
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 120, width: 120, borderRadius: 60}} />

         <Text style={{fontWeight: 'bold'}} >Lucy </Text> 
         <Text style={{fontWeight: 'bold'}} >England </Text> 
    </TouchableOpacity>



    <TouchableOpacity  style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center'}} onPress={() => (this.openTeacherProfile())}>      
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 100, width: 100, borderRadius: 50}} />

         <Text style={{marginLeft: 15, }} >Lucy </Text> 
         <Text style={{marginLeft: 15}} >England </Text> 
    </TouchableOpacity>

    </ScrollView> 



    <View> 
         <Text style={{fontSize: 24, fontWeight: 'bold', paddingTop: 10, marginLeft: 10}}> 
             Our Recomended courses
         </Text>
    </View>
         <ScrollView horizontal style={{paddingHorizontal: 15, paddingVertical: 15, paddingBottom: 70}} > 
         
         
         
         
         <Card title="Daily Camp Routine">
            
 
        <View >
          <Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{flex: 2, height: 100 + "%", width: 100 + '%'}}
          />
          <Text >BEN</Text>
        </View>
    
</Card>
    
    <TouchableOpacity  style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}} onPress={() => (this.openTeacherProfile())}>      
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 100, width: 100}} />

         <Text style={{marginLeft: 15, }} >Lucy </Text> 
         <Text style={{marginLeft: 15}} >England </Text> 
    </TouchableOpacity>

    <TouchableOpacity  style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}} onPress={() => (this.openTeacherProfile())}>      
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 100, width: 100, borderRadius: 50}} />

         <Text style={{marginLeft: 15, }} >Lucy </Text> 
         <Text style={{marginLeft: 15}} >England </Text> 
    </TouchableOpacity>

    <TouchableOpacity  style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center'}} onPress={() => (this.openTeacherProfile())}>      
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 100, width: 100, borderRadius: 50}} />

         <Text style={{marginLeft: 15, }} >Lucy </Text> 
         <Text style={{marginLeft: 15}} >England </Text> 
    </TouchableOpacity>


    <TouchableOpacity  style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}} onPress={() => (this.openTeacherProfile())}>      
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 100, width: 100, borderRadius: 50}} />

         <Text style={{marginLeft: 15, }} >Lucy </Text> 
         <Text style={{marginLeft: 15}} >England </Text> 
    </TouchableOpacity>



    <TouchableOpacity  style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center'}} onPress={() => (this.openTeacherProfile())}>      
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 100, width: 100, borderRadius: 50}} />

         <Text style={{marginLeft: 15, }} >Lucy </Text> 
         <Text style={{marginLeft: 15}} >England </Text> 
    </TouchableOpacity>

    </ScrollView> 
  

  
  </View> 








                
  </ScrollView>

<View style={{backgroundColor: '#aa00ff', height: 45, width: 100 + '%', position: 'absolute', bottom: 0, alignItems: 'center', alignContent: "center", justifyContent: 'space-around', flexDirection: 'row'}}> 
    <Text style={{color: 'white', fontWeight: 'bold'}}> Price $400 </Text>
    <TouchableOpacity>
             <View style={{height: 30, width: 90, backgroundColor: '#d500f9', alignContent: 'center', alignItems: 'center', borderRadius: 8, justifyContent: 'center'}}>
                 <Text style={{color: 'white', fontWeight: 'bold'}}> 
                   Book Now
                 </Text>
                 
             </View> 
     </TouchableOpacity>
</View> 

</View> 
   
           
        )
    }
} 


export default SelectedCamps
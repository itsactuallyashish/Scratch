import { setStatusBarBackgroundColor } from "expo-status-bar";
import React ,{useState,useEffect,useRef}from "react";
import { StyleSheet,View,Text,TextInput,TouchableOpacity,Animated,PanResponder,Image,Button } from "react-native";



function Display({task,param,ky}){

    
    const pan=useState(new Animated.ValueXY())[0];
    const panResponder=useState(
        PanResponder.create({
          onMoveShouldSetPanResponder:()=>true,
          onPanResponderGrant:()=>{
            pan.setOffset({
              x:pan.x._value,
              y:pan.y._value
            })
          },
          onPanResponderMove:(_,gestures)=>{
              pan.x.setValue(gestures.dx)
              pan.y.setValue(gestures.dy)
            
            //   console.log(gestures.dx);
            //   changecordinate(parseInt(gestures.moveX),parseInt(gestures.moveY))
    
          },
          onPanResponderRelease:(_,gestures)=>{
            console.log({dx:gestures.dx,dy:gestures.dy})
            // if(gestures.dx>110){
            //     settoDo(prev=>[...prev,{key:selected,task:task,param:param}])
            // }
            pan.x.setValue(0),
            pan.y.setValue(0)
          }
        })
      )[0];
      return (
        <Animated.View  style={[pan.getLayout()]}{...panResponder.panHandlers}>
          <Text style={styles.list}>{task} TO {param} BY {ky}</Text>
        </Animated.View>
        
      );
}
export default Display
const styles = StyleSheet.create({
    container: {
      flexDirection:"column",
      backgroundColor: '#d3d3d3',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:30
    },
    img:{
      width:60,
      height:60,
      borderRadius:30
    },
    list:{
        borderWidth:3,
        borderRadius:5,
        borderColor:'#c8c8c8',
        marginBottom:9,
        padding:9,
        margin:9,backgroundColor:'skyblue',
        fontWeight:"bold"
        

    }
  
  });
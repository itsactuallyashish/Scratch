import { useState,useRef,useImperativeHandle, forwardRef,useEffect } from 'react';
import { StyleSheet, Text, View,Animated ,PanResponder,Image, Button, Easing} from 'react-native';

function Spirit({Changecordinate,link,actions,ky},ref){
   useImperativeHandle(ref,()=>{
        return {Onreset:handlemove}
   },[]);
    // const [move, setmove] = useState([])
    
    // move.map((it)=>console.log(it))
  // console.log(actions);
  // console.log(ky);
 

  const handlemove=()=>{
    pan.x.setValue(0),
    pan.y.setValue(0)
    actions.map((it)=>{
      if(it.key==ky){
        if(it.task=="moveX"){
          movex();
        }
        if(it.task=="moveY"){
          movey();
        }
        if(it.task=="rotateclockwise"){
                 rotate();
        }
        if(it.task=="rotateanticlockwise"){
                 rotateanti();
        }
      }
    })
    pan.x.setValue(0)
    pan.y.setValue(0)
  }
  
  
  const pan=useState(new Animated.ValueXY())[0];
  // console.log(pan);
    // const x=useState()[0];
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
            Changecordinate(parseInt(gestures.moveX),parseInt(gestures.moveY))
          },
          onPanResponderRelease:()=>{
          
          pan.flattenOffset();
        }
      })
    )[0];

      const transx=useState(new Animated.Value(0))[0]
      
  
       const translationx=transx.interpolate({
        inputRange:[0,1],
        outputRange:[0,300]
       })
      const movex=()=>{
        
          Animated.timing(transx,{
            toValue:1,
            duration:2000,
            easing:Easing.linear,
            useNativeDriver:false,
          }).start()
      }
      const transy=useState(new Animated.Value(0))[0]
       const translationy=transx.interpolate({
        inputRange:[0,1],
        outputRange:[0,300]
       })
      const movey=()=>{
          Animated.timing(transx,{
            toValue:1,
            duration:2000,
            easing:Easing.linear,
            useNativeDriver:false,
          }).start()
      }





     let rotatevalueholder=new Animated.Value(0)
    const RotateData=rotatevalueholder.interpolate({
      inputRange:[-1,0,1],
      outputRange:['-90deg','0deg','90deg']
    })
    const rotate=()=>{
          
          Animated.timing(rotatevalueholder,{
            toValue:1,
            duration:2000,
            easing:Easing.linear,
            useNativeDriver:false,
          }).start()
    }
    const rotateanti=()=>{
      Animated.timing(rotatevalueholder,{
        toValue:-1,
        duration:2000,
        easing:Easing.linear,
        useNativeDriver:false,
      }).start()
    }
    
    return (<Animated.View  style={{transform:pan.getTranslateTransform()}}{...panResponder.panHandlers}>
            
            <Animated.Image style={[styles.img,{transform:[{translateY:translationy},{translateX:translationx},{rotate:RotateData}]}]} source={{uri:link,}}/>
         </Animated.View>);
  
  }

  export default forwardRef(Spirit)
  const styles = StyleSheet.create({
    container: {
      flexDirection:"column",
      backgroundColor: '#d3d3d3',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:30
    },
    dumm2:{
      flexDirection:"row",
      justifyContent:'space-around',
      alignItems:'center',
      width:380,
      height:80,
      padding:3,
      marginBottom:12,
      borderWidth:2,
      borderColor:'grey',
      borderRadius:8,
      backgroundColor:"#fff"
    },
    dumm3:{
      width:380,
      height:140,
      padding:3,
      marginBottom:12,
      borderWidth:2,
      borderColor:'grey',
      borderRadius:8,
      backgroundColor:"#fff"
    },
    dumm1:{
      width:380,
      height:500,
      padding:10,
      marginBottom:12,
      borderWidth:2,
      borderColor:'grey',
      borderRadius:8,
      backgroundColor:"#fff"
    },
    img:{
      width:60,
      height:60,
      borderRadius:30
    },
    btn:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      padding:10
    }
  
  });
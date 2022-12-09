import React ,{useState,useEffect,useRef}from "react";
import { StyleSheet,View,Text,TextInput,TouchableOpacity,Animated,PanResponder,Image,Button } from "react-native";
import Spirit from './Sprt'
// function Spirit({changecordinate,link}){
//   const move=()=>{
    
//     pan.x.setValue(0);
//     pan.y.setValue(0);
//     changecordinate(0,0);
//   }
  
//     const pan=useState(new Animated.ValueXY())[0];
//     const panResponder=useState(
//         PanResponder.create({
//           onMoveShouldSetPanResponder:()=>true,
//           onPanResponderGrant:()=>{
//             pan.setOffset({
//               x:pan.x._value,
//               y:pan.y._value
//             })
//           },
//           onPanResponderMove:(_,gestures)=>{
//               pan.x.setValue(gestures.dx)
//               pan.y.setValue(gestures.dy)
//               changecordinate(parseInt(gestures.moveX),parseInt(gestures.moveY))
    
//           },
//           onPanResponderRelease:()=>{
//             pan.flattenOffset();
//           }
//         })
//       )[0];
//       return (
//         <Animated.View  style={[pan.getLayout()]}{...panResponder.panHandlers}>
//           <Image style={styles.img} source={{uri:link,}}/>
//         </Animated.View>
//       );
// }


export default function Spirits({navigation,GlobalState}){
    const {todo,settodo,setspirit,spirit}=GlobalState;
    const handlerpage=()=>{
        navigation.navigate('home');
    }
  //managing todo actions into a array of array
  const [toactions, settoactions] = useState([]);
    // todo.map((it)=>console.log(it))
    const iref=useRef([]);
    iref.current=[];
    const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const Changecordinate=(a,b)=>{
    setX(a);
    setY(b);
  }
  const addref=(el)=>{
    if(el&& !iref.current.includes(el))
    iref.current.push(el);
    // console.log(iref.current);
  }
  const onreset=()=>{
    // iref.current.Onreset();
    iref.current.map((item)=>{item.Onreset()})
  }

  
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <View>
      <Text style={{fontSize:20,fontWeight:"bold",marginRight:140}}>Scratch App!!</Text></View>
      <View style={{marginLeft:40}}>
      <Button title='Play' onPress={onreset}></Button></View>

      </View>
      <View style={styles.dumm1}>
        {/* {spirit.map((item)=><Spirit ref={addref} Changecordinate={Changecordinate} link={item.spirit=="BALL"?"https://thumbs.dreamstime.com/b/football-soccer-ball-4796264.jpg":"https://mir-s3-cdn-cf.behance.net/project_modules/disp/73cc959136191.560c91cd4b434.png"}/>)} */}
        {spirit.map((item)=><Spirit ref={addref} Changecordinate={Changecordinate} link={item.spirit=="BALL"?"https://thumbs.dreamstime.com/b/football-soccer-ball-4796264.jpg":"https://mir-s3-cdn-cf.behance.net/project_modules/disp/73cc959136191.560c91cd4b434.png"} actions={todo} ky={item.key}/>)}
        {/* <Spirit changecordinate={changecordinate}/> */}
      </View>
        <View style={styles.dumm2}>
          <Text>spirit:</Text>
          <Text> X_coordinate: {X}</Text>
          <Text> Y_coordinate: {Y}</Text>
          
        </View>
        <View style={styles.dumm3}>
         {spirit.map((item)=><Image style={{width:50,height:50,borderRadius:25}} source={{uri:item.spirit=="CAT"?"https://mir-s3-cdn-cf.behance.net/project_modules/disp/73cc959136191.560c91cd4b434.png":"https://thumbs.dreamstime.com/b/football-soccer-ball-4796264.jpg"}}/>)}
         <TouchableOpacity style={{padding:9,margin:8,borderWidth:2,borderRadius:5,backgroundColor:'pink',height:45,width:60}} onPress={handlerpage}><Text>Add+</Text></TouchableOpacity>
        </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
const styles = StyleSheet.create({
    container: {
      flexDirection:"column",
      backgroundColor: '#d3d3d3',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:20
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
        flexDirection:"row",
      width:380,
      height:120,
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
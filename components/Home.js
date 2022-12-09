import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, Pressable,Image, ScrollView,SafeAreaView } from "react-native";
import Aclist from "./Actionlist";
import Code from "./Code.js"
import Display from "./Dispalyactions";
export default function Home({ navigation, GlobalState }) {
    const { todo, settodo, spirit, setspirit } = GlobalState;
    const handlerpage = () => {
        navigation.navigate('spirit');
    }

    const [i,seti]=useState(1);
    const [sprt, setsprt] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [Selected,setselected]=useState(0);
    const [toact,settoact]=useState([]);
  
    //list of actions for spirits
    const [action,useaction]=useState([{type:"moveX",param:50},{type:"moveY",param:50},{type:"rotateclockwise",param:90},{type:"rotateanticlockwise",param:90}])

    // console.log(k);
    const k=useRef();
    useEffect(()=>{k.current=Selected},[Selected])
    
    // console.log(Selected);
    const updateTask=(item)=>{
      //  console.log(item);
      settoact(prev=>[...prev,{ky:item.selected.current,param:item.param,task:item.task}])
    }

    // toact.map((item)=>{console.log(item)})
    
    const savehandler=()=>{
        setspirit([]);
         sprt.map((item)=>{setspirit(prev=>[...prev,{key:item.key,spirit:item.id}])});
        //  console.log(spirit);
        settodo([]);
        toact.map((item)=>{settodo(prev=>[...prev,{key:item.ky,param:item.param,task:item.task}])})
        // todo.map((itm)=>console.log(itm));
         navigation.navigate('spirit');
    }
    return (
      <SafeAreaView style={{flexDirection:"column",marginTop:40,padding:2,backgroundColor:"white",height:800}}>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",borderWidth:1,borderRadius:2,margin:12}}>
            
            {sprt.map((item)=>
            // <Text>{item.id}</Text>
            <TouchableOpacity onPress={()=>{setselected(item.key)}}>
            <Image style={{width:50,height:50,borderRadius:25}} source={{uri:item.id=="CAT"?"https://mir-s3-cdn-cf.behance.net/project_modules/disp/73cc959136191.560c91cd4b434.png":"https://thumbs.dreamstime.com/b/football-soccer-ball-4796264.jpg"}}/>
            </TouchableOpacity>
            )}
            
            {/* modal implimentation upahead*/}
            
            <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select The spirit!!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose,styles.modalText]}
              onPress={() =>{  setsprt(spt=>[...spt,{id:"BALL",key:i}])
              seti(i+1)
              setModalVisible(!modalVisible)
            }}
            >
              <Text style={[styles.textStyle,{margin:10,width:200}]}>BALL</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose,styles.modalText]}
              onPress={() =>{  setsprt(spt=>[...spt,{id:"CAT",key:i}])
              seti(i+1)
              setModalVisible(!modalVisible)
            }}
            >
              <Text style={[styles.textStyle,{margin:10,width:200}]}>CAT</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen,{alignItems:"center"}]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Add Spirit</Text>
      </Pressable> */}
    </View>
    < Pressable
        style={[styles.button, styles.buttonOpen,{alignItems:"center"}]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Add Spirit</Text>
      </Pressable>
    < Pressable
        style={[styles.button, styles.buttonOpen,{alignItems:"center"}]}
        onPress={() =>{seti(1), setsprt([]),setselected(),setspirit([]),settoact([])}}
      >
        <Text style={styles.textStyle}>Reset</Text>
      </Pressable>
    <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={savehandler}
            >
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
           
    </View>
          <View style={{flex:10,flexDirection:"row"}}>
            <SafeAreaView style={{flex:1,borderWidth:1,borderRadius:2,margin:9}}>
              <Text style={styles.text}>CODE ACTIONS</Text>
              {/* <ScrollView>
                {action.map((item)=><Aclist task={item.type} param={item.param} selected={k} updateTask={updateTask}/>)}
              </ScrollView> */}
              <Code action={action} k={k} updateTask={updateTask}/>
              </SafeAreaView>
            <View style={{flex:1,borderWidth:1,borderRadius:2,margin:9}}><Text style={styles.text}>ACTIONS {Selected}</Text>
            <ScrollView>
             {toact.map((it)=><Display task={it.task} param={it.param} ky={it.ky}/>)}
            </ScrollView>
            
            </View>
            </View>
        </SafeAreaView>
        
    );

}
const styles = StyleSheet.create({
    container: {
        flexDirection:"column",
        backgroundColor: '#fff',
        height:800,
        marginTop:40,
        padding:20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        width:350,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      text:{
        margin:9,fontSize:20,fontWeight:"bold",borderWidth:1,borderRadius:5,padding:9

      }
});
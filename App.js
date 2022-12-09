import React,{useState,useEffect} from 'react';
import { StyleSheet,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import Spirits from './components/Spirits'



export default function App() {
  //global state
  const[todo,settodo]=useState([]);
  const[spirit,setspirit]=useState([{key:0,spirit:""}]);

  const GlobalState={todo,settodo,spirit,setspirit}
  const stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="home" options={{headerShown:false}}>
          {props=><Home{...props}
          GlobalState={GlobalState}/>}
          </stack.Screen>
          <stack.Screen name="spirit" options={{headerShown:false}}>
          {props=><Spirits {...props}
          GlobalState={GlobalState}/>}
          </stack.Screen>
        
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

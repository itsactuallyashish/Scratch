import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, Pressable,Image, ScrollView } from "react-native";
import Aclist from "./Actionlist";

function Code({action,k,updateTask}){
    return(
        <ScrollView style={{elevation:100}}>
                {action.map((item)=><Aclist task={item.type} param={item.param} selected={k} updateTask={updateTask}/>)}
              </ScrollView>
    );
   
}
export default Code
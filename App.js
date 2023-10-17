import React from "react"
import { Text,TouchableOpacity,View } from "react-native"
import FetchErr from "./Examples/FetchErr"
export const App=()=>{
  return(
    <View style={{padding:30}}>
      <TouchableOpacity onPress={()=>handlePress()}>
      <Text style={{color:'#00f',fontSize:30}}>JS ERROR</Text>
      </TouchableOpacity>
      <FetchErr/>
    </View>
  )
}
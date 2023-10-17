import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { handleErrorOnCatchError } from '..'

export default function FetchErr() {
    const handleFetchReq=async ()=>{
        try{
            let response=await fetch('asdf')
        }
        catch(error){
            handleErrorOnCatchError(error,true)
        }
    }
  return (
    <View>
        <TouchableOpacity onPress={()=>{handleFetchReq()}}>
      <Text style={{color:'#00f',fontSize:30}}>fetchErr</Text>
      </TouchableOpacity>
    </View>
  )
}
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function Home() {
  return (
    
    <View style={{backgroundColor: '#d7d9db', flex:1}}>
        <View style={{backgroundColor:'#305db7', width:"100%", height:150, borderBottomRightRadius:25, borderBottomLeftRadius:25}}>
            <Text>soham</Text>
        </View>
        <View style={{backgroundColor:'white', width:315, height:150, flexDirection: 'row', alignSelf:'center', marginBottom: 15, borderRadius: 10, position: 'absolute', marginTop: 80}}>
            <Text style={{margin:10}}>soham</Text>
            <Text style={{margin:10}}>soham</Text>
        </View>
    </View>
  )
}

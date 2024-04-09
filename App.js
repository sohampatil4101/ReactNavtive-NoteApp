import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Navigation from './src/Navigation/Navigation'
// import { NavigationContainer } from '@react-navigation/native'
// import { Provider } from 'react-redux'
// import store from './src/store'
// import { navigationRef } from './src/services/navRef'
import Home from './src/screen/Home'


export default function App() {
    return (
        // <Provider>
        //     <NavigationContainer ref={navigationRef}>
        //         <Navigation />
        //     </NavigationContainer>
        // </Provider>
        <>
        <Home/>
        </>
    )
}


const styles = StyleSheet.create({})
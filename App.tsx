import 'react-native-gesture-handler';
import {SafeAreaView  } from 'react-native'
import React from 'react'
import RootNavigator from '@navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <RootNavigator/>
    </SafeAreaView>
  )
}
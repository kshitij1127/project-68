import React from 'react'
import { View } from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import Whatsapp from './screens/Whatsapp'
import FaceBook from './screens/Facebook'
import Instagram from './screens/Instagram'

export default class App extends React.Component{
  render(){
    return(
      <Appcontainer />
    )
  }
}

const Tabs = createBottomTabNavigator({
  Whatsapp: {screens: Whatsapp},
  FaceBook: {screens: FaceBook},
  Instagram: {screens: Instagram},
})

const Appcontainer = createAppContainer(Tabs)
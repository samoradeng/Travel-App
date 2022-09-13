import React from 'react'
import Buttons from './Buttons'
import { View, Text, ScrollView } from 'react-native'

function NavBar({title}) {
  return (
    <ScrollView 
    
    contentContainerStyle={{
        
        paddingBottom:20,
    }}
    className="ml-4"
    horizontal 
    showsHorizontalscrollIndicator={false}
    >
      <Buttons title="Test 1" />
      <Buttons title="Test 2"/>
      <Buttons title="Test 3"/>
    </ScrollView>
  )
}

export default NavBar
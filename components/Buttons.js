import { View, Text, ScrollView, Button, TouchableOpacity} from 'react-native'
import React from 'react'

const Buttons = ({title}) => {
  return (
    <ScrollView 
    contentContainerStyle={{
        
        paddingTop:10,
    }}
    horizontal 
    showsHorizontalScrollIndicator={false}
    
    >
        <TouchableOpacity
        className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mx-2 rounded-full"
         >
        <Text>{title}</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default Buttons
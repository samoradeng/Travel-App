import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PlacesCard from '../components/PlacesCard'

const Places = () => {
  return (
    <ScrollView 
    
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
    }}
    vertical 
    showsVerticalScrollIndicator={false}
    >
      <PlacesCard imgUrl="https://links.papareact.com/wru" title="Testing 1" location=" 123 Fake street Mexico" rating="4.9/5" numberOfReviews="(429)"/>
      <PlacesCard imgUrl="https://links.papareact.com/wru" title="Testing 2" location="123 Fake street Ethiopia" rating="5/5" numberOfReviews="(8,972)"/>
      <PlacesCard imgUrl="https://links.papareact.com/wru" title="Testing 3" location="123 Fake street China" rating="4.9/5" numberOfReviews="(1,429)"/>
    </ScrollView>
  )
}

export default Places
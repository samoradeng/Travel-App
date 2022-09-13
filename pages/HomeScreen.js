import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import Places from '../components/Places'
import Buttons from '../components/Buttons'
import NavBar from '../components/NavBar'

const HomeScreen = () => {
  return (
    <SafeAreaView >
      {/* Header */}
      <SearchBar/>

      <ScrollView className="flex flex-row ...">
      <NavBar
      className="flex-row"
      title="Testing"/>
    
     



      </ScrollView>
      

       {/* body */}
      <ScrollView>
      <Places/>
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen
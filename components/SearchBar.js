import { View, Text, SafeAreaView, TextInput, Image} from 'react-native'
import React from 'react'
import { Input } from 'postcss'
import SearchIcon from "../icons/SearchIcon.png"
import AddIcon_Deselected from "../icons/AddIcon_Deselected.svg"
import { MapIcon } from "react-native-heroicons/outline";



const SearchBar = () => {
  return (
    <SafeAreaView className="mx-6 ">
        
        <View className=" flex-row flex-grow items-center space-x-2 my-4">
        <View className="space-x-2 flex-1 items-center rounded-full flex-row bg-gray-200 pr-2">
    <Image
    className=" ml-4 w-6 h-6"
    source={SearchIcon}
    />
    <TextInput 
    className="bg-gray-200  rounded-full  pt-4 pb-4 flex-grow flex-1 "
    placeholder='What are you looking for'
    keyboardType='default'
    />
        
    <MapIcon  color="gray" size={24}  />

   

<View>


    </View>


    </View>

        </View>
   
  </SafeAreaView>
  )
}

export default SearchBar
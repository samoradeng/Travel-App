import { View, Text, TouchableOpacity, Image, Dimensions, Button } from 'react-native'
import React from 'react'
import { BookmarkIcon } from 'react-native-heroicons/outline';
import {StarIcon} from 'react-native-heroicons/solid';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 16 / 9);
const imageWidth = dimensions.width;

const PlacesCard = ({
  imgUrl, 
  title, 
  location, 
  rating,
  numberOfReviews,

}) => {
  return (
    <View>
      {/* Image */}
    <TouchableOpacity className="relateive mb-2">
      <Image 
      // style={{ height: imageHeight, width: imageWidth }}
      source={{
        uri:imgUrl
        
      }}
      className=" h-96 w-96"
      
      />
      
    </TouchableOpacity>
    
    {/* Title */}
    <View >

      <View className="flex-row items-center justify-between">
      <Text
    className=" font-semibold text-base"
    >{title}
    </Text>

    <BookmarkIcon  color="black" size={24}  />
      </View>
    

      <View>
      <Text
    className=" text-sm"
    >{location}
    </Text>
      </View>
    
    <View className="flex-row mb-12">
    <StarIcon color="black" size={16}/>
    <Text>
      {rating}
    </Text>
    <Text className="text-gray-500 pl-1">
      {numberOfReviews}
    </Text>
    </View>
   
    

    </View>
    

    </View>
    
  )
}

export default PlacesCard
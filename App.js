import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import { TailwindProvider } from "tailwindcss-react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
         <NavigationContainer>
     
     <Stack.Navigator
 screenOptions={{
   headerShown: false
 }}>
 
   <Stack.Screen name="Home" component={HomeScreen} />
 
     </Stack.Navigator>

    
    
     </NavigationContainer>


    </TailwindProvider>
   
      ); 
}


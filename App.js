import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ResultList from './Source/Componantes/ResultList';
import ImagesShow from './Source/Screens/ImagesShow';
import RestorentDetailes from './Source/Screens/RestorentDetailes';
import Search_Scrn from './Source/Screens/Search_Scrn';


const stack = createNativeStackNavigator();

  

export default function App() {
  return <NavigationContainer styles={styles.head}>
    <stack.Navigator styles={styles.head} >
      <stack.Screen name="Home" component={Search_Scrn} />
      <stack.Screen name="Images" component={ImagesShow} />
      <stack.Screen name="Restorent Detailes" component={RestorentDetailes} />
    </stack.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  
  head : {
    backgroundColor:"#395B64",
    color:'red'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

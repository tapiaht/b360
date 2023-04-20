import React from 'react'
import { View, Text,Image,StyleSheet,Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { screens } from '../RouteItems'

const Stack = createStackNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'right',
    textTransform: 'uppercase',
    backgroundColor: '#81F7F3',
    
  },
  image: {
    width: 300,
    height: 400,
  }, 
  img1: {
    width: 80,
    height: 60,
  }, 

  container2: {
    borderRadius: 8,
    padding: 8,
    margin: 16,
  },
  clockContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    margin: 16,
  },
   clock: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

const MyRewards = () => (
  <View style={styles.container}>
      <Text style={styles.title}>Reto Del Dia!</Text>


      <View style={styles.imageContainer}>
      
      <Image source={require('../../assets/img2.png')} style={styles.img1} />
      <Text style={styles.subtitle}>Es hora de tomar agua!</Text>
      </View>
      
      <View style={styles.imageContainer}>
        
        <Image source={require('../../assets/img3.png')} style={styles.image} />

      </View>

      <View style={styles.imageContainer}>

        <View style={styles.container2}>
        <Button title="Tomar"/>
          <View style={styles.clockContainer}>
          
          </View>
          
        </View>

      </View>


  </View>



)

const WaterStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={screens.MyRewards} component={MyRewards} />
    </Stack.Navigator>
  )
}

export default WaterStackNavigator

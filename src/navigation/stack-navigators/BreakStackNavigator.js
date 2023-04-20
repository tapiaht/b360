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
  image: {
    width: 200,
    height: 600,
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

const Locations = () => (
  <View style={styles.container}>
      <Text style={styles.title}>Reto Del Dia!</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/img1.png')} style={styles.image} />

        <View style={styles.container2}>
          <View style={styles.clockContainer}>
          <Text style={styles.clock}>10:20:00 ss</Text>
          </View>
          <Button title="Dormir"/>
        </View>

      </View>
  </View>
)

const BreakStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={screens.Locations} component={Locations} />
    </Stack.Navigator>
  )
}

export default BreakStackNavigator

import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import WaterScreen from "../screens/WaterScreen";

const Drawer=createDrawerNavigator();
export default function NavigationDrawer(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={WaterScreen}/>
        </Drawer.Navigator>
    )
}
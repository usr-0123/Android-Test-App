import React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "../screens/users";
import Profile from "../screens/Profile";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createNativeStackNavigator();

const Bottom_nav = ({ navigation }) => {
    return (
        <></>
        // <Tab.Navigator>
        //    {/* <Tab.Screen name="Users" component={UserList} /> */}
        //    {/* <Tab.Screen name="Profile" component={Profile} /> */}
        // </Tab.Navigator>
    )
}

export default Bottom_nav;
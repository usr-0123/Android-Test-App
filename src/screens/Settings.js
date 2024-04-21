import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

const Settings = ({navigation}) => {
    return (
        <>
            <View>
                <Text onPress={() => navigation.navigate('Profile')} >Profile</Text>
            </View>
        </>
    )
}

export default Settings;
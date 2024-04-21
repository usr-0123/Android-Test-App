import React from "react";
import { View, Text, Button } from "react-native";
import styles from '../assets/stylesheets/HomeStyles.js'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./users.js";
import Profile from "./Profile.js";
import Chats from "./Chats.js";
import Settings from "./Settings.js";

// import UserList from "./users.js";

const Stack = createNativeStackNavigator();

const Home =( {navigation} ) => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='Chats' component={Chats} options={{title: 'Chats'}} />
                <Stack.Screen name='UserList' component={UserList} options={{title: 'Users'}} />
                <Stack.Screen name="Profile" component={Profile} options={{title: 'Profile'}} />
                <Stack.Screen name='Settings' component={Settings} options={{title: 'settings'}} />
            </Stack.Navigator>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text onPress={() => navigation.navigate('Chats')}>Chats</Text>
                <Text onPress={() => navigation.navigate('UserList')} >Users</Text>
                <Text onPress={() => navigation.navigate('Settings')}>Settings</Text>
            </View>
        </>
    )
}

export default Home;
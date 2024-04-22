import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from '../assets/stylesheets/HomeStyles.js'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "../components/screens/Users/users.js";
import Profile from "../components/screens/Profile.js";
import Chats from "./Chats.js";
import Settings from "./Settings.js";
import Notification from "../components/screens/Notification.js";
import About from "../components/screens/About.js";
import Security from "../components/screens/Security.js";
import Appearance from "../components/screens/Appearance.js";
import Groups from "./Groups.js";
import ChatRoom from "../components/screens/chats/ChatRoom.js";
import { useIsFocused } from "@react-navigation/native";

// import UserList from "./users.js";

const Stack = createNativeStackNavigator();

const Home =( {navigation} ) => {
    const [ isChatOpen, setIsChatOpen ] = useState(false);
    const isFocused = useIsFocused();

    const handleIsChatRoomOpen = () => {
        setIsChatOpen(true)
    };

    const handleIsChatRoomClose = () => {
        isChatOpen == false
    };

    console.log("logged chat room open state", isFocused);

    return (
        <>
            <Stack.Navigator>

                {/* Main screens */}
                <Stack.Screen name='Chats' component={Chats} options={{title: 'Chats'}} />
                <Stack.Screen name='UserList' component={UserList} options={{title: 'Users'}} />
                <Stack.Screen name='Settings' component={Settings} options={{title: 'Settings'}} />
                <Stack.Screen name='Groups' component={Groups} options={{title: 'Groups'}} />

                {/* Pages available in the settings page */}
                <Stack.Screen name='Profile' component={Profile} options={{title: 'Profile Settings'}} />
                <Stack.Screen name='Notification' component={Notification} options={{title: 'Notifications Settings'}} />
                <Stack.Screen name='Appearance' component={Appearance} options={{title: 'Appearance settings'}} />
                <Stack.Screen name='Security' component={Security} options={{title: 'Security Settings'}} />
                <Stack.Screen name='About' component={About} options={{title: 'About Settings'}} />

                {/* Pages available in the chats page */}
                <Stack.Screen name='ChatRoom' component={ChatRoom} 
                    options={({ route }) => ({ title: route.params.chatDetails.user.First_name })} 
                    listeners={{
                        focus: handleIsChatRoomOpen,
                        blur: handleIsChatRoomClose,
                    }}
                />

            </Stack.Navigator>
            {isFocused && (
                <View style={styles.bottom_nav}>
                    <Text style={styles.nav_buttons} onPress={() => navigation.navigate('Chats')}>Chats</Text>
                    <Text style={styles.nav_buttons} onPress={() => navigation.navigate('Groups')} >Groups</Text>
                    <Text style={styles.nav_buttons} onPress={() => navigation.navigate('Settings')}>Settings</Text>
                </View>
            )}
        </>
    )
}

export default Home;
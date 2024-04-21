import React from "react";
import { Text, View } from "react-native";
import SettingsStyles from "../assets/stylesheets/SettingsStyles";

const Settings = ({navigation}) => {
    return (
        <>
            <View style={SettingsStyles.container}>
                <Text style={SettingsStyles.text} onPress={() => navigation.navigate('Profile')} >Profile</Text>
                <Text style={SettingsStyles.text} onPress={() => navigation.navigate('Notification')}>Notifications</Text>
                <Text style={SettingsStyles.text} onPress={() => navigation.navigate('Appearance')}>Appearance</Text>
                <Text style={SettingsStyles.text} onPress={() => navigation.navigate('Security')}>Security</Text>
                <Text style={SettingsStyles.text} onPress={() => navigation.navigate('About')}>About</Text>
            </View>
        </>
    )
}

export default Settings;
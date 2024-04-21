import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import style from "../../assets/stylesheets/NotificationStyles";

const Notification = () => {
    const [isParentEnabled, setIsParentEnabled] = useState(false)
    const [isChatsEnabled, setIsChatsEnabled] = useState(false)
    const [isGroupEnabled, setIsGroupEnabled] = useState(false)
    const [isChannelsEnabled, setIsChannelsEnabled] = useState(false)

    const toggleParentSwitch = () => {
        setIsParentEnabled(previousState => !previousState)
    };

    const toggleChatsSwitch = () => {
        setIsChatsEnabled(previousState => !previousState)
    };

    const toggleGroupSwitch = () => {
        setIsGroupEnabled(previousState => !previousState)
    };

    const toggChannelsSwitch = () => {
        setIsChannelsEnabled(previousState => !previousState)
    };

    return (
        <>
            <View style={style.container}>
                <View style={style.upper}>
                    <Text>Allow notifications</Text>
                    <Switch 
                        onValueChange={toggleParentSwitch} 
                        value={isParentEnabled} 
                        trackColor={{ false: '#767577', true: '#81b0ff'  }} 
                        thumbColor={isParentEnabled ? '#f5dd4b' : '#f4f3f4'} 
                    />

                </View>
                <View style={style.child} >
                    <Text>Chats notifications</Text>
                    <Switch 
                        onValueChange={toggleChatsSwitch} 
                        value={isChatsEnabled} 
                        trackColor={isParentEnabled ? { false: '#767577', true: '#81b0ff'  } : {}} 
                        thumbColor={isChatsEnabled ? '#f5dd4b' : '#f4f3f4'}
                        disabled={!isParentEnabled} 
                    />
                </View>
                <View style={style.child} >
                    <Text>Group notifications</Text>
                    <Switch 
                        onValueChange={toggleGroupSwitch} 
                        value={isGroupEnabled} 
                        trackColor={isParentEnabled ? { false: '#767577', true: '#81b0ff'  } : {}} 
                        thumbColor={isGroupEnabled ? '#f5dd4b' : '#f4f3f4'}
                        disabled={!isParentEnabled} 

                    />
                </View>
                <View style={style.child} >
                    <Text>Channels notifications</Text>
                    <Switch 
                        onValueChange={toggChannelsSwitch} 
                        value={isChannelsEnabled} 
                        trackColor={isParentEnabled ? { false: '#767577', true: '#81b0ff'  } : {}} 
                        thumbColor={isChannelsEnabled ? '#f5dd4b' : '#f4f3f4'} 
                        disabled={!isParentEnabled} 
                    />
                </View>
            </View>
        </>
    )
}

export default Notification;
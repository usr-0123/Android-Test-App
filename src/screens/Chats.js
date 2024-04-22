import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import data from '../services/json/data.json';

const Chats = ({ navigation }) => {
    const [chats, setChats] = useState([]);
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setChats(data.Chats);
        setUsers(data.Users);
        setMessages(data.Messages);
    }, []);

    const handleChatPress = (chatId, chatDetails) => {
        navigation.navigate('ChatRoom', { chatId, chatDetails });
    };

    return (
        <>
            <Text onPress={() => navigation.navigate('UserList')}>New Chat</Text>

            <ScrollView>
                {chats.map(chat => {
                    const user = users.find(user => user.Id === chat.RecieverId);
                    const message = messages.find(message => message.ChatId === chat.Id);

                    if (user) {
                        return (
                            <TouchableOpacity key={chat.Id} onPress={() => handleChatPress(chat.Id, { chat, user, message })}>
                                <View key={chat.Id}>
                                    <Text>{user.First_name} {user.Last_name}</Text>
                                    <Text>{message.Message}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }

                    return null;
                })}
            </ScrollView>
        </>
    );
};

export default Chats;

import { Text, View } from "react-native";

const ChatRoom = ({ route }) => {
    const { chatId, chatDetails } = route.params;
    console.log("Logged the details in the chat room", chatDetails);
    return (
        <>
            <View>
                <Text>{chatDetails.message.Message}</Text>
            </View>
        </>
    )
}
export default ChatRoom;
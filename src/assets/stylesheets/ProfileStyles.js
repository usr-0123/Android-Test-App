import { StyleSheet } from "react-native";

const ProfileStyles = StyleSheet.create({
    profile: {
        display: 'flex',
        flex: 1,
        gap: 10,
    },
    upper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    profileUser: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' ,
        gap: 10,
        padding: 10,
    },
    profileInputs: {
        gap: 10,
        width: 350,
        padding: 10,
        alignSelf: 'center',
        justifySelf: 'center',
    },
    textInput: {
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 5,
    },
    button: {
        borderRadius: 100,
        padding: 10,
        margin: 10,
        backgroundColor: 'grey',
        alignSelf: 'flex-end',
    }
})

export default ProfileStyles;
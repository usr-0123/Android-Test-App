import { StyleSheet } from "react-native";

const AppearanceStyles = StyleSheet.create({
    container: {
        padding: 10,
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    item: {
        color: 'red',
        backgroundColor: 'grey'
    },
    picker: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default AppearanceStyles;
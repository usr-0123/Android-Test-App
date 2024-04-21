import { StyleSheet } from "react-native";

const NotificationStyles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 10,
    },
    upper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    child: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
})

export default NotificationStyles;
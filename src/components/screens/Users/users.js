// React and react native
import React, {useState, useEffect} from "react";
import { View, ScrollView, Text } from "react-native";

// Data
import data from '../../../services/json/data.json'

// Styles
import styles from "../../../../AppStyles";

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(data.Users)
    }, []);

    return (
        <View>
            <ScrollView>
            {users.map((item) => (
                <View key={item.Id} style={styles.itemContainer}>
                <Text>First Name: {item.First_name}</Text>
                <Text>Last Name: {item.Last_name}</Text>
                <Text>Email Address: {item.Email_address}</Text>
                <Text>Physical Address: {item.Physical_address}</Text>
                <Text>Contact Information: {item.Contact_information}</Text>
                <Text>Date of Birth: {item.DATE_of_birth}</Text>
                <Text>Department: {item.Department}</Text>
                <Text>Job Title: {item.Job_title}</Text>
                </View>
            ))}
            </ScrollView>
      </View>
    )
}

export default UserList;
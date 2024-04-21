import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../../assets/stylesheets/AboutStyles";

const About = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text} >Luwi Messenger</Text>
                <Text style={styles.text} >Version 4.24.1.0</Text>
                <Image style={styles.image}  uri/>
                <Text style={styles.text} >@ 2024-2024 Luwi Inc.</Text>
            </View>
        </>
    )
}

export default About;
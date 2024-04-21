import React, { useState, useEffect } from "react"
import { StatusBar, Text, View, TextInput, ScrollView, Image } from 'react-native';
import styles from "../../AppStyles";

const Profile = () => {
    const [name, setName] = useState('Lewis Kipngetich');
    const [age, setAge] = useState('23');
    const [gender, setGender] = useState('Male');
  
  return (
<View style={styles.profile}>
        <View style={styles.profileUser}>
          <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{ width: 100, height: 100 }} />
          <Text>
            My name is {name}, I am {age} years old and I am a {gender}
          </Text>
        </View>

        <ScrollView style={styles.profileInputs}>
          <Text>Enter your Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter new name..."
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Text>Enter your age:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter new age..."
            keyboardType="numeric"
            value={age}
            onChangeText={(text) => setAge(text)}
          />

          <Text>Enter your gender:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your gender"
            value={gender}
            onChangeText={(text) => setGender(text)}
          />
        </ScrollView>
      </View>
      )}

    export default Profile;
import React, { useState, useEffect } from 'react';
import { StatusBar, Text, View, TextInput, ScrollView, Image } from 'react-native';
import styles from './AppStyles';
import jsonUserData from './json/Users.json';

const splashImage = require('./assets/splash.png');

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('Lewis Kipngetich');
  const [age, setAge] = useState('23');
  const [gender, setGender] = useState('Male');

  useEffect(() => {
    setUsers(jsonUserData.Users);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Let this journey begin</Text>
      <Text>You can make it happen</Text>
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

      <View style={{ height: 240 }}>
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
      <StatusBar hidden />
    </View>
  );
}

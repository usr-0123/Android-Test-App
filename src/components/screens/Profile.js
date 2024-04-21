import React, { useState } from "react"
import { Text, View, TextInput, ScrollView, Image } from 'react-native';
import styles from '../../assets/stylesheets/ProfileStyles'

const Profile = () => {
    const [firstName, setFirstName] = useState('Lewis Kipngetich');
    const [age, setAge] = useState('23');
    const [gender, setGender] = useState('Male');
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <View style={styles.profile}>

        <View style={styles.upper}>
          <Text style={styles.button} onPress={toggleVisibility}> { isVisible ? 'Edit' : 'Done'}</Text>
        </View>

        { isVisible && 
          <View style={styles.profileUser}>
              <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{ width: 100, height: 100 }} />
              <Text> {firstName} </Text>
          </View> 
        }

        { !isVisible && 
          <ScrollView style={styles.profileInputs}>
            <Text>Enter your Name:</Text>
            <TextInput style={styles.textInput} placeholder="Enter new name..." value={firstName} onChangeText={(text) => setFirstName(text)} />

            <Text>Enter your age:</Text>
            <TextInput style={styles.textInput} placeholder="Enter new age..." keyboardType="numeric" value={age} onChangeText={(text) => setAge(text)} />

            <Text>Enter your gender:</Text>
            <TextInput style={styles.textInput} placeholder="Enter your gender" value={gender} onChangeText={(text) => setGender(text)} />

          </ScrollView>
        }

      </View>
    )
  }

export default Profile;
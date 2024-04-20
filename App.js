import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Image } from 'react-native';

// Import the local image
const splashImage = require('./assets/splash.png');

const [ items, setItems ] = useState( [
{id: 1, First_name: 'John', Last_name: 'Doe', Email_address: 'john.doe@example.com', Physical_address: '123 Main St', Contact_information: '123-456-7890' , DATE_of_birth: '1980-01-15', Department: 'Engineering', Job_title: 'Software Engineer'},
{id: 2, First_name: 'Jane', Last_name: 'Smith', Email_address: 'jane.smith@example.com', Physical_address: '456 Elm St', Contact_information: '456-789-0123' , DATE_of_birth: '1985-03-20', Department: 'Marketing', Job_title: 'Marketing Manager'},
{id: 3, First_name: 'Michael', Last_name: 'Johnson', Email_address: 'michael.johnson@example.com', Physical_address: '789 Oak St', Contact_information: '789-012-3456' , DATE_of_birth: '1992-05-10', Department: 'HR', Job_title: 'HR Assistant'},
{id: 4, First_name: 'Emily', Last_name: 'Brown', Email_address: 'emily.brown@example.com', Physical_address: '321 Pine St', Contact_information: '321-654-9870' , DATE_of_birth: '1990-07-08', Department: 'Finance', Job_title: 'Financial Analyst'},
{id: 5, First_name: 'William', Last_name: 'Taylor', Email_address: 'william.taylor@example.com', Physical_address: '987 Maple St', Contact_information: '987-654-3210' , DATE_of_birth: '1987-09-25', Department: 'Engineering', Job_title: 'Software Developer'},
{id: 6, First_name: 'Olivia', Last_name: 'Martinez', Email_address: 'olivia.martinez@example.com', Physical_address: '654 Cedar St', Contact_information: '654-987-6543' , DATE_of_birth: '1983-11-30', Department: 'Marketing', Job_title: 'Marketing Specialist'},
{id: 7, First_name: 'James', Last_name: 'Anderson', Email_address: 'james.anderson@example.com', Physical_address: '852 Birch St', Contact_information: '852-963-7410' , DATE_of_birth: '1982-12-18', Department: 'HR', Job_title: 'HR Manager'},
{id: 8, First_name: 'Sophia', Last_name: 'Wilson', Email_address: 'sophia.wilson@example.com', Physical_address: '741 Sycamore St', Contact_information: '741-852-9630' , DATE_of_birth: '1986-02-22', Department: 'Finance', Job_title: 'Finance Manager'},
{id: 9, First_name: 'Benjamin', Last_name: 'Garcia', Email_address: 'benjamin.garcia@example.com', Physical_address: '159 Walnut St', Contact_information: '159-357-4680' , DATE_of_birth: '1989-04-12', Department: 'Engineering', Job_title: 'Software Architect'},
{id: 10, First_name: 'Emma', Last_name: 'Lopez', Email_address: 'emma.lopez@example.com', Physical_address: '357 Pine St', Contact_information: '357-159-7530' , DATE_of_birth: '1984-06-05', Department: 'Marketing', Job_title: 'Marketing Coordinator'},
{id: 11, First_name: 'Liam', Last_name: 'Miller', Email_address: 'liam.miller@example.com', Physical_address: '258 Oak St', Contact_information: '258-456-7890' , DATE_of_birth: '1991-08-11', Department: 'Engineering', Job_title: 'Senior Software Engineer'},
{id: 12, First_name: 'Ava', Last_name: 'Wilson', Email_address: 'ava.wilson@example.com', Physical_address: '123 Elm St', Contact_information: '123-789-0123' , DATE_of_birth: '1988-10-17', Department: 'Marketing', Job_title: 'Social Media Manager'},
{id: 13, First_name: 'Noah', Last_name: 'Garcia', Email_address: 'noah.garcia@example.com', Physical_address: '456 Cedar St', Contact_information: '456-012-3456' , DATE_of_birth: '1993-04-20', Department: 'HR', Job_title: 'Recruitment Specialist'},
{id: 14, First_name: 'Isabella', Last_name: 'Jones', Email_address: 'isabella.jones@example.com', Physical_address: '789 Pine St', Contact_information: '789-654-9870' , DATE_of_birth: '1981-06-25', Department: 'Finance', Job_title: 'Financial Planner'},
{id: 15, First_name: 'James', Last_name: 'Brown', Email_address: 'james.brown@example.com', Physical_address: '987 Maple St', Contact_information: '987-852-9630' , DATE_of_birth: '1990-12-30', Department: 'Engineering', Job_title: 'Systems Analyst'},
{id: 16, First_name: 'Sophia', Last_name: 'Martinez', Email_address: 'sophia.martinez@example.com', Physical_address: '654 Birch St', Contact_information: '654-159-7530' , DATE_of_birth: '1985-02-14', Department: 'Marketing', Job_title: 'Marketing Director'},
{id: 17, First_name: 'Mason', Last_name: 'Davis', Email_address: 'mason.davis@example.com', Physical_address: '852 Walnut St', Contact_information: '852-357-4680' , DATE_of_birth: '1987-04-08', Department: 'HR', Job_title: 'HR Director'}
] )

export default function App() {

  const [name, setName ] = useState('Lewis')
  const [age, setAge] = useState('23')
  const [gender, setGender] = useState('Male')

  const clickHandler = () => {
    setName('Kipngetich');
    setAge('24');
    setGender('Female');
  }

  return (
    <View style={styles.container}>
      <Text>Let this journey begin</Text>
      <Text>You can make it happen</Text>
      <View style={styles.profile}>
        <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',}} style={{width:100, height:100}}/>
        <Text>Developer</Text>
        <Text>My name is {name}, I am {age} years old and I am a {gender}</Text>
          <View>
            <Button title='Update' onPress={clickHandler}/>
          </View>
          <View>
            <Text>Enter your Name:</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Enter new name...'
              onChange={(value) => setName(value)}
            />

            <Text>Enter your age:</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Enter new age...'
              onChange={(value) => setAge(value)}
            />

            <Text>Enter your age:</Text>
            <TextInput
              placeholder='Enter your age'
              keyboardType='numeric'
              onChange={(value) => setName(value)}
            />
          </View>
      </View>

      {items.map((item) => {
        return (
          <View style={styles.itemContainer} key={item.id}>
            <Text>First Name: {item.First_name}</Text>
            <Text>Last Name: {item.Last_name}</Text>
            <Text>Email_address: {item.Email_address}</Text>
            <Text>Physical_address: {item.Physical_address}</Text>
            <Text>Contact_information: {item.Contact_information}</Text>
            <Text>Date of birth: {item.DATE_of_birth}</Text>
            <Text>Department: {item.Department}</Text>
            <Text>Job title: {item.Job_title}</Text>
          </View>
        )
      })}
      
      <StatusBar hidden style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
    justifyContent: 'center',
    borderRadius:10,
  },
  profile: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    color: '#000',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    width: '100%',
    justifyContent: 'flex-start'
  }
});

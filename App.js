import React, {useState} from 'react';
import { View, StyleSheet, text} from 'react-native';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import { TextInput,Text } from 'react-native';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

export default function App () {

  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },

  ];

  const [category, setCategory] = useState(categories[0]);



  return (
     <Screen>
       {/* <AppPicker 
        selectedItem = {category}
        onSelectItem = {item => setCategory(item)}
        items = {categories} 
        icon="apps" 
        placeholder="Category"/>
       
       
       <AppTextInput icon="email" placeholder="Email"/> */}
        <LoginScreen/>
       
     </Screen>

    
   
  );
}
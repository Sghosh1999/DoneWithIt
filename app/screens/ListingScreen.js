import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import Card from '../components/Card';
import colors from '../config/color';
import Screen from '../components/Screen';

const listings = [
    {
        id:1,
        title: 'red Jacket',
        price:100,
        image: require('../assets/jacket.jpg')
    },
    {
        id:2,
        title: 'Couch',
        price:200,
        image: require('../assets/couch.jpg')
    }
]

function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
           <FlatList 
           data = {listings}
           keyExtractor={listing => listing.id.toString()}
           renderItem={({item})=> (
               <Card
                 title = {item.title}
                 subtitle = {"$" + item.price}
                 image = {item.image}
               />
           )}
           
           />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding:20,
        backgroundColor: colors.lightgrey,
    }
})

export default ListingScreen;
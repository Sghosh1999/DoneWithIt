import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/color';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
       <View>
           <Image style={styles.image} source={require('../assets/couch.jpg')}/>
           <View style={styles.detailedContainer}>
               <AppText style={styles.title}>Couch</AppText>
               <AppText style={styles.price}>$100</AppText>

            <View style={styles.useContainer}>
                <ListItem
                image={require("../assets/mosh.jpg")}
                title="Sayantan Ghosh"
                subTitle="5 Listings"
                />
            </View>
            

           </View>
       </View>
    );
}
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300,
    },
    detailedContainer:{
        padding:20
    },
    title:{
        fontSize:24,
        fontWeight:'500',
    },
    price:{
        color:colors.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
    },
    useContainer:{
        marginVertical:40,
    }
})

export default ListingDetailsScreen;
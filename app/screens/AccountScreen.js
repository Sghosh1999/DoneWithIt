import React from 'react';
import {StyleSheet,View, FlatList} from 'react-native'; //imrn
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/color';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon:{
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon:{
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                title = "Sayantan Ghosh"
                subTitle = "gsayantan1999@gmail.com"
                image = {require('../assets/mosh.jpg')}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                 data ={menuItems}
                 keyExtractor={item => item.title}
                 renderItem={({item}) => (
                    <ListItem
                       title={item.title}
                       IconComponent={
                           <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                       }
                    />)
                }
                ItemSeparatorComponent={ListItemSeparator}
                />
            </View>

            <ListItem 
            title="Log Out"
            IconComponent={
                <Icon name="logout" backgroundColor="#ffa500"/>
            }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightgrey,
    },
    container: {
        marginVertical:20,
    }
})

export default AccountScreen;
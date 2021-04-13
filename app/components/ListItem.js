import React from 'react';
import { View,StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/color';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title,subTitle,image,onPress, IconComponent, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subtitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
       
        
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:colors.white,
        padding:10,
        // borderRadius:15,
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:'center',
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        

    },
    title:{
        fontWeight:'bold',
    },
    subtitle:{
        color:colors.medium,
        fontSize:14,
    }
})

export default ListItem;
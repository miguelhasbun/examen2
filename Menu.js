import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

const Menu = createDrawerNavigator({
    MIGUEL_List: {
        
    },
    New_Todo: {
        
    },
    Done: {
        
    }
    
}, {
    drawerBackgroundColor: '#E73536',
    contentOptions: {
        activeTintColor: 'white'
    }
});
export default Menu;
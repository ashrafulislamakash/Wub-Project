import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

import { DrawerContent } from '../screens/DrawerContent';
import AppStack from './AppStack'

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="AppStack" component={AppStack} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation


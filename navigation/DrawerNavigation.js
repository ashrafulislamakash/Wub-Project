import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
import { DrawerContent } from '../screens/DrawerContent';
import AppStack from './AppStack'
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import MessagesScreen from '../screens/MessagesScreen';

const DrawerNavigation = () => {
    return (

        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="AppStack" component={AppStack} />
                <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
                <Drawer.Screen name="AddPostScreen" component={AddPostScreen} />
                <Drawer.Screen name="MessagesScreen" component={MessagesScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation


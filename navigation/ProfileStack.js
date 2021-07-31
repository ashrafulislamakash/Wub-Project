
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens//EditProfileScreen';
const Stack = createStackNavigator();

function ProfileStack({ navigation, route }) {

    if (route.state && route.state.index > 0) {

        navigation.setOptions({ tabBarVisble: false })
    } else {
        navigation.setOptions({ tabBarVisble: true })
    }

    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{
                    headerTitle: 'Edit Profile',
                    headerBackTitleVisible: false,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#fff',
                        shadowColor: '#fff',
                        elevation: 0,
                    },
                }}
            />
        </Stack.Navigator>
    )
}


export default ProfileStack




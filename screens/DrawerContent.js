import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    // Text,
    // TouchableRipple,
    // Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';

import { AuthContext } from '../navigation/AuthProvider';
import TeacherPortal from '../screens/TeacherPortal'


// const getUser = async () => {
//     await firestore()
//         .collection('users')
//         .doc(route.params ? route.params.userId : user.uid)
//         .get()
//         .then((documentSnapshot) => {
//             if (documentSnapshot.exists) {
//                 console.log('User Data', documentSnapshot.data());
//                 setUserData(documentSnapshot.data());
//             }
//         })
// }


export function DrawerContent(props) {

    const { user, logout } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);


    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{ uri: userData ? userData.userImg || 'https://studybarta.files.wordpress.com/2018/04/wub-logo.png' : 'https://studybarta.files.wordpress.com/2018/04/wub-logo.png' }}

                                size={60}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>{userData ? userData.fname || 'Test' : 'Test'} {userData ? userData.lname || 'User' : 'User'}</Title>
                                <Caption style={styles.caption}> {userData ? userData.about || 'No details added.' : 'No details added.'}</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>


                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="home"
                                    color={COLORS.TextColor}
                                    size={25}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate("FindFriends") }}
                        />


                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome5
                                    name="user-alt"
                                    color={COLORS.TextColor}
                                    size={20}
                                />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate("FindFriends") }}
                        />



                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome5
                                    name="user-friends"
                                    color={COLORS.TextColor}
                                    size={18}
                                />
                            )}
                            label="Find Friend"
                            onPress={() => { props.navigation.navigate("FindFriends") }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="globe-outline"
                                    color={COLORS.TextColor}
                                    size={20}
                                />
                            )}
                            label="Wub"
                            onPress={() => { props.navigation.navigate("FindFriends") }}
                        />


                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome5
                                    name="user-graduate"
                                    color={COLORS.TextColor}
                                    size={20}
                                />
                            )}
                            label="Student Portal"
                            onPress={() => { props.navigation.navigate("FindFriends") }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome5
                                    name="user-tie"
                                    color={COLORS.TextColor}
                                    size={20}
                                />
                            )}
                            label="Teacher Portal"
                            onPress={() => { props.navigation.navigate('TeacherPortal') }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Feather
                                    name="book"
                                    color={COLORS.TextColor}
                                    size={25}
                                />
                            )}
                            label="Book Sell"
                            onPress={() => { props.navigation.navigate("FindFriends") }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="tools"
                                    color={COLORS.TextColor}
                                    size={20}
                                />
                            )}
                            label="Unitconverter"
                            onPress={() => { props.navigation.navigate("FindFriends") }}
                        />
                    </Drawer.Section>

                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>

            </DrawerContentScrollView>

            <Drawer.Section>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={COLORS.TextColor}
                            size={25}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { logout() }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,

    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    drawerSection: {
        marginTop: 10,
        backgroundColor: COLORS.lightGray,
    },

    // preference: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     paddingVertical: 12,
    //     paddingHorizontal: 16,
    // },
});

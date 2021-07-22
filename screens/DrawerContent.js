import React, { useContext } from 'react';
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

export function DrawerContent(props) {

    const { user, logout } = useContext(AuthContext);


    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: "https://avatars.githubusercontent.com/u/71764995?v=4"
                                }}
                                size={60}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Ashraful Islam</Title>
                                <Caption style={styles.caption}>Students of CSE</Caption>
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
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate() }}
                        />


                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate() }}
                        />



                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome5
                                    name="user-friends"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Find Friend"
                            onPress={() => { props.navigation.navigate() }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="globe-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Wub"
                            onPress={() => { props.navigation.navigate() }}
                        />


                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome5
                                    name="user-graduate"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Student Portal"
                            onPress={() => { props.navigation.navigate() }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome5
                                    name="user-tie"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Teacher Portal"
                            onPress={() => { props.navigation.navigate() }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Feather
                                    name="book"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Book Sell"
                            onPress={() => { props.navigation.navigate() }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Unitconverter"
                            onPress={() => { props.navigation.navigate() }}
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
                            color={color}
                            size={size}
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

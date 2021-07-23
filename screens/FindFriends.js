import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

export default function FindFriends() {
    return (
        <View style={styles.container}>
            <Text>Find Friends Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightGray
    },
});

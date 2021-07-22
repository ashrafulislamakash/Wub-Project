import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, icons, } from "../constants"
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import MessagesScreen from '../screens/MessagesScreen';
import EditProfileScreen from '../screens/EditProfileScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const CustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
      }}
      onPress={onPress}
    >

      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={{
          bottom: 30,
          width: 70,
          height: 70,
          borderRadius: 35,
          shadowColor: COLORS.lightGray,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 15,
        }}>
        {children}
      </LinearGradient >


    </TouchableOpacity >
  )
}


const FeedStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="WUB"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Lato-Bold',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },

        headerLeft: () => (
          <View style={{ marginRight: 10 }}>
            <FontAwesome5.Button
              name="bars"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <FontAwesome5.Button
              name="comment"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),
      }}
    />



    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const MessageStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
  <Stack.Navigator>
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
);

const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          left: 8,
          bottom: 8,
          right: 8,
          borderTopWidth: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }

      }}>


      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
              <Image
                source={icons.Home}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary
                }}
              />

              <Text
                style={{ color: focused ? COLORS.primary : COLORS.secondary, fontSize: 12 }}

              >Home</Text>
            </View>
          )
        }}

      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),

          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
              <Image
                source={icons.like}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary
                }}
              />

              <Text
                style={{ color: focused ? COLORS.primary : COLORS.secondary, fontSize: 12 }}

              > Love</Text>
            </View>
          )
        })}
      />



      <Tab.Screen
        name="Profile"
        component={AddPostScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
              <Image
                source={icons.Add}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.white : COLORS.white
                }}
              />
            </View>
          ),

          tabBarButton: (props) => (
            <CustomButton {...props} />
          )
        }}
      />

      <Tab.Screen
        name="C"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary
                }}
              />

              <Text
                style={{ color: focused ? COLORS.primary : COLORS.secondary, fontSize: 12 }}

              >Search</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Profile5"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
              <Image
                source={icons.user}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary
                }}
              />

              <Text
                style={{ color: focused ? COLORS.primary : COLORS.secondary, fontSize: 12 }}

              > Profile </Text>
            </View>
          )
        }}
      />


    </Tab.Navigator>
  );
};

export default AppStack;


const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.lightGray,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.5,
    elevation: 10
  }
})
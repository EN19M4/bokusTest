import React from 'react';
import Auth from './components/screens/Auth';
import Lists from './components/screens/Lists';
import Element from './components/screens/Element';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Screens() {
  const userLogin = useSelector(state => state.repos.user)
    return (<NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{title: 'Вход в личный кабинет', headerTitleStyle: {color:'#fff', }, headerStyle: {backgroundColor: "#0077ff"}}}
          />
          <Stack.Screen
            name="Lists"
            component={Lists}
            options={{title: 'Список',  headerTitleStyle: {color:'#fff'}, headerStyle: {backgroundColor: "#0077ff"}, headerLeft: null, headerRight: () => (
            <View style = {{flexDirection: 'row'}}>
              <Text style = {{justifyContent: 'center', fontSize:18, color: '#fff', paddingRight: 15}}>
                {userLogin}
              </Text>
                <Icon
                    style = {{paddingRight: 10}} 
                    size={30}
                    color = "#fff"
                    name='user-circle-o'
                    />
            </View>
            )}}
          />
          <Stack.Screen
            name="Element"
            component={Element}
            options={{title: 'Элемент',  headerTitleStyle: {color:'#fff'}, headerStyle: {backgroundColor: "#0077ff"}, headerLeft: null, headerRight: () => (
              <View style = {{flexDirection: 'row'}}>
                <Text style = {{justifyContent: 'center', fontSize:18, color: '#fff', paddingRight: 15}}>
                  {userLogin}
                </Text>
                  <Icon
                      style = {{paddingRight: 10}} 
                      size={30}
                      color = "#fff"
                      name='user-circle-o'
                      />
              </View>
              )}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )};

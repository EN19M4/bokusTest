import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Element({ navigation }) {
    const { height } = useWindowDimensions();
    const arr = useSelector(state => state.description.description)

    const loadPrevious = () => {
        navigation.navigate('Lists');
    }
    
      const loadHome = () => {
        navigation.navigate('Auth');
    }

        return (
            <SafeAreaView style = {{height: (height - 64)}}>
                <View>
                    <Text style = {styles.title}>{arr.title}</Text>
                    <Text style = {styles.description}>{arr.description}</Text>
                </View>
                <TouchableOpacity onPress={loadPrevious} style = {styles.iconClose}>
                <Icon 
                    size={60}
                    color = "#0077ff"
                    name='arrow-left'
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={loadHome} style = {styles.iconHome}>
                <Icon 
                    size={60}
                    color = "#0077ff"
                    name='home'
                    />
                </TouchableOpacity>
            </SafeAreaView>
        );
};

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: '5%',
        color: '#0077ff',
        maxWidth: '90%',
        textAlign: 'center',
    },
    description: {
        alignSelf: 'center',
        fontSize: 16,
        width: '90%',
        textAlign: 'center',
        color: '#0077ff'
    },
    iconClose: {
        position: 'absolute',
        left: 20,
        bottom: 15,
        alignSelf: 'flex-end'
    },
    iconHome: {
        position: 'absolute',
        right: 20,
        bottom: 15,
        alignSelf: 'flex-end'
    }
})


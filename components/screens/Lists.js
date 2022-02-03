import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDescription } from '../../redusers/elementDescription';

export default function Lists({ navigation }) {
  const arr = useSelector(state => state.descriptions.descriptions)
  const dispatch = useDispatch();
  const loadPage = () => {
    navigation.navigate('Element');
  }

  const elementById = (arr) => {
    const description = arr
    dispatch(setDescription(description))
  }

  const onClickHandler = (arr) => {
    loadPage(),
    elementById(arr)
  }

  const ListItem = ({arr}) => {
      return (
          <TouchableOpacity onPress={() => onClickHandler(arr)} style = {styles.opacity}>
            <Text style = {styles.text}>
              {arr.title}
            </Text>
          </TouchableOpacity>
      );
    };

  return (
      <SafeAreaView>
          <View>
              <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{padding: 20, backgroundColor: '#f2f2f2' }}
              data={arr}
              renderItem={({item, index}) => <ListItem arr={item} />}
              />
          </View>
      </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  opacity: {
    alignSelf: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: '95%',
    backgroundColor: '#0077ff',
    borderRadius: 20
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  }
})

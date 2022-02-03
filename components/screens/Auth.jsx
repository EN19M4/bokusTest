import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redusers/repos';
import { fetchDescriptions } from '../../redusers/descriptions';

export default function Auth({ navigation }) {
    const loadPage = () => {
        if (loginInput != '' && passwordInput != '' ) {
            navigation.navigate('Lists');
        }
        else {
            Alert.alert("Ошибка", "Введите корректный логин и пароль")
        }
    }
    const dispatch = useDispatch();
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const onSubmitHandler = () => {
        if (loginInput != '') {      
          setLoginInput('');
          setPasswordInput('');
        }
      }

      const onClickHandler = () => {
        const user = loginInput;
        onSubmitHandler(),
        loadPage(),
        dispatch(setUser(user)),
        dispatch(fetchDescriptions())
    }

    return (
        <SafeAreaView>
            <View style = {styles.entranсeView}>
                <Text style = {styles.entranсe}>Вход</Text>
            </View> 
            <View style = {styles.quoteView}>
                <Text style = {styles.quoteText}>Аристотель рассматривает истину, как высшую форму бытия. Человек, постигая истину, приближается к совершенному бытию. Но на этом пути много трудностей. </Text>
                <Text style = {styles.quote}>"Исследовать истину в одном отношении трудно, в другом легко."</Text>
                <Text style = {styles.quoteText}>Это видно из того, что никто не в состоянии достичь ее надлежащим образом, но не каждый терпит полную неудачу, а каждый говорит что-то поодиночке, правда, ничего или мало добавляет к истине, но, когда все это складывается, получается заметная величина.</Text> 
            </View>
            <View style = {styles.InpView}>
                <View style = {styles.icon}>
                    <Icon 
                    size={22}
                    color = "#0077ff"
                    name='user-circle-o'
                    />
                </View>
                <TextInput
                style = {styles.Inp}
                placeholder='Логин'
                value={loginInput}
                onChangeText={text => setLoginInput(text)}
                />
            </View>
            <View style = {styles.InpView}>
            <View style = {styles.icon}>
                    <Icon 
                    size={22}
                    color = "#0077ff"
                    name='eye-slash'
                    />
                </View>
                <TextInput
                secureTextEntry={true}
                style = {styles.Inp}
                placeholder='Пароль'
                value={passwordInput}
                onChangeText={text => setPasswordInput(text)}
                />
            </View>
            <View style = {styles.btnView}>
                <TouchableOpacity 
                    style = {styles.btn}
                    onPress={onClickHandler}>
                    
                    <Text style={{color: "#fff", alignSelf: 'center', fontSize: 16}}>Войти</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        );
};

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        width: '100%',
        backgroundColor: "#0077ff",
        borderRadius: 10
    },
    btnView: {
        width: '70%',
        marginVertical: 10,
        alignSelf: 'center',
    },
    entranсeView: {
        marginTop: "5%"
    },
    entranсe: {
        fontWeight: 'bold',
        fontSize: 35,
        alignSelf: 'center',
        color: "#0077ff",
    },
    quoteView: {
        marginVertical: 10
    },
    quoteText: {
        fontSize: 16,
        alignSelf: 'center',
        width: '90%',
        textAlign: 'center',
        color: '#007fff'
    },
    quote: {
        fontSize: 16,
        alignSelf: 'center',
        width: '90%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#007fff'
    },
    InpView: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5,
        alignSelf: 'center',
    },
    Inp: {
        flex: 1,
        height: 30,
        width: '100%',
        borderBottomColor: '#0077ff',
        borderBottomWidth: 3,
        fontSize: 16,
    },
    icon: {
        right: 10,
        justifyContent: 'center',
    }
}) 

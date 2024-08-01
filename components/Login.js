import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

    const navigation = useNavigation();

    const [password, setPassword] = useState("");

    const [isVisible, setIsVisible] = useState(false);

    const handleVisible = () => setIsVisible(!isVisible);

    //asyncstorage
    const handleLogin = async () => {
        await AsyncStorage.setItem('token', password)
        if (password === 'Nifemmy') {
            navigation.navigate('My Love')
            Alert.alert("You my baby" + " 🤭")
        } else {
            Alert.alert('You are not Adu')
        }
    }

    return (
        <View style={tw`flex justify-center items-center gap-12 bg-white h-full`}>
            <Text style={tw.style({ fontFamily: 'Dance' }, 'text-4xl text-center text-[#fc5457]')}>
                Who please? 🤭
            </Text>
            <View style={tw`flex justify-center items-center px-4`}>
                <TextInput
                    placeholder='whatever you call the password'
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={tw`px-8 py-4 border-2 border-[#fc5457] rounded-lg w-80`}
                    secureTextEntry={!isVisible}
                />
                <Ionicons
                    name={isVisible ? 'eye' : 'eye-off'}
                    size={24}
                    color={"#808080"}
                    style={tw`absolute right-12`}
                    onPress={handleVisible}
                />
            </View>


            <TouchableOpacity style={tw`flex flex-row justify-center items-center px-4 py-3 bg-[#FC5457] rounded-lg w-4/5`} onPress={handleLogin}>
                <Text style={tw.style({ fontFamily: 'Roboto-Medium' }, 'text-base text-white text-center')}>Login Adurewa 🤟 </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login
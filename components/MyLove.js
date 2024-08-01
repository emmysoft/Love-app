import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const MyLove = () => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex justify-center items-center gap-8 bg-white h-full p-4`}>
            <Text style={tw.style({ fontFamily: 'Roboto-Italic' }, 'text-3xl text-center text-[#fc5457]')}>Happy Girlfriends Day My Treasure 💝 </Text>
            <TouchableOpacity style={tw`flex flex-row justify-center items-center px-4 py-2 bg-white border-2 border-[#fc5457] rounded-lg`} onPress={() => navigation.navigate('Love Letter')}>
                <Text style={tw.style({ fontFamily: 'Roboto-Medium' }, 'text-center text-[#fc5457] text-base')}>
                    A letter for you 🤗
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyLove;
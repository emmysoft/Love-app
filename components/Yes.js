import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Yes = () => {

    const navigation = useNavigation();

    return (
        <>
            <StatusBar style='light' barStyle={'light-content'} />
            <View style={tw`flex justify-center items-center bg-[#fc5457] h-full px-4 py-8 gap-12`}>
                <Text style={tw.style({ fontFamily: 'Dance' }, 'text-center text-white text-3xl')}>
                    Our Love is forever, not just for today. But today, I'd spend today and every other day of my life loving you 💘
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={tw.style({ fontFamily: 'Roboto-Medium' }, 'text-base text-center text-white border-2 border-[#fff] p-2 rounded-lg')}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Yes;
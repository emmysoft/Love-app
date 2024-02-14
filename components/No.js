import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const No = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={tw`flex justify-center items-center bg-white h-full px-4 py-8 gap-8`}>
                <Text style={tw.style({ fontFamily: 'Dance' }, 'text-center text-[#fc5457] text-3xl')}>
                    Even when you say No, I still Love you 😞💟 
                </Text>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={tw.style({ fontFamily: 'Roboto-Medium' }, 'text-base text-center text-[#fc5457] border-2 border-[#fc5457] p-2 rounded-lg')}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default No;
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Letter = () => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex justify-center items-center gap-8 px-4 bg-white h-full`}>
            <Text style={tw.style({ fontFamily: 'Roboto-Bold' }, 'text-xl text-[#fc5457] text-center')}>
                Hey love 🌚🌝❤,
                Having you in my life means a lot, 🤗
                Not a lot actually, I meant all,
                I now truly know love, 🥹🤗❤
                Cos you really make me awe.
                Today is the special day of love, 🗓🤗❤
                and although there's no millions to take you to Dubai shopping mall, 🥲
                I want to than GOD and I want to share my tomorrow, 🤗
                with you as my one and only Love, 🥰❤ {"\n"} {"\n"} {"\n"} 


                Will you be my Val Adu? 🥰❤

            </Text>
            <View style={tw`flex flex-row justify-center items-center gap-5 px-4 py-2`}>
                <TouchableOpacity style={tw`bg-[#fc5457] rounded-lg px-5 py-2`}>
                    <Text style={tw.style({ fontFamily: 'Roboto-Medium' }, 'text-center text-white text-base')} onPress={() => navigation.navigate("Yes")}>Yes? 🤗 </Text>
                </TouchableOpacity>
                <Text style={tw.style({ fontFamily: 'Roboto-Bold' }, 'text-base text-center text-[#fc5457]')}>Or</Text>
                <TouchableOpacity style={tw`bg-white border-2 border-[#fc5457] rounded-lg px-5 py-2`}>
                    <Text style={tw.style({ fontFamily: 'Roboto-Medium' }, 'text-center text-[#fc5457] text-base')} onPress={() => navigation.navigate("No")}>No 😞 </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Letter;
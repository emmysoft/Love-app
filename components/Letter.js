import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Letter = () => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex justify-center items-center gap-8 px-4 bg-white h-full`}>
            <Text style={tw.style({ fontFamily: 'Roboto-Bold' }, 'text-xl text-[#fc5457] text-center')}>
                they say all that glitters is not gold 🪙
                I say why not take it make it 😒
                I am glad you came into my life 🤗🥰
                I never expected a perfect one 🌚🌝
                but I prayed for one I would love, and that would love me back, 🥹🤲
                and I found you, by God's favor,
                thank you for choosing me,
                I know I am not the best of men you have met,
                but you choosing me, has made me to choose to be a better man 🥹,
                I Love you, and I don't mean that by words,
                I mean it with my all,
                you are not to be loved for one day, but for the rest of my life,
                Adurewa 🥹🥰,
                Ajoke mi 🥹🥰🫶
                My treasure 😘💎
                The Favor of GOD to me 🙏🏾🥰
                My Joy 🥰
                I LOVE YOU 🥰
                To the best girlfriend in the world, Oluwanifemi 🥰,
                Happy girlfriends day my Love and Queen of my heart 🥰


            </Text>
            <View style={tw`flex flex-row justify-center items-center gap-5 px-4 py-2`}>
                <TouchableOpacity style={tw`bg-[#fc5457] rounded-lg px-5 py-2`}>
                    <Text style={tw.style({ fontFamily: 'Roboto-Medium' }, 'text-center text-white text-base')} onPress={() => navigation.navigate("Yes")}> 🤗 </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Letter;
import { View, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import Login from './Login';

const Splash = () => {

    const [showSplash, setShowSplash] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 5000)
    }, [])

    return (
        <>
            {
                showSplash ?
                    <View style={tw`flex-1 justify-center items-center bg-[#fff]`}>
                        <Image source={require("../assets/love.jpg")} alt="love" />
                    </View >
                    :
                    <Login />
            }
        </>
    )
}

export default Splash
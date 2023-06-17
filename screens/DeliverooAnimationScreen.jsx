import { useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';

import * as Animatable from 'react-native-animatable';


const DeliverooAnimationScreen = () => {
    const navigation = useNavigation()
    
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery')
        },4000)
    },[])

    return (
        <SafeAreaView className='flex-1 flex-row items-center justify-center bg-white' >
            <View>
                <Animatable.Image
                    source={require('../assets/de2.gif')}
                    animation="slideInUp"
                    iterationCount={1}
                    className='h-96 w-96'
                />
                <Animatable.Text
                    animation="slideInUp"
                    iterationCount={2}
                    className='text-lg w-10/12 mx-auto my-10 text-[#00CCBB] font-bold text-center'
                >
                    Waiting For Restaurant to accept your Order!
                </Animatable.Text>
            </View>
        </SafeAreaView>
    );
}


export default DeliverooAnimationScreen;

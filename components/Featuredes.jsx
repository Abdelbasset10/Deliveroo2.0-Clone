import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import FeaturesCategories from './FeaturesCategories';

const Featuredes = ({title,desc,id}) => {

    return (
        <View className='my-4 ml-4 ' >
            <View className='flex-row items-center justify-between mb-2 mr-4' >
                <View>
                    <Text className='font-bold text-xl' >{title}</Text>
                    <Text className='text-gray-500' >{desc}</Text>
                </View>
                <ArrowRightIcon color="#00CCBB" size={25} />
            </View>
            <FeaturesCategories id={id} />
        </View>
    );
}



export default Featuredes;

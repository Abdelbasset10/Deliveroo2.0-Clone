import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    }) => {
        const navigation = useNavigation()

        const handleNavigate = () => {
            navigation.navigate('Restaurant',{
                id,
                imgUrl,
                title,
                rating,
                genre,
                address,
                short_description,
                dishes,
                long,
                lat
            })
        }
    return (
        <TouchableOpacity className='mr-2' onPress={handleNavigate} >
            <Image source={{uri:urlFor(imgUrl).url()}} className='w-64 h-32 rounded-sm' />
            <View className='px-3 py-2 bg-white' >
                <Text className='font-bold text-lg' >{title}</Text>
                <View className='flex-row items-center space-x-2' >
                    <StarIcon color="gray" size={15} />
                    <Text className='text-[#00CCBB]' >{rating}</Text>
                    <Text>{genre}</Text>
                </View>
                <View className='flex-row items-center space-x-2'>
                    <MapPinIcon color="gray" size={15} />
                    <Text>Nearby</Text>
                    <Text>{address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}



export default RestaurantCard;

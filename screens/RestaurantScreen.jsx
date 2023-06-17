import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useEffect} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { urlFor } from '../sanity';
import { ArrowLeftCircleIcon, ArrowLeftIcon, ChevronRightIcon, MapPinIcon, MinusCircleIcon, PlusCircleIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid'
import DishComp from '../components/DishComp';
import CartButton from '../components/CartButton';
import { useDispatch } from 'react-redux';
import { updateRestaurant } from '../redux/features/restaurantSlice';



const RestaurantScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {params} = useRoute()
    const {id,imgUrl,title,rating,genre,address,short_description,dishes,long,lat} = params

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    })

    useEffect(()=>{
        dispatch(updateRestaurant(params))
    },[dispatch])

    return (
        <>
            <CartButton />
            <ScrollView>
                <View className='relative'>
                    <Image source={{uri:urlFor(imgUrl).url()}} className='w-full h-52 object-cover' />
                    <TouchableOpacity className='absolute top-14 left-6 px-[1px] bg-white rounded-full' onPress={navigation.goBack}>
                        <ArrowLeftIcon size={35} color="#00CCBB"   />
                    </TouchableOpacity>
                </View>
                <View className='bg-white p-4 flex-col space-y-2' >
                    <Text className='text-3xl font-bold ' >{title}</Text>
                    <View className='flex-row space-x-1 items-center' >
                        <StarIcon size={20} color="gray" className='opacity-50' />
                        <Text className='text-[#00CCBB]' >{rating}</Text>
                        <Text>Offers</Text>
                        <MapPinIcon color="gray" size={20} />
                        <Text>Nearby {address}</Text>
                    </View>
                    <Text className='opacity-50' >{short_description}</Text>
                    <TouchableOpacity className='flex-row justify-between items-center' >
                        <View className='flex-row space-x-4' >
                            <QuestionMarkCircleIcon size={20} color="gray" />
                            <Text className='font-bold' >Have a food allergy?</Text>
                        </View>
                        <ChevronRightIcon color="#00CCBB" size={25} />
                    </TouchableOpacity>
                    </View>
                    <View className='bg-gray-200 p-4 w-full' >
                        <Text className='font-bold text-xl' >Menu</Text>
                    </View>
                    <View className='flex-col space-y-2 px-4 pb-28 bg-white ' >
                        {dishes?.map((item,index)=>(
                            <DishComp dish={item} key={index} />
                        ))}                  
                    </View>            
            </ScrollView>
        </>
    );
}


export default RestaurantScreen;

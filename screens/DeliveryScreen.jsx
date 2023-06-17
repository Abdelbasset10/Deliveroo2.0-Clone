import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { clearCart } from '../redux/features/cartSlice';

const {height} = Dimensions.get("window")

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {restaurant} = useSelector((state)=>state.restaurant)

    const goHome = () => {
        dispatch(clearCart())
        navigation.navigate('Home')
    }

    return (
        <View className='flex-1 bg-[#00CCBB] '>
            <SafeAreaView  >
                <View className='flex-row items-center justify-between m-4' > 
                    <TouchableOpacity onPress={goHome} >
                        <XMarkIcon color="white" size={30}  />
                    </TouchableOpacity>
                    <Text className='text-white text-lg' >Order Help</Text>
                </View>
                <View className='bg-white mx-4 p-5 z-50 rounded-lg shadow-lg' > 
                    <View className='flex-row justify-between'>
                        <View>
                            <Text className='text-lg text-gray-400' >Estimated Arrival</Text>
                            <Text className='text-3xl font-bold' >45-55 Minutes</Text>
                            <Progress.Bar indeterminate	 width={200} color="#00CCBB" />
                        </View>
                        <Image source={{uri:"https://links.papareact.com/fls"}} className='w-20 h-20' />
                    </View>
                    <Text className='text-gray-400'>Your order at <Text className='font-bold text-lg' >{restaurant.title}</Text> is being prepared!</Text>
                </View> 
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                className='-mt-4 -z-10'
                style={{height:height * 0.6}}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title={restaurant?.title}
                    description={restaurant?.short_description}
                    pinColor='#00CCBB'
                />
            </MapView>
            <SafeAreaView className='h-28  px-4 bg-white'>
                <View className=' flex-row items-center justify-between' >
                    <View className='flex-row items-center space-x-2' >
                        <Image source={{uri:"https://links.papareact.com/wru"}} className='w-10 h-10 rounded-full' />
                        <View>
                            <Text className='font-bold' >Rezazi Mohamed Abdelbasset</Text>
                            <Text>Your Rider</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text className='text-[#00CCBB] font-bold text-xl' >Call</Text>
                    </TouchableOpacity>
                </View>

                
            </SafeAreaView>
        </View>
    );
}


export default DeliveryScreen;

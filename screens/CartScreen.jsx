import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
import { removeFromCart } from '../redux/features/cartSlice';

const {height} = Dimensions.get("window")

const CartScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {items, totalPrice} = useSelector((state)=>state.cart)
    const {restaurant} = useSelector((state)=>state.restaurant)
        const handleBack = () => {
            navigation.goBack()
        }
        
        const handleOrder = () => {
            navigation.navigate("DelivrooAnim")
        }

    return (

        <SafeAreaView className="  z-50" >
            <View className='relative flex-row bg-white py-2 justify-center' >
                <View>
                    <Text className='text-xl font-bold text-center' >Cart</Text>
                    <Text>{restaurant?.title}</Text>
                </View>
                <TouchableOpacity className='absolute top-3 p-2 rounded-full bg-[#00CCBB] right-3' onPress={handleBack} >
                    <XMarkIcon color="white" />
                </TouchableOpacity>
            </View>
            <View className='flex-row px-4  py-2 bg-white my-4 items-center' >
                <View className='flex-row flex-1 items-center space-x-2' >
                    <Image source={{uri:"https://links.papareact.com/wru"}} className='w-7 h-7 rounded-full' />
                    <Text>Deliver in 40-50 mins</Text>
                </View>
                <Text className='text-[#00CCBB] text-lg' >Change</Text>
            </View>
            <ScrollView style={{height:height * 0.53}} className={`flex-col space-y-4 px-4 py-2 bg-white`} >
                {items.length === 0 ? (
                    <View className='flex-col space-y-1' >
                        <Text>Your Cart is empty!</Text>
                        <Text>Go back and pick dishes!</Text>
                        <TouchableOpacity className='flex-row items-center justify-center py-2 bg-[#00CCBB] w-20 rounded-full' onPress={handleBack} >
                            <Text className='text-white' >Go Back!</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    items.map((item,index)=>(
                        <View key={index} className='flex-row items-center' >
                            <View className='flex-row flex-1 space-x-1 items-center' >
                                <Text className='text-[#00CCBB] text-md' >{item.qty}x</Text>
                                <Image source={{uri:urlFor(item.image).url()}} className='w-12 h-12 rounded-full' />
                                <Text>{item.name}</Text>
                            </View>
                            <View className='flex-row space-x-3' >
                                <Text className='text-md font-bold' >${item.price * item.qty}</Text>
                                <TouchableOpacity onPress={()=>dispatch(removeFromCart(item))}>
                                    <Text className='text-[#00CCBB] text-md'>Remove</Text>
                                </TouchableOpacity>
                            </View>
    
                        </View>
                    ))
                )}

            </ScrollView>
            <View className='flex-col space-y-3 px-4 mt-4 bg-white py-2  ' >
                <View className='flex-row items-center justify-between ' >
                    <Text className='text-md'>Subtoal</Text>
                    <Text className='text-md'>${totalPrice}</Text>
                </View>
                <View className='flex-row items-center justify-between' >
                    <Text className='text-md' >Delivry Fee</Text>
                    <Text className='text-md'>$5.96</Text>
                </View>
                <View className='flex-row items-center justify-between' >
                    <Text className='font-bold text-lg' >OrderTotal</Text>
                    <Text className='font-bold text-lg '>${totalPrice + 5.96}</Text>
                </View>
                <TouchableOpacity disabled={items.length === 0} className={`${items.length === 0 ? "bg-gray-400" : "bg-[#00CCBB]"} p-4 rounded-lg w-full`} onPress={handleOrder} >
                    <Text className='text-center text-white' >Place Order</Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    );
}


export default CartScreen;

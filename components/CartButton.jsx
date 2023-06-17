import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';

const CartButton = () => {
    const navigation = useNavigation()
    const {totalQty,totalPrice} = useSelector((state)=>state.cart)

    if(totalQty === 0 ){
        return null
    }
    return (
        <TouchableOpacity 
            className='absolute bottom-4 left-4 justify-between rounded-lg w-11/12 mx-auto flex-row items-center p-4 bg-[#00CCBB]  z-50'
            onPress={()=>navigation.navigate("Cart")}    
        >
            <Text className='px-2 text-white text-xl py-1 bg-green-500' >{totalQty}</Text>
            <Text className='text-white fon-bold text-xl'  >View Cart</Text>
            <Text className='text-white fon-bold text-xl'>{totalPrice}$</Text>      
        </TouchableOpacity>
    );
}


export default CartButton;

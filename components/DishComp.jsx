import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image } from 'react-native';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/features/cartSlice';


const DishComp = ({dish}) => {
    const dispatch = useDispatch()
    const {items} = useSelector((state)=>state.cart)
    const [showItems,setShowItems] = useState(false)
    const itemQty = items.find((item)=>item._id === dish?._id)
  
    return (
        <View className='border-b-[1px] border-gray-200 pb-4' >
            <TouchableOpacity  onPress={()=>setShowItems(!showItems)} className='flex-row justify-between space-x-1 ' >
                <View >
                    <Text className='text-lg' >{dish.name}</Text>
                    <Text className='opacity-40 w-60' >{dish.short_description}</Text>
                    <Text className='opacity-50 mt-1 mb-4' >{dish.price}$</Text>
                    
                </View>
                <Image source={{uri:urlFor(dish.image).url()}} className=' w-20 h-24' />     
            </TouchableOpacity>      
                {showItems && (
                    <View className='flex-row space-x-2 items-center' >
                        <TouchableOpacity  disabled={!itemQty || itemQty?.qty === 0} onPress={()=>dispatch(removeFromCart(dish))}>
                            <MinusCircleIcon size={40} color={`${(!itemQty || itemQty?.qty === 0) ? "gray" : "#00CCBB"}`} />
                        </TouchableOpacity>
                        <Text>{itemQty ? itemQty.qty : 0}</Text>
                        <TouchableOpacity onPress={()=>dispatch(addToCart(dish))} >
                            <PlusCircleIcon size={40} color="#00CCBB" />
                        </TouchableOpacity>
                    </View>
                )}                  
        </View>
    );
}



export default DishComp;

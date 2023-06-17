import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import {ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import Featuredes from '../components/Featuredes';
import client from '../sanity';




const HomeScreen = () => {
    const navigation = useNavigation()
    const [featuredCategories,setFeaturedCategories] = useState([])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    })

    useEffect(()=>{
        client.fetch(`
            *[_type=="featured"]{
                ...,
                restaurants[]->{
                ...,
                dishes[]->
                }
            }
        `).then((data)=>{
            setFeaturedCategories(data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <SafeAreaView className='bg-white'>
            <View  className='mx-4 pt-4' >  
                <View className='flex-row items-center justify-between' >
                    <View className='flex-row items-center space-x-2' >
                        <Image source={{uri:"https://links.papareact.com/wru"}} className='w-7 h-7 rounded-full' />
                        <View>
                            <Text className='text-gray-400 text-sm' >Deliver Now!</Text>
                            <View className='flex-row items-center' >
                                <Text className='font-bold' >Current Location</Text>
                                <ChevronDownIcon color="#00CCBB" size={20} /> 
                            </View>
                        </View>
                    </View>
                    <UserIcon size={35} color="#00CCBB" />
                </View>
                <View className='flex-row space-x-2 items-center my-3' >
                    <View className='flex-1 flex-row items-center space-x-2 bg-gray-200 p-3' >
                        <MagnifyingGlassIcon color="gray" size={20} />
                        <TextInput placeholder='Restaurents and Cuisines' />
                    </View>
                    <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
                </View>             
            </View>
            <ScrollView className='bg-gray-100' contentContainerStyle={{paddingBottom:130,paddingTop:20}} >
                <Categories />
                {featuredCategories?.map((item,index)=>(
                    <Featuredes key={index} id={item._id} title={item.name} desc={item.short_description} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}



export default HomeScreen;

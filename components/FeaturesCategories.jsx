import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView } from 'react-native';
import RestaurantCard from './RestaurantCard';
import client from '../sanity';

const FeaturesCategories = ({id}) => {
    const [restaurants,setRestaurants] = useState([])
    useEffect(()=>{
        client.fetch(`
        *[_type=="featured" && _id==$id]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }
                }
            }[0]
        `,{id}).then((data)=>{
            setRestaurants(data?.restaurants)
        }).catch((err)=>{
            console.log(err)
        })
    },[id])

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false} 
        >
            {restaurants?.map((item,index)=>(
                <RestaurantCard
                key={index}
                id={item._id}
                imgUrl={item.image}
                title={item.name}
                rating={item.rating}
                genre={item.type.name}
                address={item.address}
                short_description={item.short_description}
                dishes={item.dishes}
                long={item.long}
                lat={item.lat}
            />
            ))}
            
           
            

        </ScrollView>
    );
}



export default FeaturesCategories;

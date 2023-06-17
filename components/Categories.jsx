import React, {useState,useEffect} from 'react';
import { ScrollView, Text } from 'react-native';
import CategorieCard from './CategorieCard';
import sanityClient from '../sanity'


const Categories = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        sanityClient.fetch(`
            *[_type=="category"]
        `).then((data)=>{
            setCategories(data)
        }).catch((err)=>{
            console.log(err)
        })
        
    },[])
 

    return (
        <ScrollView
            horizontal 
            contentContainerStyle={{paddingHorizontal:15}}
            showsHorizontalScrollIndicator={false}
        >
            {categories?.map((item,index)=>(
                <CategorieCard key={index} imgCard={item.image} title={item.name} />
            ))}

        </ScrollView>
    );
}



export default Categories;

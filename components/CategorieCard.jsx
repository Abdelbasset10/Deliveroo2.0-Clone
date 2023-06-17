import React from 'react';

import {Image, Text, TouchableOpacity} from 'react-native';
import { urlFor } from '../sanity';

const CategorieCard = ({imgCard,title}) => {
    return (
        <TouchableOpacity className='relative mr-2' >
            <Image source={{uri:urlFor(imgCard).url()}} className=' h-32 w-44 rounded-md' />
            <Text className='font-bold text-white absolute bottom-1 left-1' >{title}</Text>
        </TouchableOpacity>
    );
}



export default CategorieCard;

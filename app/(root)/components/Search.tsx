import { View, Text,Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { useLocalSearchParams, usePathname,router} from 'expo-router';
import { useState } from 'react';
import icons from '@/constants/icons';
import {useDebouncedCallback} from "use-debounce";

//we will use "useDebounce package
//for our search bar to be more performant"
const Search = () => {
  //modify search parameters using imaginary url that we are currently on
  const path=usePathname();
  //From this we get a object containing the query
  const params=useLocalSearchParams<{query?:string}>();
  const [search, setsearch] = useState(params.query);
  //So that API is not called for every key stroke
  const debouncedSearch=useDebouncedCallback((text:string)=>
    router.setParams({query:text}),500) //waittime of 5ms

  const handleSearch=(text:string)=>{
    setsearch(text);
    debouncedSearch(text);
  }

  return (
    <View className='flex flex-row items-center justify-between
    w-full px-4 rounded-lg bg-accent-100 border border-primary-100
    mt-5 py-2'>
      <View className='flex flex-row flex-1 items-center justify-start z-50'>
        <Image source={icons.search} className='size-5'/>
        <TextInput value={search}
        onChangeText={handleSearch}
        placeholder='search for anything'
        className='tex-sm font-rubik text-black-300
         ml-2 flex-1'/>
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} className='size-5'/>
      </TouchableOpacity>
    </View>
  )
}

export default Search
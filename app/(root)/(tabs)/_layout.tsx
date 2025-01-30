import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import icons from '@/constants/icons'

const TabIcon = ({ focused, icon, title }: { focused: boolean; icon: any; title: string }) => (
    <View className='flex-1 justify-center items-center'>
        <Image 
            source={icon} 
            tintColor={focused ? '#0061ff' : '#666876'}
            resizeMode='contain' 
            style={{ width: 20, height: 20 }} // Keep the icon size fixed
        />
        <Text 
            className={`${focused ? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'} text-xs mt-1`}
            numberOfLines={1} // Ensures the text doesn't wrap to the next line
            style={{
                width: 60,  // Adjust this width as needed to fit your layout
                textAlign: 'center',  // Centers the text
            }}
        >
            {title}
        </Text>
    </View>
);

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    borderTopColor: '#0061FF1A',
                    borderTopWidth: 1,
                    height: 50, // Fixed height of the tab bar
                    paddingBottom: 5, // To ensure content stays within bounds
                    paddingTop: 5, // Prevents icons from touching the top
                    justifyContent: 'space-evenly', // Spread tabs evenly
                    alignItems: 'center', // Ensure everything is centered
                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.home} focused={focused} title='Home'/>
                    )
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.search} title="Explore" />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.person} title="Profile" />
                    ),
                }}
            />
        </Tabs>
    )
}

export default TabsLayout;

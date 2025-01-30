//Layout to create a
//  loading indicator when loading or loggin in screen
import { useGlobalContext } from "@/lib/global-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import { Redirect,Slot } from "expo-router";

export default function Applayout(){

    const {loading,isLoggedIn}= useGlobalContext();

    if(loading){
        return (
            <SafeAreaView className="bg-white h-full flex
             justify-center items-center">
                <ActivityIndicator className="text-primary-300"
                size="large"/>
            </SafeAreaView>
        )
    }

    if(!isLoggedIn) return <Redirect href="/sign-in"/>

    return <Slot/>
    //if not loading and currently logged in then simply return the current screen


}
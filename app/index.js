import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Stack, useRouter } from 'expo-router';
import logo from "../assets/icons/UniMrkt-Response.png";
import login from "../assets/icons/login-icon.png"


const Home = () => {
    const router = useRouter();

    return(
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: "#FFF"},
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />
            <Image
            source={logo}
            resizeMode='contain'
            style={{alignContent: 'center'}}
            />
            <TouchableOpacity onPress={() => router.push("/login")}>
                <Image
                source={login}
                resizeMode='contain'
                style={{alignContent: 'center'}}

                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});


export default Home;
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Stack, useRouter } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';

import logo from "../assets/icons/UniMrkt-Response.png";
import login from "../assets/icons/login-icon.png";
import cancel from "../assets/icons/cancel-icon.png"

const Login = () => {
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

            <Text style={styles.title}>Login</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.inputText}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#003f5c"
            />
            </View>

            <TouchableOpacity onPress={() => router.back("/index")}>
                <Image
                source={cancel}
                resizeMode='contain'
                style={styles.loginButton}

                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.replace("/study")}>
                <Image
                source={login}
                resizeMode='contain'
                style={styles.loginButton}

                />
            </TouchableOpacity>



        </View>

    )
}

const styles = StyleSheet.create({
    title:{
        fontWeight: "bold",
        alignSelf:"flex-start",
        color:"#000",
        padding: 20,
        marginBottom: 40,
        },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView:{
        width:"90%",
        backgroundColor:"#fff",
        borderRadius:0,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
        },
        inputText:{
        height:50,
        color:"white"
    },
    loginButton:{
        borderRadius:0,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    }
});


export default Login;
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Stack, useRouter } from 'expo-router';
import { FlatList, TextInput } from 'react-native-gesture-handler';

import logo from "../assets/icons/UniMrkt-Response.png";
import submit from "../assets/icons/sumbit.png";
import back from "../assets/icons/go-back.png";

const Study = () => {
    const router = useRouter();
    const [enteredStudyText, setEnteredStudyText] = useState('');
    const [studyText, setStudyText] = useState([]);

    function studyInputHandler(enteredText) {
        setEnteredStudyText(enteredText);
      }
    
    function addStudyHandler() {
    setStudyText(currentStudyText => [
        ...currentStudyText,
        enteredStudyText,
    ]);
    setEnteredStudyText('');
    }

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
            <Text style={styles.title}>Add Study Type</Text>
            <Text style={styles.text}>and tell us something about yourself in as many points as you would want to</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Your response here"
                    placeholderTextColor="#003f5c"
                    value={enteredStudyText}
                    onChangeText={studyInputHandler}
                />
            </View>

            <View style={styles.textContainer}>
                {studyText.map((study, index) => (
                <Text style={{color: 'black'}} key={index}>
                    {study}
                </Text>
                ))}
            </View>
            <SafeAreaView style={styles.container}>
                <View style={styles.parent}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => router.replace("/login")}>
                        <Image
                        source={back}
                        resizeMode='contain'
                        style={styles.halfButton}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={addStudyHandler}>
                        <Image
                        source={submit}
                        resizeMode='contain'
                        style={styles.halfButton}

                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>




        </View>

    )
}

const styles = StyleSheet.create({
    title:{
        fontWeight: "bold",
        alignSelf:"flex-start",
        color:"#000",
        padding: 20,
        marginBottom:-40,
        },
        text:{
            alignSelf:"flex-start",
            color:"gray",
            padding: 20,
            marginBottom: 40,
            },
        parent: {
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
        },
    
        halfButton: {
            padding: 20,
            width: 150,
            height: 50
          },
    headerLogo:{
        borderRadius:0,
        height:100,
        marginTop:-100,
        marginBottom:20,
        padding:20

    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView:{
        width:"90%",
        borderBlockColor: "#000",
        backgroundColor:"#fff",
        borderRadius:0,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
        },
        inputText:{
        height:50,
        color:"black"
    },
    loginButton:{
        borderRadius:0,
        height:50,
        marginHorizontal:10,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    textContainer:{

        marginBottom:20,
        justifyContent:"left",
        padding:20
    }

});


export default Study;
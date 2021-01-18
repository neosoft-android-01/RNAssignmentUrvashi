import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import CardView from '../components/CardView';
import TextInputWithValidator from '../components/TextInputWithValidator';
import Colors from '../constants/Colors';

const ForgotPasswordScreen= (props: any)=> {

    const inputChangeHandler= ()=> {

    }

    return(
        <SafeAreaView style= {styles.container}>
            <ImageBackground source= {require('../assets/app_bg.jpg')} style= {styles.imagebackground}>
        <CardView style= {styles.cardContainer}>
            <Text 
                style= {styles.headerTitle}>
                    Forgot Password
            </Text>
            <TextInputWithValidator 
                style= {styles.textInput}
                id= "email"
                initialValue= ''
                initiallyValid= {false}
                keyboardType= 'default'
                required
                includeLabel= {false}
                email
                onInputChange= { inputChangeHandler }
                errorMessage= "Please Enter valid Email!!!"
                placeholder= 'Enter Email!!'/>
        
            <TouchableOpacity
                activeOpacity= {0.8}
                style= {styles.button}
                onPress= {()=> {
                    alert("Reset password link sent on mail...")
                }}>
                <Text style= { {
                    fontSize: 16,
                    textAlign: 'center',
                    color: 'white'
                } }>Submit</Text>
            </TouchableOpacity>
        </CardView>
        </ImageBackground>
    </SafeAreaView>  
    );

   
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightslategrey'
    },
    imagebackground: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        width: '90%',
        padding: 24
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        color: Colors.headerColor,
    },
    textInput: {
        marginTop: 16,
        padding: 8,
    },
    optionContainer: {
        marginTop: 16, 
        flexDirection: 'row'
    },
    underlineText: {
        flex: 0.5,
        fontSize: 12,
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: Colors.headerColor,
        padding: 8,
        marginTop: 16,
        borderRadius: 16
    }
});

export default ForgotPasswordScreen;
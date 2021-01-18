import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity , ScrollView} from 'react-native';

import CardView from '../components/CardView';
import TextInputWithValidator from '../components/TextInputWithValidator';
import Colors from '../constants/Colors';

const RegistrationScreen = (props: any) => {
    
    const inputChangeHandler = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source= {require('../assets/app_bg.jpg')} style= {styles.imagebackground}>
            <ScrollView contentContainerStyle= {styles.scrollView}> 
            <CardView style={styles.cardContainer}>
                <Text
                    style={styles.headerTitle}>
                    Registration
                </Text>
                <TextInputWithValidator
                    id="firstname"
                    label="First Name"
                    initialValue=''
                    initiallyValid={false}
                    keyboardType='default'
                    required
                    includeLabel
                    onInputChange={inputChangeHandler}
                    errorMessage="Please Enter valid FirstName!!!"
                    placeholder='First Name'/>
                <TextInputWithValidator
                    id="lastname"
                    label="Last Name"
                    initialValue=''
                    initiallyValid={false}
                    keyboardType='default'
                    required
                    includeLabel
                    onInputChange={inputChangeHandler}
                    errorMessage="Please Enter valid LastName!!!"
                    placeholder='Last Name'/>
                <TextInputWithValidator
                    style={styles.textInput}
                    id="email"
                    label="Email"
                    initialValue=''
                    initiallyValid={false}
                    keyboardType='default'
                    required
                    includeLabel
                    email
                    onInputChange={inputChangeHandler}
                    errorMessage="Please Enter valid Email!!!"
                    placeholder='Email' />
                <TextInputWithValidator
                    style={styles.textInput}
                    id="number"
                    label="Phone Number"
                    initialValue=''
                    initiallyValid={false}
                    keyboardType='number-pad'
                    required
                    includeLabel
                    onInputChange={inputChangeHandler}
                    errorMessage="Please Enter valid Contact Number!!!"
                    placeholder='Phone Number' />
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => {
                        alert("Registered")
                    }}>
                    <Text style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'white'
                    }}>Register</Text>
                </TouchableOpacity>
            </CardView>
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightslategrey'
    },
    scrollView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagebackground: {
        height: '100%',
        width: '100%',
    },
    cardContainer: {
        width: '90%',
        padding: 24,
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
        flexDirection: 'row',
        backgroundColor: 'blue'
    },
    button: {
        backgroundColor: Colors.headerColor,
        padding: 8,
        marginTop: 16,
        borderRadius: 16
    }
});

export default RegistrationScreen;
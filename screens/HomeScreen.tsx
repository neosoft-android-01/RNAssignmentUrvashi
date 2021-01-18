import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import Colors from '../constants/Colors';

const HomeScreen= (props: any)=> {
    return(
        <SafeAreaView style= {styles.container}>

            <View style= {styles.optionContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => {
                    }}>
                        <Text style={{
                            fontSize: 16,
                            textAlign: 'center',
                            color: 'white'
                        }}>My Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => {
                    }}>
                        <Text style={{
                            fontSize: 16,
                            textAlign: 'center',
                            color: 'white'
                        }}>My Account</Text>
                </TouchableOpacity>
            </View>
            
            <View style= {styles.optionContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => {
                    }}>
                        <Text style={{
                            fontSize: 16,
                            textAlign: 'center',
                            color: 'white'
                        }}>My Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => {
                    }}>
                        <Text style={{
                            fontSize: 16,
                            textAlign: 'center',
                            color: 'white'
                        }}>My Cart</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>  
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 16
    },
    button: {
        backgroundColor: Colors.headerColor,
        padding: 24,
        borderRadius: (Dimensions.get('window').width * (0.4)/ 2),
        margin: 8,
        height: Dimensions.get('window').width * (0.4),
        width: Dimensions.get('window').width * (0.4),
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;
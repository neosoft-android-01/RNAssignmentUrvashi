import React, {useReducer, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const INPUT_CHANGE= 'INPUT_CHANGE';
const INPUT_BLUR= 'INPUT_BLUR';

const inputReducer= (state: any,action: any) => {
    switch(action.type){
        case INPUT_CHANGE: 
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            };
        case INPUT_BLUR:
            return {
                ...state,
                touched: true
            }
        default:
            return state;  
    }
};

const TextInputWithValidator= (props: any) => {

    const [inputState, dispatch] = useReducer(inputReducer,{
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initiallyValid,
        touched: false
    })

    const {onInputChange, id}= props;
    useEffect( () => {
        onInputChange(id, inputState.value, inputState.isValid)
    }, [inputState, onInputChange, id]) 

    const textChangeHandler= (text: string) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if (props.required && text.trim().length === 0) {
            isValid = false;
        }
        if (props.email && !emailRegex.test(text.toLowerCase())) {
            isValid = false;
        }
        if (props.min != null && +text < props.min) {
            isValid = false;
        }
        if (props.max != null && +text > props.max) {
            isValid = false;
        }
        if (props.minLength != null && text.length < props.minLength) {
            isValid = false;
        }
        dispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid: isValid
        })
    }

    const lostFocusHandler= () => {
        dispatch({
            type: INPUT_BLUR
        });
    };

    return(
        <View style= {styles.formAction}>
           { props.includeLabel && <Text style= {styles.label}>{props.label}</Text> }
            <TextInput 
                {...props}
                style= {{...props.style,...styles.input}}
                value= {inputState.value}
                onChangeText= {textChangeHandler}
                onBlur={lostFocusHandler}
            />
            {!inputState.isValid && inputState.touched && 
                <View style= {styles.errorContainer}>
                    <Text style= {styles.errorText}>{props.errorMessage}</Text>
                </View>
            }
        </View>
    );
}

const styles= StyleSheet.create({
    formAction: {
        marginTop: 16
    },
    label: {
        fontSize: 12,
    },
    input: {
        fontSize: 16,
        borderColor: 'black',
        borderWidth: 0.5,
        paddingHorizontal: 4,
        paddingVertical: 4,
        marginTop: 4
    },
    errorContainer: {
        marginVertical: 4
    },
    errorText: {
        color: 'red',
        fontSize: 10
    }
});

export default TextInputWithValidator;
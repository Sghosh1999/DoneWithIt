import React, {useState} from 'react';
import {StyleSheet,Image} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password"),
})


function LoginScreen(props) {

    // const [email,setEmail] = useState();
    // const [password,setPassword] = useState();


    return (
        <Screen style={styles.container}>
            <Image 
            style = {styles.logo}
            source={require('../assets/logo-red.png')}
            />

            <Formik
            initialValues={{ email: '', password: ''}}
            onSubmit={values => console.log(values)}
            validationSchema ={validationSchema}>
                
                { ({ handleChange, handleSubmit, errors}) => (
                    <>
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        onChangeText = {handleChange("email")}
                        placeholder="Email"
                        textContentType="emailAddress"
                    />

                    <ErrorMessage error={errors.email} />

                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        onChangeText = {handleChange("password")}
                        secureTextEntry={true}
                        placeholder="Password"
                        textContentType="password"
                    /> 
                    <ErrorMessage error={errors.password} />
                    <AppButton title="Login" onPress={handleSubmit}/>
                    </>
                )}
            </Formik>
            
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
    },

    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20,
    }
})

export default LoginScreen;
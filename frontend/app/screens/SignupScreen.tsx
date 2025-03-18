import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const SignupScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up for ARC Gym Partner Finder</Text>
            <Button
                title="Sign Up with SDSU Email"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

SignupScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default SignupScreen;
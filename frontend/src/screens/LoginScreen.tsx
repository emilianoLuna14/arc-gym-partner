import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, StyleSheet } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ARC Gym Partner Finder</Text>
            <Button
                title="Login with SDSU Email"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

LoginScreen.propTypes = {
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

export default LoginScreen;
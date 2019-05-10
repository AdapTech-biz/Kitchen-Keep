/* eslint-disable global-require */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Freshness = () => (
    <View style={styles.containerView}>
        <Text style={styles.textStyle}>Freshness</Text>
        <View style={styles.carrotsView}>
            <Image source={require('../images/carrot.png')} />
            <Image source={require('../images/carrot.png')} />
            <Image source={require('../images/carrot.png')} />
            <Image source={require('../images/carrot.png')} />
            <Image source={require('../images/carrot.png')} />
        </View>
        
    </View>
);

const styles = StyleSheet.create({
    containerView: {
        padding: 5,
        flex: 1,
        flexDirection: 'column'
    },
    textStyle: {
        fontSize: 15
    },
    carrotsView: {
        flexDirection: 'row'
    }
});

export default Freshness;

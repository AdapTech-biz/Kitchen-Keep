import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Freshness from './Freshness';
import QuanityBadge from './QuanityBadge';

const InventoryItem = (props) => (
    <View style={styles.containerView}>
        <Text style={styles.textStyle}>{props.title}</Text>
        <View style={styles.itemDetails}>
            <Freshness />
            <QuanityBadge />
        </View>
       
    </View>
);

const styles = StyleSheet.create({
    containerView: {
        padding: 5,
        flex: 1,
        flexDirection: 'column',
        borderColor: '#17514B',
        borderWidth: 2,
        marginBottom: 5
    },
    textStyle: {
        fontSize: 30
    },
    itemDetails: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        padding: 10
    }
});

export default InventoryItem;

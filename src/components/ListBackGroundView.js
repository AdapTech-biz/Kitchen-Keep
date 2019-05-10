import React from 'react';
import { View, StyleSheet } from 'react-native';

const ListBackGroundView = (props) => (

    <View style={styles.background}>
       { props.children }
    </View>

);

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#E7ECEF',
        padding: 8,
        flex: 1
         
    }
});

export default ListBackGroundView;

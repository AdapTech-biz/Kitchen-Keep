import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Chip from './Chip';

const ListHeader = () => (
    <ScrollView style={styles.viewContainer} horizontal>
        <Chip number='4' chipName='Meat' />
        <Chip number='4' chipName='Meat' />
        <Chip number='4' chipName='Meat' />
        <Chip number='4' chipName='Meat' />
        <Chip number='4' chipName='Meat' />
    </ScrollView>
);

const styles = StyleSheet.create({
    viewContainer: {
        padding: 10,
        marginBottom: 5
    }
});

export default ListHeader;

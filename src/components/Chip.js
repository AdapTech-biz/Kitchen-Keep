import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Chip = (props) => {
    const { number, chipName } = props;
    const { viewContainer, numberStyle, text } = styles;
    return (
        <TouchableOpacity style={viewContainer}>
            <Text style={numberStyle}>
                { number }
            </Text>
            <Text style={text}>
                { chipName }
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        justifyContent: 'space-around',
        height: 32,
        padding: 5,
        marginLeft: 8, 
        marginRight: 8,
        alignSelf: 'baseline',
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 5,
        elevation: 5
    },
    numberStyle: {
        color: 'white',
        fontWeight: '800',
        marginLeft: 8,
        marginRight: 4
    },
    text: {
        color: 'white',
        fontWeight: '400',
        marginRight: 12
    }
});

export default Chip;

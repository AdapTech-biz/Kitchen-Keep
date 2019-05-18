import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SectionView = ({ title }) => {
    return (
        <View style={styles.containerView}>
            <Image style={styles.imageStyle} source={getSectionIcon(title)} />
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerView: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    imageStyle: {
        marginRight: 10
    },
    textStyle: {
        fontSize: 30
    }
});

const getSectionIcon = (title) => {
    switch (title.toUpperCase()) {
        case 'MEATS':
            return require('./images/meat.png');
        case 'DAIRY':
            return require('./images/milk.png');
        case 'VEGGIES':
            return require('./images/carrot.png');
        default:
            return require('./images/apple.png');
    }
};

export default SectionView;

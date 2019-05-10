import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const InventorySnapShot = () => {
    return (
        <View style={styles.mainContainer}> 
        <View style={styles.RowViewContainer}>
            <View style={styles.categoryContainer}>
            <Image style={styles.image} source={require('../images/meat.png')} />
            <Text style={styles.text}>
                    Meats
                </Text>
                <Text style={styles.text}>
                    4
                </Text>
            </View>
            <View>
                <View style={styles.categoryContainer}>
                <Image style={styles.image} source={require('../images/milk.png')} />
                <Text style={styles.text}>
                        Dairy
                    </Text>
                    <Text style={styles.text}>
                        4
                    </Text>
                </View>
            </View>
        </View>
        <View style={styles.RowViewContainer}>
            <View style={styles.categoryContainer}>
            <Image style={styles.image} source={require('../images/apple.png')} />
            <Text style={styles.text}>
                    Fruit
                </Text>
                <Text style={styles.text}>
                    4
                </Text>
            </View>
            <View>
                <View style={styles.categoryContainer}>
                <Image style={styles.image} source={require('../images/carrot_24px.png')} />
                    <Text style={styles.text}>
                        Veggies
                    </Text>
                    <Text style={styles.text}>
                        4
                    </Text>
                </View>
            </View>
        </View>
        
    </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#17514B',
        width: 190,
        alignSelf: 'center',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 8,
        padding: 5,
        margin: 8        
    },
    RowViewContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderColor: '#000000',
        borderWidth: 2
        
    },
    categoryContainer: {
        flexDirection: 'column'
    },
    text: {
        fontSize: 18,
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    image: {
        alignSelf: 'center'
    }
});

export default InventorySnapShot;

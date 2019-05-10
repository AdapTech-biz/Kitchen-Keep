import React, { Component } from 'react';
import { View } from 'react-native';

class BarCodeScan extends Component {
    static navigationOptions = () => ({
        title: 'Scan Barcode',
      });

    render() {
        return (
            fetch('https://api.nutritionix.com/v1_1/item?upc=52200004265&appId=786b3e9c&appKey=79263b62368125d6fa8e1abe7d311375')
            .then((response) => {
                console.log(response);
            })
            // <View style={{ backgroundColor: 'blue', flex: 1 }} />
            
        );
    }
}

export default BarCodeScan;

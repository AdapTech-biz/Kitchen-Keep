import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { filterInventory } from '../actions/index';

class Chip extends Component {

    styles = StyleSheet.create({
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

    render() {
        return (
            <TouchableOpacity 
                onPress={() => this.props.filterInventory(this.props.chipName)} 
                style={this.styles.viewContainer} 
            >
                <Text style={this.styles.numberStyle}>
                    { this.props.number }
                </Text>
                <Text style={this.styles.text}>
                    { this.props.chipName }
                </Text>
            </TouchableOpacity>
        );
    }
    
} 


export default connect(null, { filterInventory })(Chip);

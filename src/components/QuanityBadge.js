import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class QuanityBadge extends Component {
    state={ quanity: 5 }
    

    styles = StyleSheet.create({
        containerView: {
            padding: 5,
            flexDirection: 'column'
        },
        textStyle: {
            fontSize: 15,
        },
        quanityBadge: {
            backgroundColor: '#6290C3', 
            borderRadius: 5, 
            padding: 8,
            alignSelf: 'baseline',
        }
    })

    render() {
        return (
            <View style={this.styles.containerView}>
                <Text style={this.styles.textStyle}>Qty.</Text>
                <View style={this.styles.quanityBadge}>
                    <Text style={{ color: '#FFFFFF' }}>{this.state.quanity}</Text>
                </View>
            </View>
            

        );
    }
}


export default QuanityBadge;

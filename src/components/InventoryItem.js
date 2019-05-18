import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Text } from 'native-base';
import { selectedItem } from '../actions/index';
import Freshness from './Freshness';
import QuanityBadge from './QuanityBadge';

class InventoryItem extends Component {

    componentWillUpdate() {
        Animated.spring();
    }

     styles = StyleSheet.create({
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
            alignSelf: 'center'
        },
        cardBottom: {
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10
        }
    });

    displayDetails = () => {
        const { itemDetails } = this.styles;
        if (this.props.displayDetails) {
            return (     
                <CardItem style={itemDetails} >
                    <Freshness />
                    <QuanityBadge />
                </CardItem>
            );
        }
    };

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.selectedItem(this.props.title)}>
                <Card style={this.styles.cardBottom}>
                    <CardItem header>
                        <Text style={this.styles.textStyle}>{this.props.title}</Text>
                    </CardItem>

                     {this.displayDetails()}
                     
                    <CardItem style={{ alignSelf: 'center' }}>
                        <Image source={require('../images/arrow_down.png')} />
                    </CardItem>
                </Card>

            </TouchableOpacity>
        );
    }
}

const mapStateToProps = ({ inventoryList }, ownProps) => {
        if (ownProps.title === inventoryList.selectedItem) {
        return { ...ownProps, displayDetails: true };
    }
    return { ...ownProps };
};

export default connect(mapStateToProps, { selectedItem })(InventoryItem);

import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Chip from './Chip';

class ListHeader extends Component {
    render() {
        console.log(this.props);
        return (
            <ScrollView style={styles.viewContainer} horizontal>
                <Chip number={this.props.meats} chipName='Meats' />
                <Chip number={this.props.fruits} chipName='Fruits' />
                <Chip number={this.props.veggies} chipName='Veggies' />
                <Chip number={this.props.dairy} chipName='Dairy' />
            </ScrollView>
        );
    }
}
    
const styles = StyleSheet.create({
    viewContainer: {
        padding: 10,
        marginBottom: 5
    }
});

const mapStateToProps = ({ inventoryList }) => {
    return { meats: inventoryList.meats,
            veggies: inventoryList.veggies,
            dairy: inventoryList.dairy,
            fruits: inventoryList.fruits };
};

export default connect(mapStateToProps)(ListHeader);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import InventoryItem from './InventoryItem';
import ListHeader from './ListHeader';


class InventoryList extends Component {
    render() {
        return (
            <FlatList
            data={this.props.inventoryList}
            renderItem={({ item }) => <InventoryItem title={item.key} />}
            ListHeaderComponent={<ListHeader />}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { inventoryList: state.inventoryList.inventory };
};

export default connect(mapStateToProps)(InventoryList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SectionList } from 'react-native';
import InventoryItem from './InventoryItem';
import ListHeader from './ListHeader';
import SectionView from '../SectionView';


class InventoryList extends Component {
    render() {
        // console.log(this.props);
        return (
            
            <SectionList
            renderItem={({ item }) => <InventoryItem key={item} title={item} />}
            renderSectionHeader={({ section: { title } }) => (
                <SectionView title={title} style={{ fontWeight: 'bold' }} />
            )}
            sections={this.props.inventoryList}
            keyExtractor={(item, index) => item + index}
            ListHeaderComponent={<ListHeader />}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { inventoryList: state.inventoryList.inventory };
};

export default connect(mapStateToProps)(InventoryList);

import React from 'react';
import { FlatList } from 'react-native';
import InventoryItem from './InventoryItem';
import ListHeader from './ListHeader';

const InventoryList = () => (
    <FlatList
        data={[{ key: 'Milk' }, { key: 'Eggs' },
        { key: 'Bacon' }, { key: 'Fish' },
        { key: 'Pizza' }, { key: 'Bread' },
        { key: 'Cheese' }, { key: 'Ham' }]}
        renderItem={({ item }) => <InventoryItem title={item.key} />}
        ListHeaderComponent={<ListHeader />}
    />
);

export default InventoryList;

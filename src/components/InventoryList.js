import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SectionList, TouchableOpacity, Image, View } from 'react-native';
import { SwipeRow, Button, Text } from 'native-base';
import InventoryItem from './InventoryItem';
import ListHeader from './ListHeader';
import SectionView from '../SectionView';


class InventoryList extends Component {
    render() {
        // console.log(this.props);
        return (
            
            <SectionList
            renderItem={({ item }) => 
                <SwipeRow 
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    left={
                        <TouchableOpacity 
                            style={{ flex: 1, 
                                    justifyContent: 'center', 
                                    marginLeft: 10                                  
                                     }}
                        >
                            <View 
                                style={{
                                    borderColor: '#000000',
                                    borderRadius: 15,
                                    borderWidth: 1,
                                    alignSelf: 'baseline',
                                    padding: 10

                                    }} 
                            >
                                <Image source={require('../images/shopping_list.png')} />
                            </View>
                        </TouchableOpacity>
                        
                      }
                    body={<InventoryItem key={item} title={item} />}
                />
                
            }
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

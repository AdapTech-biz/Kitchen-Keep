import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import ListBackGroundView from '../components/ListBackGroundView';
import InventoryList from '../components/InventoryList';
import NavBarItem from '../components/NavBarItem';

class MainScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Kitchen Keep',
        headerRight: [
            (<NavBarItem key='search' imageType='search' />),
            (<NavBarItem 
                key='barcode'
                imageType='barcode' 
                onPress={() => navigation.navigate('BarCodeScan')} 
            />)
        ]
        });

    render() {
        return (
            
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View >
                    <ListBackGroundView> 
                    <InventoryList />
                    </ListBackGroundView>
                </View>

            </View>
        );
    }
}

// const mapPropsToState = (state) => (
//     { inventoryList: state.inventoryList.inventory });

export default connect()(MainScreen);

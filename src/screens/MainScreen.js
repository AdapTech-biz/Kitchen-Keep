import React, { Component } from 'react';
import { View } from 'react-native';
import ListBackGroundView from '../components/ListBackGroundView';
import InventoryList from '../components/InventoryList';
import NavBarItem from '../components/NavBarItem';

class MainScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Kitchen Keep',
        headerRight: [
            (<NavBarItem imageType='search' />),
            (<NavBarItem 
                imageType='barcode' 
                onPress={() => navigation.navigate('BarCodeScan')} 
            />)
        ],
        headerLeft: (<NavBarItem 
                        imageType='drawer'
                        onPress={() => navigation.navigate('Drawer')} 
        />)
        });

    constructor() {
        super();
        this.showMenuPressed = this.showMenuPressed.bind(this);
    }
    
    state = { displayMenu: false, mainDisplayFlex: 1 }


    componentWillMount() {
        this.props.navigation.setParams({ showMenuPressed: this.showMenuPressed });
    }

    displayMenu() {
        if (this.state.displayMenu) {
            return (
              <View style={{ backgroundColor: 'blue', zIndex: 2, width: 50 }} />      
            ); 
        } 
    }
    
    showMenuPressed() {
        this.setState(pState => ({ displayMenu: !pState.displayMenu }));
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
               {this.displayMenu()}
                <View style={{ flex: this.state.mainDisplayFlex }} >
                    <ListBackGroundView> 
                    <InventoryList />
                    </ListBackGroundView>
                </View>

            </View>
        );
    }
}

export default MainScreen;

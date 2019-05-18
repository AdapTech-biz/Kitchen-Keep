import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Card } from 'native-base';
import InventoryList from '../components/InventoryList';
import NavBarItem from '../components/NavBarItem';
import { searchInventory } from '../actions/index';
import SearchBar from '../components/SearchBar';

class MainScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Kitchen',
        headerRight: [
            (<NavBarItem 
                key='search' 
                imageType='search'
                onPress={() => this.props.searchInventory(true)} 
            />),
            (<NavBarItem 
                key='barcode'
                imageType='barcode' 
                onPress={() => navigation.navigate('BarCodeScan')} 
            />)
        ]
        });

    searchPressed() {
        this.props.searchInventory(true);
    }

    displaySearch() {
        if (this.props.searching) {
            return (<SearchBar />);
        }
        return 'Kitchen Keep';
    }

    render() {
        console.log(this.props);
        return (
            <Container>
                <Content padder>
                <InventoryList />
                </Content>
            </Container>
            
        );
    }
}

const mapPropsToState = (state) => {
    if (state.mainScreen.search) {
        return { header: <SearchBar /> };
    }
    return { header: 'Kitchen Keep' };

    // return({ searching: state.mainScreen.search })
};

export default connect(mapPropsToState, { searchInventory })(MainScreen);

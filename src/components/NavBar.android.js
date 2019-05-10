import React, { Component } from 'react';
import { View } from 'react-native';
import SearchBar from './SearchBar';
import ToolBar from './ToolBar';

class NavBar extends Component {

    
    constructor(props) {
        super(props);
        this.state = { showAppBar: true, searchItem: '' };
        this.onActionSelected = this.onActionSelected.bind(this);
        this.toogleSearch = this.toogleSearch.bind(this); 
        this.searchItem = this.searchItem.bind(this);
        this.props.onMenuButtonPress = this.props.onMenuButtonPress.bind(this);
        }

    componentWillMount() {
        this.newBar = (<SearchBar 
            toogleSearch={this.toogleSearch} 
            searchWithText={this.searchItem}
        />);

        this.appBar = (<ToolBar 
            onActionSelected={this.onActionSelected} 
        />);
    }


    onActionSelected(postion) {
        switch (postion) {
            case 0:
                this.toogleSearch();
                break;
            default:
                this.props.onMenuButtonPress();
        }
    }

    toogleSearch() {
        this.setState((previous) => ({ showAppBar: !previous.showAppBar }));
    }

    searchItem(item) {
        console.log('Search Item:');
        console.log(item);
    }

    whatToDisplay() {
        return this.state.showAppBar ? this.appBar : this.newBar;
    }

    render() {
        // const WhatToDisplay = this.state.showAppBar ? this.appBar : this.newBar;
        return (
           <View>
               {this.whatToDisplay()}
           </View>
           
        );
    }


}

export default NavBar;

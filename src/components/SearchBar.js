import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

const SearchBar = ({ toogleSearch, searchWithText }) => (
   
    <View style={styles.toolbar} >
        <Image style={{ alignSelf: 'center' }} source={require('../images/search.png')} />
        <TextInput 
        placeholder="search item..." 
        autoFocus onEndEditing={toogleSearch} 
        onChangeText={(text) => searchWithText(text)}
        />
    </View>
    
);


const styles = StyleSheet.create({
    toolbar: {
        height: 60,
        backgroundColor: '#B0DB43',
        flexDirection: 'row'
    },
    textColor: {
        color: '#E7ECEF'
    }
});

export default SearchBar;

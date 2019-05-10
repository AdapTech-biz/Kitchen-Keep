/* eslint-disable global-require */
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const NavBarItem = (props) => {
   const name = findIcon(props.imageType);
   return (
    <TouchableOpacity style={styles.containerView} onPress={props.onPress}>
        <Image source={name} />
    </TouchableOpacity>
   );  
};

const findIcon = (name) => {
    switch (name.toUpperCase()) {
        case 'SEARCH':
            return require('../images/search.png');
        case 'DRAWER':
            return require('../images/menu-button.png');
        default:
            return require('../images/barcode.png');
    }
};

const styles = {
    containerView: {
        padding: 5,
        marginRight: 5
    }
};

export default NavBarItem;

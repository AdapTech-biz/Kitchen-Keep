/* eslint-disable global-require */
import React from 'react';
import { ToolbarAndroid, StyleSheet } from 'react-native';

const ToolBar = ({ onActionSelected }) => (
        <ToolbarAndroid
            style={styles.toolbar}
            title="Kitchen Keep"
            navIcon={require('../images/menu-button.png')}
            actions={[
                        { 
                            title: 'Search', 
                            icon: require('../images/search.png'), 
                            show: 'always' 
                        },
                        { 
                            title: 'Scan', 
                            icon: require('../images/barcode.png'), 
                            show: 'always' 
                        }
                    ]}
            titleColor={styles.textColor}
            onActionSelected={onActionSelected}
        />
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

export default ToolBar;

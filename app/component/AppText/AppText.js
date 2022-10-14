import { Text,StyleSheet,Platform } from 'react-native';
import React from 'react';

import styles from './Styles';

function AppText({children,style}) {

    return (
        <Text style={[styles,style]}>{children}</Text>
    );

}

export default AppText;

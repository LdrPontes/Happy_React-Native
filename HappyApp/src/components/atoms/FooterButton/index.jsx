import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

const FooterButton = () => {
    return <TouchableOpacity style={styles.footerButton} onPress={() => { }}>
        <Icon name="plus" size={24} style={styles.icon}></Icon>
    </TouchableOpacity>;
}

export default FooterButton;
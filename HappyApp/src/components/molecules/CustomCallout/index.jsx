import React from 'react';
import { Callout } from 'react-native-maps';
import { BaseText, TextType } from '_components';

import { styles } from './styles';

const CustomCallout = ({ label, ...props }) => {
    return <Callout style={styles.container} {...props} >
        <BaseText textType={TextType.NORMAL} textColor={styles.label.color}>{label}</BaseText>
    </Callout>;
}

export default CustomCallout;
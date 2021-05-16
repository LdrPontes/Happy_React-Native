import React from 'react';
import { View } from 'react-native';
import { BaseText, TextType, FooterButton } from '_components';

import { styles } from './styles';

const Footer = () => {
  return <View style={styles.footer}>
      <BaseText testType={TextType.NORMAL} textColor={styles.label.color}>2 orfanatos encontrados</BaseText>
      <FooterButton></FooterButton>
  </View>;
}

export default Footer;
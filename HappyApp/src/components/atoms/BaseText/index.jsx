import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export const TextType = {
  NORMAL: "normal",
  BOLD: "bold",
  SEMI_BOLD: "semi_bold",
  BLACK: "black"
};

const getStyle = (textType, textColor) => {
  switch (textType) {
    case TextType.NORMAL:
      return styles(textColor).normal;
    case TextType.BOLD:
      return styles(textColor).bold;
    case TextType.SEMI_BOLD:
      return styles(textColor).semi_bold;
    case TextType.BLACK:
      return styles(textColor).black;
    default:
      return styles(textColor).normal;
  }
}

const BaseText = ({ textType, textColor, children, ...props }) => {
  return <Text style={getStyle(textType, textColor)} {...props}>{children}</Text>;
}

export default BaseText;
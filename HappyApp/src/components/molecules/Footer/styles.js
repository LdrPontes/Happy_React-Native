import { StyleSheet } from 'react-native';
import { WHITE, FOOTER_LABEL_COLOR } from '_constants/colors';

export const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
      borderRadius: 28,
      backgroundColor: WHITE,
      
      paddingLeft: 24,
      height: 56,
      
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      elevation: 3,
    },
    label: {
        color: FOOTER_LABEL_COLOR,
    }
});
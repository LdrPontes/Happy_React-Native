import { StyleSheet } from 'react-native';
import { BUTTON_COLOR, WHITE } from '_constants/colors';

export const styles = StyleSheet.create({
    footerButton: {
        width: 56,
        height: 56,
        backgroundColor: BUTTON_COLOR,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: WHITE,
    }
});
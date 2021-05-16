import { StyleSheet } from 'react-native';
import { NUNITO } from '_constants/fonts';

export const styles = (textColor) => StyleSheet.create({
    normal: {
        fontFamily: NUNITO,
        color: textColor,
        fontSize: 15,
        lineHeight: 25,
        fontWeight: "700",
    }
});


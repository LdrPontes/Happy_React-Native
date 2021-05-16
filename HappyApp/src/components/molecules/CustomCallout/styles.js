import { StyleSheet } from 'react-native';
import { CALLOUT_BACKGROUND_COLOR, CALLOUT_TEXT_COLOR } from '_constants/colors';

export const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: CALLOUT_BACKGROUND_COLOR,
        justifyContent: 'center',
    },
    label: {
        color: CALLOUT_TEXT_COLOR,
    },
    
});
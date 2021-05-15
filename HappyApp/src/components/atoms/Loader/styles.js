import { StyleSheet } from 'react-native'
import { SCREEN_WIDTH } from '_constants/screen';

const CONTENT_SIZE = SCREEN_WIDTH * 0.9;

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },

    content: {
        flex: 1,
        width: CONTENT_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
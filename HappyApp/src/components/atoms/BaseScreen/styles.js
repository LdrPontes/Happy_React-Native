import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, STATUS_BAR_COLOR} from '_constants/colors';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '_constants/screen';

export const styles = StyleSheet.create({
    box: {
        backgroundColor: BACKGROUND_COLOR,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    statusbar: {
        backgroundColor: STATUS_BAR_COLOR,
    }
});


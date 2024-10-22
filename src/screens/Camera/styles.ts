import { StyleSheet } from 'react-native'
import { colors } from '../../styles/globalstyle';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 30
    },
    message: {
        textAlign: "center",
        paddingBottom: 10,
    },
    camera: {
        width: 350,
        height: 450
    },

    back: {
        flex: 1
    },

    headerCamera: {
        flex: 1,
        alignItems: "center",
        paddingTop: 30,
    },
    footerCamera: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: "center",
    },
    ball: {
        width: 60,
        height: 60,
        backgroundColor: colors.whiteBackground,
        borderRadius: 35,
    },
    headerSave: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
import { StyleSheet } from 'react-native'
import { colors } from '../../styles/globalstyle';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: "center",
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    headerCamera: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
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
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
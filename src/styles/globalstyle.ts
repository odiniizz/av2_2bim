import { StyleSheet } from "react-native"

export const colors = {
    black: 'rgba(37, 36, 33, 1)',
    white: 'rgba(255, 255, 255, 1)',
    cinza: 'rgba(183, 182, 182, 1)',
    whiteBackground: 'rgba(217, 217, 217, 0.6)',
    green: '#606c38',
}

export const styleContainer = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        flexDirection: "row",
        paddingBottom: 40,
    },
})

export const styleText = StyleSheet.create({
    textTitle: {
        color: colors.black,
        fontSize: 75,
        fontFamily: 'Offside_400Regular',
        textAlign: "center",
    },
    titleBoard: {
        color: colors.black,
        fontSize: 40,
        paddingRight: 10,
        fontFamily: 'OdorMeanChey_400Regular',
    },
    subtitleArea: {
        width: 250,
    },
})

export const styleElementos = StyleSheet.create({
    butt: {
        paddingLeft: 20,
        paddingRight: 20,
    },
})


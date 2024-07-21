import { StyleSheet } from "react-native"

export const colors = {
    PRIMARY: "#6D71F9"
}

export const fonts = {
    PRIMARY: "Mulish_400Regular"
}

export const images = {
    logo: {
        PURE_WHITE: require("./assets/icon-pure-white.png")
    }
}


export const styles = StyleSheet.create({
    TEXT_INPUT: {
        backgroundColor: "rgba(109, 113, 249, 0.05)",
        height: 50,
        paddingLeft: 10,
        fontFamily: fonts.PRIMARY
    },
    TEXT: {
        fontFamily: fonts.PRIMARY
    },
    LINK: {
        fontFamily: fonts.PRIMARY,
        color: colors.PRIMARY,
    }
})
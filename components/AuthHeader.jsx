import {
    StyleSheet,

    View,
    Image,
    Text
} from "react-native";

import {colors, images, fonts} from "../shared";


export default function AuthHeader () {

    return  (
        <View style={styles.authHeader}>

            <View style={styles.logo}>
                <Image style={styles.logoImage} source={images.logo.PURE_WHITE} />
                <Text style={styles.logoText}>POCKETMONIE!</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    authHeader: {
        width: "100%",
        height: "45%",
        backgroundColor: colors.PRIMARY,

        flexDirection: "column",

        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        flexDirection: "row",
        alignItems: "center",
    },
    logoImage: {
        width: 60,
        height: 70
    },
    logoText: {
        color: "white",
        fontFamily: fonts.PRIMARY,
        fontWeight: "700",
        fontSize: 25
    },
})
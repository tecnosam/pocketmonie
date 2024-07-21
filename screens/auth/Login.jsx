import {

    StyleSheet,

    Text,
    View,
    TextInput,
    TouchableNativeFeedback,
} from "react-native";

import AuthHeader from "../../components/AuthHeader";

import AppButton from "../../components/Button";

import {fonts, styles as app_styles} from "../../shared";


export default function LoginScreen () {

    return (
        <View style={styles.container}>
            

            <AuthHeader />

            {/* Actual Login form */}
            <View style={styles.main}>

                <Text style={styles.callToAction}>Sign into your account</Text>

                <TextInput
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    style={app_styles.TEXT_INPUT}
                />

                <TextInput
                    placeholder="Password"
                    autoComplete="current-password"
                    style={app_styles.TEXT_INPUT}
                />

                <TouchableNativeFeedback onPress={() => {console.log("Pressed")}}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableNativeFeedback>

                <AppButton
                    text="Log In"
                    handler={() => console.log("Auth Pressed")}
                />

                <View style={styles.alternativeAction}>
                    <Text style={app_styles.TEXT}>Don't Have an account?</Text>
                    <Text style={app_styles.LINK}>Create one</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    alternativeAction: {
        flexDirection: "row",
        gap: 3
    },

    callToAction: {
        fontFamily: fonts.PRIMARY,
        fontWeight: "400",
        fontSize: 20,
    },
    container: {

        flex: 1,
        width: "100%",
        backgroundColor: '#fff',
    },

    main: {
        marginTop: 15,
        marginHorizontal: 20,
        gap: 20
    },

    forgotPassword: {
        alignSelf: "flex-end",
        width: 109,
        fontFamily: fonts.PRIMARY
    }
})
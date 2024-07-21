import {
    StyleSheet,

    TouchableNativeFeedback,
    Text,
    View
} from "react-native";

import {colors, fonts} from "../shared"


const AppButton = ({handler, text, children}) => {

    return (
        <TouchableNativeFeedback onPress={handler}>

            <View style={styles.primary_container}>
                
                {children ? 
                    children : 
                    <Text style={styles.text}>{text}</Text>
                }
                
            </View>

        </TouchableNativeFeedback>
    )
}



const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.PRIMARY,
        fontSize: 20,
        color: "white"
    },
    primary_container: {
        backgroundColor: colors.PRIMARY,
        height: 50,
        borderRadius: 7,

        alignItems: "center",
        justifyContent: "center"
    },
})

export default AppButton;
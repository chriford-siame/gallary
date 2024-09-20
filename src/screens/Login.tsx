import React from "react";
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/colors";

const Login = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar translucent backgroundColor={COLORS.primary} />
            <View style={styles.content}>
            <Text style={{ color: 'black' }}>hello world</Text>
                <View style={styles.content_icon_container}>
                    <Image style={styles.content_icon} src={require('../assets/gallarySample/welcome2.jpg')} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {},
    content: {
    },
    content_icon_container: {
        width: "30%",
        height: "30%",
    },
    content_icon: {
        width: "30%",
        height: "30%",
    },
})

export default Login;

import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import COLORS from "../constants/colors";

const WIDTH = Dimensions.get("screen")
const Home = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar translucent backgroundColor={COLORS.primary} />
            <View style={styles.content_container}>
                <Image style={styles.content_image} source={require('../assets/gallarySample/welcome2.jpg')} />
                <View style={styles.content_head_text_container}>
                    <Text style={styles.content_head_text}>
                        {/* GoDrive */}
                        XGallary
                    </Text>
                    <Text style={{color: COLORS.secondary}}>Organize files that matter to you without</Text>
                    <Text style={{color: COLORS.secondary}}>worrying about security</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('login')}>
                    <View style={styles.footer_button}>
                        <Text style={styles.footer_button_text}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: COLORS.white },
    content_container: {
        flex: 1,
        alignItems: 'center',
        top: 60,
    },
    content_image: {
        width: '65%',
        height: '35%',
        overflow: 'hidden',
        borderRadius: 220,
        marginLeft: 20,
    },
    content_head_text_container: {justifyContent: 'center',alignItems: 'center'},
    content_head_text: {
        paddingBottom: 30,
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        color: 'dodgerblue'
    },
    
    footer: { justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
    footer_button: {
        backgroundColor: COLORS.primary,
        width: '50%',
        cursor: 'pointer',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    footer_button_text: {
        fontSize: 18,
        color: COLORS.white
    },
})
export default Home;
import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TextInput,
    Button,
} from "react-native";
import COLORS from "../../constants/colors";

const { width, height } = Dimensions.get("screen")
const screen_height = height;

const PasswordReset = ({ navigation }: any) => {
    const [userEmail, setUserEmail] = useState<string>('')
    const goToHome = () => {
        navigation.navigate('Home')
    }
    const goToLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={{ 
            flex: 1, 
            top: 20, 
            backgroundColor: 'rgba(10, 10, 10, 0.2)', 
        }}>
            <View style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 20,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <View>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}>Reset Password</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email address"
                        value={userEmail}
                        onChangeText={(text) => setUserEmail(text)}
                    />
                    
                    <View style={styles.submitButton}>
                        <Button
                            title="Submit"
                            color={'green'}
                        />
                    </View>
                    <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress={goToHome}
                    >
                        <Text style={styles.navigationText}>
                            Home
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        width: width - 40,
        marginTop: 10,
        backgroundColor: COLORS.white,
        textAlign: 'center',
        fontSize: 20,
    },
    navigationText: {
        fontSize: 14, 
        color: 'darkblue',
        top: 20,
        alignSelf: 'center'
    },
    submitButton: {
        top: 10,
    }
})
export default PasswordReset;
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
interface UserInterface {
    identifier: string
    password: any
}
const Login = ({ navigation }: any) => {
    const [userData, setUserData] = useState<UserInterface>({
        identifier: '',
        password: '',
    })
    const goToHome = () => {
        navigation.navigate('home')
    }
    const goToRegister = () => {
        navigation.navigate('signup')
    }
    const goToResetPassword = () => {
        navigation.navigate('password_reset')
    }
    return (
        <SafeAreaView style={{ 
            flex: 1, 
            top: 0
        }}>
            <View style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 20,
                top: 100,
                flexDirection: 'column',

            }}>
                <View>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: COLORS.secondary,
                        textAlign: 'center',
                        paddingBottom: 20
                    }}>
                        Login
                    </Text>
                </View>
                <View style={{
                    flexDirection: "column",
                    gap: 10,
                }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username or email"
                        value={userData.identifier}
                        onChangeText={(text) => setUserData({...userData, identifier: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="password"
                        value={userData.password}
                        onChangeText={(text) => setUserData({...userData, password: text})}
                        secureTextEntry
                    />
                    <View style={styles.submitButton}>
                        <Button
                            title="Login"
                            color={'green'}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        top: 15,
                        paddingHorizontal: 5,
                    }}>
                        <TouchableOpacity 
                            activeOpacity={0.5}
                            onPress={goToResetPassword}
                        >
                            <Text style={styles.navigationText}>forgot password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            activeOpacity={0.5}
                            onPress={goToRegister}
                        >
                            <Text style={styles.navigationText}>create account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        color: COLORS.secondary,
        textAlign: 'left',
        fontSize: 20,
        paddingHorizontal: 10,
    },
    navigationText: {
        fontSize: 14, 
        color: 'darkblue',
    },
    submitButton: {
        top: 10,
    }
})
export default Login;
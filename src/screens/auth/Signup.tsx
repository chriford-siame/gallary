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
    username: string
    email: string
    password2: string
    password: any
}
const Signup = ({ navigation }: any) => {
    const [userData, setUserData] = useState<UserInterface>({
        username: '',
        email: '',
        password: '',
        password2: '',
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
                        Signup
                    </Text>
                </View>
                <View style={{
                    flexDirection: "column",
                    gap: 10,
                }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={userData.username}
                        onChangeText={(text) => setUserData({...userData, username: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={userData.email}
                        onChangeText={(text) => setUserData({...userData, email: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="password"
                        value={userData.password}
                        onChangeText={(text) => setUserData({...userData, password: text})}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="re-enter password"
                        value={userData.password2}
                        onChangeText={(text) => setUserData({...userData, password2: text})}
                        secureTextEntry
                    />
                    <View style={styles.submitButton}>
                        <Button
                            title="Signup"
                            color={COLORS.primary}
                        />
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        top: 15,
                        paddingHorizontal: 5,
                    }}>
                        <TouchableOpacity 
                            activeOpacity={0.5}
                            onPress={goToResetPassword}
                        >
                            <Text style={styles.navigationText}>Already have an account?</Text>
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
export default Signup;
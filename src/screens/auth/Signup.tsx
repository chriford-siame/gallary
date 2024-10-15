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
    password: string
    confirmPassword: string
}
const Register = ({ navigation }: any) => {
    const [userData, setUserData] = useState<UserInterface>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const goToHome = () => {
        navigation.navigate('home')
    }
    const goToLogin = () => {
        navigation.navigate('login')
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
                    }}>Register</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={userData.username}
                        onChangeText={(text) => setUserData({...userData, username: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email address"
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
                        placeholder="confirm password"
                        value={userData.confirmPassword}
                        onChangeText={(text) => setUserData({...userData, confirmPassword: text})}
                        secureTextEntry
                    />
                    <View style={styles.submitButton}>
                        <Button
                            title="Submit"
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
                            onPress={goToLogin}
                        >
                            <Text style={styles.navigationText}>already have an account?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            activeOpacity={0.5}
                            onPress={goToHome}
                        >
                            <Text style={styles.navigationText}>Home</Text>
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
export default Register;

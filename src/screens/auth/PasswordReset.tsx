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
    email: string
}
const PasswordReset = ({ navigation }: any) => {
    const [userData, setUserData] = useState<UserInterface>({
        email: '',
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
                        Forgot Password
                    </Text>
                </View>
                <View style={{
                    flexDirection: "column",
                    gap: 10,
                }}>
                    <TextInput
                        style={{...styles.input, color: 'black'}}
                        placeholder="email"
                        value={userData.email}
                        onChangeText={(text) => setUserData({...userData, email: text})}
                    />
                    
                    <View style={styles.submitButton}>
                        <Button
                            title="Reset"
                            color={COLORS.primary}
                        />
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
export default PasswordReset;
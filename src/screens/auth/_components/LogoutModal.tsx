import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Modal,
    Text,
    Image,
    ActivityIndicator
} from "react-native";
import COLORS from "../../../constants/colors";

const LogoutModal = (props: any) => {
    const [modalStatus, setModalStatus] = useState(props.modal_status);
    const [isLoading, setIsLoading] = useState(props.modal_status);
    
    return (
        <Modal
            visible={modalStatus}
            transparent
            onRequestClose={() => setModalStatus(false)}
            >
            <View style={styles.modal}>
                <View style={styles.modal_content}>
                    <View style={styles.modal_header}>
                        <Text style={styles.mediam_text}>text here</Text>
                    </View>
                    
                    <View style={styles.modal_footer}>
                        <Text style={styles.mediam_text} onPress={() => setModalStatus(false)}>close modal</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default LogoutModal;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#00000099',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_content: {
        width: '90%',
        backgroundColor: COLORS.white,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    modal_header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(110, 50, 200, 0.8)',
        width: '100%',
    },
    mediam_text: {
        color: COLORS.dark,
        fontSize: 18,
        fontFamily: 'AbhayaLibre-Medium',
    },
    modal_footer: {},
    image: {
        top: 2,
        width: '99%',
        height: '80%',
    },
})

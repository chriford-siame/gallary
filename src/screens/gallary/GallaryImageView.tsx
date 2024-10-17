import { Dimensions, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import COLORS from "../../constants/colors"
import STACKS from "../../constants/tech_stacks"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IMAGES from "../../constants/images";
import FolderList from "./components/FolderList";

const { width, height } = Dimensions.get('screen');
const GallaryImageView = ({ navigation, route }: any) => {
    const data = route; // keys: [name, key, params]
    const item = route.params;
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar translucent backgroundColor={COLORS.primary} />
            <View style={styles.body}>
                <FolderList />
                <View style={{ padding: 5, top: 20 }}>
                    <TouchableOpacity style={styles.card} activeOpacity={.7} onPress={() => navigation.navigate('gallary')}>
                        <Image source={item.image} style={styles.body_gallary} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4 }}>
                    <Text style={{ fontSize: 12 }}>posted:</Text>
                    <Text style={{ fontSize: 12 }}>10th Aug, 2024</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{ color: 'black' }}>
                    <Icon name="upload" size={20} color={'white'} />
                </Text>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: COLORS.white },
    head: {
        top: 10, borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 15,
        elevation: 0.8
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
        paddingHorizontal: 0
    },
    body_gallary: {
        width: width / 1.05,
        height: height / 3,
        borderRadius: 10
    },
    footer: {
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.primary,
        position: 'absolute',
        bottom: 10,
        right: 10,
        paddingHorizontal: 9,
        borderRadius: 100
    },

    card: {
        borderRadius: 5,
        padding: 20,
    },
})

export default GallaryImageView;
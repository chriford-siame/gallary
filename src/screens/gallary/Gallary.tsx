import { Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import COLORS from "../../constants/colors"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IMAGES from "../../constants/images";
import FolderList from "./components/FolderList";

const { width } = Dimensions.get('screen');
const Gallary = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar translucent backgroundColor={COLORS.primary} />
            <View style={styles.body}>
                <FolderList />
                <FlatList
                    horizontal={false}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={IMAGES}
                    style={{ top: 10, borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 25, width: width }}
                    renderItem={({ item }) => (
                        <View style={{ padding: 5 }}>
                            <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => navigation.navigate("gallary_image_view", item)}>
                                <Image source={item.image} style={styles.body_gallary} />
                            </TouchableOpacity>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4}}>
                                <Text style={{fontSize: 12}}>posted:</Text>
                                <Text style={{fontSize: 12}}>10th Aug, 2024</Text>
                            </View>
                        </View>
                    )}
                />
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
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
        paddingHorizontal: 0
    },
    body_gallary: {
        width: 170,
        height: 140,
        borderRadius: 10,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
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
        backgroundColor: COLORS.light,
        borderRadius: 5,
    },
})

export default Gallary;

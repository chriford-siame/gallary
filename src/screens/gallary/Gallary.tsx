import { Dimensions, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import COLORS from "../../constants/colors"
import STACKS from "../../constants/tech_stacks"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IMAGES from "../../constants/images";

const { width } = Dimensions.get('screen');
const Gallary = () => {
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar translucent backgroundColor={COLORS.primary} />
            <View style={styles.body}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={STACKS}
                    style={styles.head}
                    renderItem={({ item }) => (
                        <View style={{ padding: 10, display: 'flex', justifyContent: 'center', alignContent: 'center', backgroundColor: COLORS.light, margin: 5, borderRadius: 10 }}>
                            <Icon size={20} name="folder" color={'dodgerblue'} />
                            <Text style={{ color: COLORS.white }}>{item.language}</Text>
                        </View>
                    )}
                />
                {/* <ScrollView> */}
                <FlatList
                    horizontal={false}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={IMAGES}
                    style={{ top: 10, borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 25, width: width }}
                    renderItem={({ item }) => (
                        <View style={{ padding: 5 }}>
                            <View style={styles.card}>
                                <Image source={item.image} style={styles.body_gallary} />
                            </View>
                        </View>
                    )}
                />
                {/* </ScrollView> */}
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
        width: 170,
        height: 140,
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
        backgroundColor: COLORS.light,
        borderRadius: 5,
    },
})

export default Gallary;
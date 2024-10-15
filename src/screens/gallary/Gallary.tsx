import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import COLORS from "../../constants/colors"
import STACKS from "../../constants/tech_stacks"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
                    style={{ top: 10, borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 25 }}
                    renderItem={({ item }) => (
                        <View style={{ padding: 10 }}>
                            <Text style={{ color: COLORS.dark }}>{item.language}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.footer}>
                <Text style={{ color: 'black' }}>
                    <Icon name="download" size={20} color={'white'} />
                </Text>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: COLORS.white },
    head: {},
    body: {
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    footer: {
        // height: 20,
        backgroundColor: COLORS.light,
        position: 'absolute',
        bottom: 10,
        right: 10,
        paddingHorizontal: 9,
        borderRadius: 100
    },
})

export default Gallary;
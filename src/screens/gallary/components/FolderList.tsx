import { FlatList, StyleSheet, Text, View } from "react-native"
import STACKS from "../../../constants/tech_stacks"
import { Icon } from "react-native-vector-icons/Icon"
import COLORS from "../../../constants/colors"


const FolderList = () => {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={STACKS}
            style={styles.head}
            renderItem={({ item }) => (
                <View style={{ padding: 20, display: 'flex', justifyContent: 'center', alignContent: 'center', backgroundColor: COLORS.light, margin: 5, borderRadius: 10 }}>
                    <Icon size={30} name="folder" color={'dodgerblue'} />
                    <Text style={{ color: COLORS.secondary }}>{item.language}</Text>
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: COLORS.white },
    head: {
        top: 10, borderBottomColor: 'blue', borderBottomWidth: 1, paddingBottom: 15,
        elevation: 0.8
    },
});
export default FolderList;
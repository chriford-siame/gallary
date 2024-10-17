import { FlatList, StyleSheet, Text, View } from "react-native"

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import FOLDERS from "../../../constants/folders"
import COLORS from "../../../constants/colors"

const FolderList = () => {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={FOLDERS}
            style={styles.head}
            renderItem={({ item }) => (
                <View style={
                    {
                        padding: 20,
                        display: 'flex',
                        justifyContent: 'center',
                        elevation: 0.8,
                        alignContent: 'center',
                        backgroundColor: COLORS.light,
                        margin: 5,
                        borderRadius: 10,
                    }}>
                    <Icon size={30} name="folder" color={'dodgerblue'} />
                    <Text style={{ color: COLORS.secondary }}>{item.name}</Text>
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: COLORS.white },
    head: {
        top: 10, borderBottomColor: COLORS.white, borderTopColor: COLORS.white, borderBottomWidth: 1, paddingBottom: 15,
    },
});
export default FolderList;
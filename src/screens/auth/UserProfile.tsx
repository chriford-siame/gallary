import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Image,
    FlatList,
    Dimensions,
    ScrollView,
    TouchableHighlight,
} from "react-native";
import STACKS from "../../constants/folders";
import COLORS from "../../constants/colors";

const { width } = Dimensions.get('screen')
const UserProfile = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{backgroundColor: '#656565C6', flex: 0.528}}>
            <StatusBar translucent backgroundColor='rgba(110,50,200,0.8)' />
            <View style={{
                top: 60,
                paddingHorizontal: 20,
            }}>
                <View style={styles.headerSection}>
                    <View>
                        <View>
                            <Image
                                source={require('../../assets/gallarySample/welcome.jpg')}
                                style={styles.image}
                                />
                        </View>
                        <Text style={{bottom: 25, left: 90, color: 'dodgerblue'}}>edit</Text>
                    </View>
                    <View style={{ paddingLeft: 50 }}>
                        <Text style={styles.mdtext}>Name: James Bond</Text>
                        <Text style={styles.mdtext}>Position: Fullstack</Text>
                        <Text style={styles.mdtext}>Nationality: Zambia</Text>
                    </View>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{ fontSize: 20, paddingVertical: 10, color: '#000000' }}>Skills</Text>
                        <TouchableHighlight activeOpacity={0.8}>
                            <View style={{ backgroundColor: 'green', paddingHorizontal: 15, borderRadius: 5, marginVertical: 10 }}>
                                    <Text style={{ fontSize: 20, paddingVertical: 2, color: 'white' }}>+</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        data={STACKS}
                        style={{ top: 10, borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 25 }}
                        renderItem={({ item }) => (
                            <View style={styles.stackCard}>
                                <Text style={{ fontSize: 16, alignSelf: 'center' }}>{item.language}</Text>
                                <View style={styles.circleBg}>
                                </View>
                            </View>
                        )}
                    />
                    <View style={{
                        top: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            backgroundColor: COLORS.light,
                            padding: 10,
                            borderRadius: 10,
                        }}>
                            <Text style={{ fontSize: 20, alignSelf: 'center' }}>Resumes</Text>
                            <View style={{ ...styles.circleBg, backgroundColor: 'rgba(110,50,200,0.8)' }}>
                                <Text style={{
                                    padding: 8,
                                    paddingHorizontal: 13,
                                    color: COLORS.white,
                                }}>3</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: COLORS.light,
                            padding: 10,
                            borderRadius: 10,
                        }}>
                            <Text style={{ fontSize: 20, alignSelf: 'center' }}>Paid</Text>
                            <View style={{ ...styles.circleBg, backgroundColor: '#19B907' }}>
                                <Text style={{
                                    padding: 8,
                                    paddingHorizontal: 18,
                                    color: COLORS.white,
                                }}>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={{
                        top: 150,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.primary,
                        borderRadius: 10,
                    }}>
                            <Text style={{
                                ...styles.mdtext, 
                                alignSelf: 'center',
                                color: 'white',
                                bottom: 5,
                            }}>update details</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerSection: {
        flexDirection: 'row',
        paddingRight: 50,
        paddingBottom: 5,
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
    },
    circleBg: {
        backgroundColor: 'rgba(110,50,200,0.8)',
        width: 'auto',
        marginHorizontal: 25,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderColor: COLORS.light,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 80,
    },
    mdtext: {
        fontSize: 18,
        paddingTop: 10,
        color: '#000000'
    },
    stackCard: {
        width: width / 3,
        backgroundColor: COLORS.light,
        marginRight: 20,
        paddingTop: 5,
        padding: 20,
        borderRadius: 10,
    }
})

export default UserProfile;
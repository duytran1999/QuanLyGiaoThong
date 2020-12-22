import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions, Alert, Image, ImageBackground, FlatList } from 'react-native'
import { FirebaseApp } from '../api/firebase/FireBaseConfig'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
let WIDTH_DEVICE = Dimensions.get('window').width;

const listOfFunctions = [
    {
        id: '1',
        icon: require('../assets/icons/security-camera.png'),
        color: "#E54242",
        name: "Camera Giao Thông"
    },
    {
        id: '2',
        icon: require('../assets/icons/exclamation.png'),
        color: "#25B54D",
        name: "Phán Ánh"
    },
    {
        id: '3',
        icon: require('../assets/icons/project-management.png'),
        color: "#5A8DA9",
        name: "Quản Lí Phương Tiện"
    },
    {
        id: '4',
        icon: require('../assets/icons/search.png'),
        color: "#1E2A93",
        name: "Tra Cứu Thông Tin"
    },
    {
        id: '5',
        icon: require('../assets/icons/editing.png'),
        color: "#E7A704",
        name: "Đăng Kí"
    },
]

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTxt: ""
        }
    }
    signOut() {
        FirebaseApp.auth().signOut().then(() => { this.props.navigation.navigate("SignIn") })
    }
    render() {
        return (
            <ImageBackground
                source={require("../assets/images/backgroud.jpg")}
                style={{
                    flex: 1,
                    resizeMode: "cover",
                }}
            >
                <View>
                    <View style={{
                        backgroundColor: "#E74C3C", paddingTop: 20,
                        paddingHorizontal: 10, height: 120
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={()=>this.signOut()}>
                                <FontAwesome5
                                    name={"bars"}
                                    size={35}
                                    color={"white"}
                                />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={{ color: 'white', fontSize: 13 }}>
                                    Xin Chào,
                                </Text>
                                <Text style={{ color: 'white', fontSize: 20 }}>
                                    Trần Bảo Duy
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                                backgroundColor: 'white', height: 45, paddingHorizontal: 10, borderRadius: 10
                            }}>
                                <TextInput
                                    placeholder={"Tìm kiếm thông tin"}
                                    value={this.state.searchTxt}
                                    onChangeText={(searchTxt) => this.setState({ searchTxt })}
                                />
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/icons/microphone.png')}
                                        style={{ width: 35, height: 35 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <FlatList
                            data={listOfFunctions}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            renderItem={({ item, index }) => (
                                <View style={{
                                    width: WIDTH_DEVICE / 2 - 20, height: 120,
                                    backgroundColor: item.color,
                                    padding: 10, borderRadius: 20, margin: 10
                                }}>
                                    <Image
                                        source={item.icon}
                                        style={{ height: 45, width: 45, marginBottom: 10 }}
                                    />
                                    <Text style={{ fontWeight: '800', color: 'white', fontSize: 15 }}>
                                        {item.name}
                                    </Text>
                                </View>
                            )}

                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}


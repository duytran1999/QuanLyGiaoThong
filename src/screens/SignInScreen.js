import React, { Component } from 'react'
import { View, KeyboardAvoidingView, TextInput, Alert, Text, Platform, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ImageBackground } from 'react-native';

import { FirebaseApp } from '../api/firebase/FireBaseConfig'
export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _userName: "vb@gmail.com",
            _passWord: "123456",
        }
    }
    goToSignUpScreen() {
        this.props.navigation.navigate("SignUp")
    }
    
    signIn() {
        let { _userName, _passWord } = this.state;

        if (_userName.length == 0 || _passWord.length == 0) {
            Alert.alert(
                "Thông Báo",
                "Vui Lòng Nhập Đầy Đủ Thông Tin.",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            )
        }
        else {
            FirebaseApp.auth().signInWithEmailAndPassword(_userName, _passWord)
                .then(() => {
                    this.props.navigation.navigate('Home')
                })
                .catch(function (e) {
                    console.log(e.code + "----" + e.message);
                    if (e.code === "auth/user-not-found") {
                        Alert.alert(
                            "Thông Báo",
                            "Tài khoản không tồn tại!",
                            [
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ],
                            { cancelable: false }
                        )
                    } else if (e.code === "auth/wrong-password") {
                        Alert.alert(
                            "Thông Báo",
                            "Tên đăng nhập hay mật khẩu không đúng. Vui Lòng Kiểm Tra Lại!",
                            [
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ],
                            { cancelable: false }
                        )
                    }


                })
        }
    }
    render() {
        let { _userName, _passWord } = this.state
        return (
            <ImageBackground
                source={require("../assets/images/backgroud.jpg")}
                style={{
                    flex: 1,
                    resizeMode: "cover",
                }}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: '800' }}>
                                    Chào mừng bạn đã trở lại
                                </Text>
                            </View>

                            <View>
                                <Text style={{ fontSize: 14, fontStyle: 'italic' }}>
                                    Hãy đăng nhập để sử dụng ứng dụng
                                </Text>
                            </View>

                            <View style={{ marginTop: 30, }}>
                                <TextInput
                                    placeholder={"Email / CMND"}
                                    onChangeText={(_userName) => this.setState({ _userName })}
                                    value={_userName}
                                    style={{ borderWidth: 1, height: 40, width: 300, paddingHorizontal: 10, borderRadius: 5, backgroundColor: '#ecf0f1', borderColor: "#ecf0f1" }}
                                />

                                <TextInput
                                    placeholder={"Mật Khẩu"}
                                    onChangeText={(_passWord) => this.setState({ _passWord })}
                                    value={_passWord}
                                    style={{ borderWidth: 1, height: 40, width: 300, paddingHorizontal: 10, borderRadius: 5, marginTop: 10, backgroundColor: '#ecf0f1', borderColor: "#ecf0f1" }}
                                />
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <TouchableOpacity onPress={() => this.signIn()}>
                                    <View style={{ height: 40, width: 300, alignItems: 'center', justifyContent: 'center', backgroundColor: '#78e08f', borderRadius: 5 }}>
                                        <Text style={{ fontSize: 15, fontWeight: '600', color: 'white' }}>
                                            Đăng Nhập
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.goToSignUpScreen()}>
                                    <View style={{
                                        height: 40, width: 300, alignItems: 'center', justifyContent: 'center',
                                        backgroundColor: 'white', borderRadius: 5, marginTop: 10,
                                        borderColor: '#78e08f', borderWidth: 2
                                    }}>
                                        <Text style={{ fontSize: 15, fontWeight: '600', color: '#78e08f' }}>
                                            Đăng Ký
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}


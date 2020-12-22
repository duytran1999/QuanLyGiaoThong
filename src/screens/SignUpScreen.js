import React, { Component } from 'react'
import { View, KeyboardAvoidingView, TextInput, Alert, Text, Platform, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ImageBackground } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { SignUpRequest } from '../api/firebaseAPI/index'

import { FirebaseApp } from '../api/firebase/FireBaseConfig'
export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _cmnd: "1",
            _email: "vb@gmail.com",
            _hoten: "vb",
            _passWord: "123456",
            _confirmPassWord: "123456"

        }
    }
    goToSignUpScreen() {
        this.props.navigation.navigate("SignUp")
    }
    signUp() {
        let { _cmnd, _email, _hoten, _passWord, _confirmPassWord } = this.state;
        if (_cmnd.length == 0 || _email.length == 0 || _hoten.length == 0 || _passWord.length == 0 || _confirmPassWord.length == 0) {
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
            if (_passWord !== _confirmPassWord) {
                Alert.alert(
                    "Thông Báo",
                    "Mật Khẩu Vừa Nhập Không Khớp.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                )
            }
            else {
                FirebaseApp.auth()
                    .createUserWithEmailAndPassword(_email, _passWord)
                    .then(() => {
                        this.props.navigation.navigate('Home')
                    })
                    .catch(function (e) {
                        if (e.code == "auth/email-already-in-use") {
                            Alert.alert(
                                "Thông Báo",
                                "Tài Khoản Đã Tồn Tại.",
                                [
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                ],
                                { cancelable: false }
                            )
                        }
                        else if (e.code == "auth/weak-password") {
                            Alert.alert(
                                "Thông Báo",
                                "Mật Khẩu Phải Có Ít Nhất 6 Kí Tự.",
                                [
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                ],
                                { cancelable: false }
                            )
                        }
                    })
            }
        }

    }

    render() {
        let { _cmnd, _email, _hoten, _passWord, _confirmPassWord } = this.state
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
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                            <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <FontAwesome5
                                        name={"long-arrow-alt-left"}
                                        size={40}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }} >
                                <Text >
                                    Điền đầy đủ và chính xác các thông tin cá nhân
                                </Text>
                            </View>

                            <View style={{ alignItems: 'center', marginTop: 20 }}>
                                <TextInput
                                    placeholder={"CMND / SDT"}
                                    onChangeText={(_cmnd) => this.setState({ _cmnd })}
                                    value={_cmnd}
                                    style={{ borderWidth: 1, height: 40, width: 300, paddingHorizontal: 10, borderRadius: 5, backgroundColor: '#ecf0f1', borderColor: "#ecf0f1", marginBottom: 10 }}
                                />
                                <TextInput
                                    placeholder={"Email"}
                                    onChangeText={(_email) => this.setState({ _email })}
                                    value={_email}
                                    style={{ borderWidth: 1, height: 40, width: 300, paddingHorizontal: 10, borderRadius: 5, backgroundColor: '#ecf0f1', borderColor: "#ecf0f1", marginBottom: 10 }}
                                />
                                <TextInput
                                    placeholder={"Họ Tên "}
                                    onChangeText={(_hoten) => this.setState({ _hoten })}
                                    value={_hoten}
                                    style={{ borderWidth: 1, height: 40, width: 300, paddingHorizontal: 10, borderRadius: 5, backgroundColor: '#ecf0f1', borderColor: "#ecf0f1", marginBottom: 10 }}
                                />
                                <TextInput
                                    placeholder={"Mật Khẩu"}
                                    onChangeText={(_passWord) => this.setState({ _passWord })}
                                    value={_passWord}
                                    style={{ borderWidth: 1, height: 40, width: 300, paddingHorizontal: 10, borderRadius: 5, backgroundColor: '#ecf0f1', borderColor: "#ecf0f1", marginBottom: 10 }}
                                />
                                <TextInput
                                    placeholder={"Nhập Lại Mật Khẩu"}
                                    onChangeText={(_confirmPassWord) => this.setState({ _confirmPassWord })}
                                    value={_confirmPassWord}
                                    style={{ borderWidth: 1, height: 40, width: 300, paddingHorizontal: 10, borderRadius: 5, backgroundColor: '#ecf0f1', borderColor: "#ecf0f1", marginBottom: 10 }}
                                />
                            </View>
                            <View style={{ alignItems: 'center', marginTop: 20 }}>
                                <TouchableOpacity onPress={() => this.signUp()}>
                                    <View style={{ height: 40, width: 300, alignItems: 'center', justifyContent: 'center', backgroundColor: '#78e08f', borderRadius: 5 }}>
                                        <Text style={{ fontSize: 15, fontWeight: '600', color: 'white' }}>
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


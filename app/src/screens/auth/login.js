import React, { Component } from 'react'
import {StyleSheet, Text, View, Image, TextInput,Button,Alert,SafeAreaView,KeyboardAvoidingView,TouchableOpacity,AsyncStorage} from 'react-native'
import {connect} from 'react-redux';
class login extends Component {
    state = {
        grant_type: 'password',
        client_secret: '0oMs7a8PdUb0C35sn3itPZhqJD9ar0L1gcaE0m2m',
        client_id: 3,
        username: '',
        password: '',
    };
    onButtonPress(){
        const host = this.props.host;
        return fetch(host+'oauth/token',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                let token =  "access_token";
                if (responseJson.hasOwnProperty(token)){
                    this.props.changeAccessToken(responseJson.access_token);
                    fetch(host+'/api/user',{
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer '+responseJson.access_token
                        },
                    }).then((responsea) => responsea.json())
                        .then((respon)=>{
                            console.log(respon);
                            AsyncStorage.multiSet([['group', respon.blood_group], ['name', respon.name],['contact', respon.email],['loggedIn','true']], () => {
                                this.props.changeLogged(true);
                            });
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                }else {
                    Alert.alert("Wrong credential");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View>
                    <Image
                        style={{width: 100, height: 100}}
                        source={require('../../../assets/icon.png')}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder={'Contact Number'}
                        style={styles.input}
                        returnKeyType={'next'}
                        onChangeText={username => this.setState({username})}
                        value={this.state.username}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder={'Password'}
                        secureTextEntry
                        returnKeyType={'go'}
                        style={styles.input}
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                    />
                </View>
                <View style={styles.padding}>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginRight:15,color:'#aeaeae'}}>
                            Don't have account ?
                        </Text>
                        <Text
                            onPress={() => this.props.navigation.navigate('Register')}
                            style={styles.top}>Sign Up</Text>
                    </View>
                </View>
                <View style={styles.facebookLogin}>
                    <Button
                        title="Sign In"
                        color="#ab47bc"
                        onPress={this.onButtonPress.bind(this)}
                    />
                </View>

            </KeyboardAvoidingView>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        changeAccessToken : (value) => {dispatch({type:'CHANGE_TOKEN',token: value})},
        changeLogged : (value) => {dispatch({type:'LOGIN',logged: value})},
    };

};
const mapStateToProps = state => {
    return {
        accessToken : state.auth.accessToken,
        host: state.auth.host
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    facebookLogin: {
        marginTop: 20,
        width: 300
    },
    input: {
        height:30,
        width: 300,
        padding: 5,
        marginTop: 20,
        marginBottom: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    or: {
        color : '#bebac1',
        marginTop: 10
    },
    top: {
        color: '#5c8fee'
    },
    padding: {paddingTop: 20}
});

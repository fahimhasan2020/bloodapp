import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    Alert,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    ToastAndroid,
    ScrollView
} from 'react-native'
import {connect} from 'react-redux';
import { Container, Header, Content, Picker, Form ,H3} from "native-base";
class search extends Component {
    state = { group: "",countries:[],country:'',zillas:[],zilla:'',srerviceItema:[],result:true};
    onButtonPress(){
        this.setState({result:false})
    };
    async  componentDidMount() {
        let hosta = this.props.host;
        await  fetch(hosta+'api/country',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({countries:responseJson});
                console.log(this.state.countries)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    onValueChange(value) {
        this.setState({
            group: value
        });
    };
    onCountryChanged(value) {
        this.setState({
            country: value
        });
        fetch(this.props.host+'api/zilla/'+value,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({zillas:responseJson});
                let done = this.state.zillas.map( (s, i) => {
                    return <Picker.Item key={i} value={s.id} label={s.name} />
                });
                this.setState({serviceItema:done})
            })
            .catch((error) => {
                console.error(error);
            });
    };
    onZillaChange(value) {
        this.setState({
            zilla: value
        });
    };
    render() {
        let serviceItem = this.state.countries.map( (s, i) => {
            return <Picker.Item key={i} value={s.id} label={s.name} />
        });
        if(this.state.result){
            return (
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#838383',paddingRight:20,paddingTop:12,marginLeft:30}}>
                                Select Blood Group
                            </Text>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={this.state.group}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="-- Select Blood Group --" value="" />
                                <Picker.Item label="O+" value="O+" />
                                <Picker.Item label="A+" value="A+" />
                                <Picker.Item label="B+" value="B+" />
                                <Picker.Item label="AB+" value="AB+" />
                                <Picker.Item label="O-" value="O-" />
                                <Picker.Item label="A-" value="A-" />
                                <Picker.Item label="B-" value="B-" />
                                <Picker.Item label="AB-" value="AB-" />
                            </Picker>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#838383',paddingRight:20,paddingTop:12,marginLeft:30}}>
                                Select Country
                            </Text>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={this.state.country}
                                onValueChange={this.onCountryChanged.bind(this)}
                            >
                                <Picker.Item label="--Select an country--" value="" />
                                {serviceItem}
                            </Picker>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#838383',paddingRight:20,paddingTop:12,marginLeft:30}}>
                                Select Zilla
                            </Text>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={this.state.zilla}
                                onValueChange={this.onZillaChange.bind(this)}
                            >
                                <Picker.Item label="--Select an zilla--" value="" />
                                {this.state.serviceItema}
                            </Picker>
                        </View>
                        <View style={styles.facebookLogin}>
                            <Button
                                title="SEARCH"
                                color="#ab47bc"
                                onPress={this.onButtonPress.bind(this)}
                            />
                        </View>
                    </ScrollView>

                </SafeAreaView>
            )
        }else {
            return (<View style={styles.cont}>
                <Text style={{color:'#adadad'}}>No data found</Text>
            </View>)
        }

    }
}
const mapDispatchToProps = dispatch => {
    return{
        changeAccessToken : (value) => {dispatch({type:'CHANGE_TOKEN',lat: value})},
    };

};
const mapStateToProps = state => {
    return {
        accessToken : state.auth.accessToken,
        host: state.auth.host
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(search);
const styles = StyleSheet.create({
    cont:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    facebookLogin: {
        marginTop: 20,
        width: 300
    },
    input: {
        height:30,
        width: 300,
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
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



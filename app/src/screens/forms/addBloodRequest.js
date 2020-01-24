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
    ToastAndroid
} from 'react-native'
import {connect} from 'react-redux';
import { Container, Header, Content, Picker, Form ,H3, DatePicker} from "native-base";
import bloodrequest from "../directory/bloodrequest";
class addBloodRequest extends Component {
    state = { name: '',contact:'',address:'',group: "",time:new Date()};
    setDates = this.setDate.bind(this);
    static serviceItema = [];
    onButtonPress(){
        console.log(this.state);
        const host = this.props.host;
        return fetch(host+'api/blood',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((response) => ToastAndroid.showWithGravityAndOffset(
                'Data saved',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50,
            ),
                this.setState({name: '',contact:'',address:'',group: "",time:''}),
                console.log(this.props.host))
            .catch((error) => {
                console.error(error);
            });
    };
    onValueChange(value) {
        this.setState({
            group: value
        });
    };
    setDate(newDate) {
        this.setState({ time: newDate });
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <TextInput
                        placeholder={'Contact Number'}
                        style={styles.input}
                        returnKeyType={'next'}
                        onChangeText={contact => this.setState({contact})}
                        value={this.state.contact}
                    />
                    <TextInput
                        placeholder={'Name'}
                        style={styles.input}
                        returnKeyType={'next'}
                        onChangeText={name => this.setState({name})}
                        value={this.state.name}
                    />
                    <TextInput
                        placeholder={'Address'}
                        style={styles.input}
                        returnKeyType={'next'}
                        onChangeText={address => this.setState({address})}
                        value={this.state.address}
                    />
                </View>
                <View style={{flexDirection:"row",alignItems:'flex-start'}}>
                    <DatePicker
                        defaultDate={new Date(2020, 1, 1)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={()=>this.setDates}
                        disabled={false}
                    />
                </View>
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
                <View style={styles.facebookLogin}>
                    <Button
                        title="Save"
                        color="#ab47bc"
                        onPress={this.onButtonPress.bind(this)}
                    />
                </View>
            </SafeAreaView>
        )
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
export default connect(mapStateToProps,mapDispatchToProps)(addBloodRequest);
const styles = StyleSheet.create({
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


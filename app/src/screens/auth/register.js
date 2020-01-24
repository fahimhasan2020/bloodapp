import React, { Component } from 'react'
import {StyleSheet, Text, View, Image, TextInput,Button,Alert,SafeAreaView,KeyboardAvoidingView,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
import { Container, Header, Content, Picker, Form ,H3} from "native-base";
class register extends Component {
    state = { name: '',error_message:'',email:'', password: '',password_confirmation:'',group: "",organizations:[],organization:'',countries:[],country:'',zillas:[],zilla:'',serviceItema:[]};
    onButtonPress(){
        const host = this.props.host;
        if (this.state.password !== this.state.password_confirmation){
            return this.setState({error_message:'Password unmatched'});

        }else{
            fetch(host+'api/findmail',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
                .then((response) => response.json())
                .then((responseJson) => {
                   if(responseJson === 1){
                       return this.setState({error_message:'Account exists'});
                   }else{
                       return fetch(host+'api/provider/register',{
                           method: 'POST',
                           headers: {
                               'Accept': 'application/json',
                               'Content-Type': 'application/json'
                           },
                           body: JSON.stringify(this.state)
                       })
                           .then((response) => response.json())
                           .then((responseJson) => {
                               this.props.navigation.navigate('Login')
                           })
                           .catch((error) => {
                               console.error(error);
                           });
                   }
                })
                .catch((error) => {
                    console.error(error);
                });

        }

    };
  async  componentDidMount() {
        let hosta = this.props.host;
       await  fetch(hosta+'api/organizations',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({organizations:responseJson});
                console.log(this.state.organizations)
            })
            .catch((error) => {
                console.error(error);
            });
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
    onValueChanged(value) {
        this.setState({
            organization: value
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
                this.setState({serviceItema:done});
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
        let serviceItems = this.state.organizations.map( (s, i) => {
            return <Picker.Item key={i} value={s.id} label={s.name} />
        });
        let serviceItem = this.state.countries.map( (s, i) => {
            return <Picker.Item key={i} value={s.id} label={s.name} />
        });
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <H3 style={{color:'red',fontWeight:"bold"}}>Sign up</H3>
                    <TextInput
                        placeholder={'Contact Number'}
                        style={styles.input}
                        returnKeyType={'next'}
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                    />
                    <TextInput
                        placeholder={'name'}
                        style={styles.input}
                        returnKeyType={'next'}
                        onChangeText={name => this.setState({name})}
                        value={this.state.name}
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
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#838383',paddingRight:20,paddingTop:12,marginLeft:30}}>
                        Select organizations
                    </Text>
                    <Picker
                        mode="dropdown"
                        placeholder="Select One"
                        placeholderStyle={{ color: "#2874F0" }}
                        note={false}
                        selectedValue={this.state.organization}
                        onValueChange={this.onValueChanged.bind(this)}
                    >
                        <Picker.Item label="--Select an organization--" value="" />
                        {serviceItems}
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
                <View>
                    <TextInput
                        placeholder={'Password Confirm'}
                        secureTextEntry
                        returnKeyType={'go'}
                        style={styles.input}
                        onChangeText={password_confirmation => this.setState({password_confirmation})}
                        value={this.state.password_confirmation}
                    />
                </View>
                <View>
                    <Text style={{color:'red'}}>{this.state.error_message}</Text>
                </View>
                <View style={styles.padding}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginRight:10}}>
                            Already have an account ?
                        </Text>
                        <Text
                            onPress={() => this.props.navigation.navigate('Login')}
                            style={styles.top}>Sign in</Text>
                    </View>
                </View>
                <View style={styles.facebookLogin}>
                    <Button
                        title="Sign Up"
                        color="red"
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
export default connect(mapStateToProps,mapDispatchToProps)(register);
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

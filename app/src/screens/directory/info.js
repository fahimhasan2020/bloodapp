import React, { Component } from 'react'
import { Text, StyleSheet, View, Button , Linking,Image} from 'react-native'
import {Divider} from "react-native-elements";
import {connect} from "react-redux";
import {H3,Card,Body,CardItem} from 'native-base'


class info extends Component {
    openURL = () => {
        Linking.openURL('https://bizbrainers.com').catch((err) => console.error('An error occurred', err));
    };
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <CardItem>
                        <Body>
                            <Image source={require('../../../assets/curtesylogo.png')} style={{height:50,width:300,marginBottom:10,alignSelf:'center'}} />
                            <Divider style={{backgroundColor:'#eee',width:'100%',marginTop:10,marginBottom:10}} />
                            <Text style={{color:'#cbcbcb'}}>CBDC apps is a non profitable user service apps . This apps has been build by bizbrainers.com. This is version 1.0.0 . Contact us to make your software or apps </Text>
                            <Text onPress={this.openURL.bind(this)} style={{color:'#53afff'}}>Visit us</Text>
                        </Body>
                    </CardItem>
                </Card>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    },
});

const mapDispatchToProps = dispatch => {
    return{
        changeLogged : (value) => {dispatch({type:'LOGOUT',logged: value})},
    };
};
const mapStateToProps = state => {
    return {
        loggedIn:state.auth.loggedIn
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(info);
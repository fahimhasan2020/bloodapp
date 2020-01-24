import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import {Divider} from "react-native-elements";
import {connect} from "react-redux";
import {H3,Card,Body,CardItem} from 'native-base'

class donation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <CardItem>
                        <Body>
                            <H3 style={{color:'#cbcbcb'}}>Donate us</H3>
                            <Divider style={{backgroundColor:'#eee',width:'100%',marginTop:10,marginBottom:10}} />
                            <Text style={{color:'#cbcbcb'}}>CBDC is a non profitable organization . Our purpose is to manage bloods for your need . Please donate us for boosting our activities . </Text>
                            <Text style={{color:'#cbcbcb'}}>Bkash no: +8801711432259</Text>
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

export default connect(mapStateToProps,mapDispatchToProps)(donation);
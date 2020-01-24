import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import {connect} from "react-redux";

class logout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{color:'#cbcbcb'}}> Are you sure to logout? </Text>
                <Button
                    title={'Logout'}
                    color={'red'}
                    style={{margin:20,padding:10,width:400}}
                    onPress={()=>this.props.changeLogged(false)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
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

export default connect(mapStateToProps,mapDispatchToProps)(logout);
import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, Linking, FlatList} from 'react-native'
import {connect} from "react-redux";
import {Badge} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

class central extends Component {
    state={
        dat:[]
    };
    componentDidMount() {
        fetch(this.props.host+'api/coordinators/central', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({dat:responseJson});
                console.log(this.state.dat);
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dat}
                    renderItem={({ item }) =>  <View style={styles.flatList}>
                        <View style={{flex:5}}>
                            <Text style={{color:'#9a9a9a'}}>Name:{item.name}</Text>
                            <Text style={{color:'#9a9a9a'}}>Contact:{item.contact_number}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Icon name="phone"
                                  onPress={()=>{Linking.openURL(`tel:${item.contact_number}`)}}
                                  style={{color:'#ee27df',alignItems:'center',justifyContent:'center',margin:10,marginTop:20}} size={20} />
                        </View>

                    </View>}
                    keyExtractor={item => new Date()+Math.random()}
                />
                <View style={styles.switchButton}>
                    <TouchableOpacity
                        disabled={true}
                        style={styles.oppo}>
                        <Text style={{color:'#eee',fontWeight:"bold"}}>
                            Central
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate("District")}}
                        style={styles.oppa}>
                        <Text style={{color:'#eee',fontWeight:"bold"}}>
                            District
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    oppo: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        width: 100,
        backgroundColor:'white',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    oppa: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        width: 100,
        backgroundColor:'red',
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    switchButton:{
        flexDirection:'row',
        position:"absolute",
        right:'25%',
        left:'25%',
        bottom:50
    },
    flatList:{
        flex:1,
        height:100,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        width:"100%",
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        padding:15,
        paddingLeft:35,
        flexDirection:'row'
    }
});

const mapDispatchToProps = dispatch => {
    return{
        changeLogged : (value) => {dispatch({type:'LOGOUT',logged: value})},
    };
};
const mapStateToProps = state => {
    return {
        loggedIn:state.auth.loggedIn,
        host:state.auth.host
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(central);

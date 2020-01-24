import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, Alert, Linking, FlatList} from 'react-native'
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

class bloodbank extends Component {
    state={
        dat:[],
        refreshing:false
    };
    componentDidMount() {
        fetch(this.props.host+'api/blood/bank', {
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
    content(){
        fetch(this.props.host+'api/blood/bank', {
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
    handleRefresh(){
        this.setState({refreshing:true},
            ()=>{
                this.content(),
                    this.setState({
                        refreshing:false
                    })}
        )
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
                            <Text style={{color:'#9a9a9a'}}>Address:{item.address}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Icon name="phone"
                                  onPress={()=>{Linking.openURL(`tel:${item.contact_number}`)}}
                                  style={{color:'#ee27df',alignItems:'center',justifyContent:'center',margin:10,marginTop:20}} size={20} />
                        </View>

                    </View>}
                    keyExtractor={item => new Date()+Math.random()}
                    onRefresh={()=>this.handleRefresh()}
                    refreshing={this.state.refreshing}
                />
                <View style={styles.switchButton}>
                    <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate("Organization")}}
                        style={styles.oppa}>
                        <Text style={{color:'#eee',fontWeight:"bold"}}>
                            Organizations
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={true}
                        style={styles.oppo}>
                        <Text style={{color:'#eee',fontWeight:"bold"}}>
                            Blood Bank
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
        backgroundColor:'#ab47bc',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
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

export default connect(mapStateToProps,mapDispatchToProps)(bloodbank);

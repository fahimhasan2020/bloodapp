import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity,FlatList,Linking} from 'react-native'
import {Badge} from "native-base";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

class bloodrequest extends Component {
    static navigationOptions = {
        title:'Blood Request',
    };
    state = {
        dat:[],
        refreshing:false
    };
    componentDidMount() {

        fetch(this.props.host+'api/blood', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({dat:responseJson});
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    content(){
        return fetch(this.props.host+'api/blood', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({dat:responseJson});
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    };
    handleRefresh(){
        this.setState({refreshing:true},
        ()=>{
            this.content(),
            this.setState({
            refreshing:false
        })}
        )
    };
    openURL = () => {
        Linking.openURL('https://m.facebook.com/cbdc17/').catch((err) => console.error('An error occurred', err));
    };
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dat}
                    renderItem={({ item }) =>  <View style={styles.flatList}>
                        <View style={{flex:5}}>
                            <Text style={{color:'#9a9a9a'}}>Name:{item.name}</Text>
                            <Text style={{color:'#9a9a9a'}}>Address:{item.address}</Text>
                            <Text style={{color:'#9a9a9a'}}>Time:{item.time}</Text>
                            <Text style={{color:'#9a9a9a'}}>Contact:{item.contact}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Badge style={{backgroundColor:'rgba(238,10,19,0.4)',padding:3,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:'#eee'}}>
                                    {item.group}
                                </Text>
                            </Badge>
                            <Icon name="phone"
                                  onPress={()=>{Linking.openURL(`tel:${item.contact}`)}}
                                  style={{color:'#ee27df',alignItems:'center',justifyContent:'center',margin:10,marginTop:20}} size={20} />
                                  <Icon
                                      onPress={()=>this.openURL()}
                                      size={20}
                                      name={'share-alt-square'} style={{color:'blue',marginLeft:10}} />

                        </View>

                    </View>}
                    keyExtractor={item => new Date()+Math.random()}
                    onRefresh={()=>this.handleRefresh()}
                    refreshing={this.state.refreshing}
                />
                <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate('AddBloodRequest')}}
                    style={styles.oppo}>
                    <Icon name="heartbeat" style={{color:'#eeeeee'}} size={20} />
                </TouchableOpacity>
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
        position: 'absolute',
        width: 50,
        backgroundColor:'#ab47bc',
        borderRadius:25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    flatList:{
        flex:1,
        height:120,
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

export default connect(mapStateToProps,mapDispatchToProps)(bloodrequest);


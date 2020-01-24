import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createAppContainer} from "react-navigation";
import {Container,Header,Body,H3,CheckBox} from "native-base";
import {
    TouchableOpacity,
    TextInput,
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    AsyncStorage,
    ScrollView,
    Alert
} from 'react-native'
import store from "../../store/store";
import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {createSwitchNavigator} from "react-navigation";
import register from "../auth/register";
import forgot from "../auth/forgot";
import reset from "../auth/reset";
import login from "../auth/login";
import todayready from "./todayready";
import bloodrequest from "./bloodrequest";
import central from "./coordinator/central";
import district from "./coordinator/district";
import organization from "./organization";
import editinfo from "../forms/editinfo";
import addreadydonor from "../forms/addreadydonor";
import adddonor from "../forms/adddonor";
import addorganizations from "../forms/addorganizations";
import addbloodbank from "../forms/addbloodbank";
import Icon from 'react-native-vector-icons/FontAwesome'
import search from "../forms/search";
import logout from "./logout";
import bloodbank from "./bloodbank";
import addBloodRequest from "../forms/addBloodRequest";
import about from "./about";
import info from "./info";
import donation from "./donation";
import loader from "../auth/loader";
const lond = async () =>{
    await AsyncStorage.setItem('loggedIn','false')
};
class index extends Component {
    render() {
        if(this.props.loggedIn){
            return <LoggedIn />
        }else{
            return <NonLoggedIn />
        }
    }
}
const mainStack = createStackNavigator({
    Loader:{screen:loader},
    Login:{screen:login},
    Register:{screen:register},
    Forget:{screen:forgot},
    Reset:{screen:reset}
},{
    headerMode:'none',
    initialRouteName:'Loader'
});
const SwitchNavigation = createSwitchNavigator({
    Coordinators:{screen:central},
    District:{screen:district}
});
const SubSwitchNavigation = createSwitchNavigator({
    Organization:{screen:organization},
    BloodBank:{screen:bloodbank}
});
const tab = createMaterialTopTabNavigator({
    TodayReady:{screen:todayready,title:'today ready',swipeEnabled:true},
    BloodRequest:{screen:bloodrequest,title:'Blood Request',swipeEnabled:true},
    Coordinator:{screen:SwitchNavigation,swipeEnabled:true},
    Organization:{screen:SubSwitchNavigation,swipeEnabled:true}
},{
    tabBarOptions: {
        lazy: true,
        scrollEnabled: true,
        labelStyle: {
            fontSize: 12,
            color:'#757575'
        },
        tabStyle: {
            width: 130,
        },
        style: {
            backgroundColor: 'white',
            color:'black'
        },
        indicatorStyle: {
            backgroundColor: '#ab47bc',
        },
    }
});
const SubStack = createStackNavigator({
    HomeScreen:{
        screen:tab,
        navigationOptions:({navigation})=>({
            headerLeft: (
                <TouchableOpacity
                    onPress={()=>{navigation.openDrawer()}}>
                    <Icon name="list" style={{color:'#eeeaee',marginLeft:10}} size={30} />
                </TouchableOpacity>

            ),
            headerRight:( <TouchableOpacity
            onPress={()=>navigation.navigate('Search')}>
                <TextInput
                    onFocus={()=>navigation.navigate('Search')}
                    placeholder={'Search here ...'}
                    style={{borderBottomWidth:1,borderColor:'#ffffff',padding:10,marginRight:10,width:300,marginBottom:5 }}
                />
            </TouchableOpacity>),
            headerStyle:{
                backgroundColor:'#ab47bc'
            }
        })
    },
    EditProfile:{screen:editinfo,navigationOptions:()=>({title:'Edit Profile'})},
    AddReadyDonor:{screen:addreadydonor,navigationOptions:()=>({title:'Add Ready Donor',tintColor:'#eeeeee',activeTintColor:'white'})},
    AddDonor:{screen:adddonor,navigationOptions:()=>({title:'Add donor'})},
    AddOrganization:{screen:addorganizations,navigationOptions:()=>({title:'Add Organizations'})},
    AddBloodBank:{screen:addbloodbank,navigationOptions:()=>({title:'Add Blood Bank'})},
    AddBloodRequest:{screen:addBloodRequest,navigationOptions:()=>({title:'Add Blood Request'})},
    Search:{screen:search,navigationOptions:()=>({title:'Find Donor'})},
    About:{screen:about,navigationOptions:()=>({title:'About'})},
    Info:{screen:info,navigationOptions:()=>({title:'Info'})},
    Donation:{screen:donation,navigationOptions:()=>({title:'Donation'})},
    Logout:{screen:logout,navigationOptions:()=>({title:'Sign Out'})},
},{
    defaultNavigationOptions:()=>({
        headerStyle:{
            backgroundColor:'#ab47bc',
            color:'white'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color:'#eeeeee'
        },
        tintColor:'white'
    })
});
let storeDate = [];
AsyncStorage.multiGet(["name", "contact","group"]).then(response => {
    storeDate = response;
});
class DrawerRoutes extends Component{
    state = {
        ready: false
    };
    render() {
        return(<TouchableOpacity style={styles.drawerButtons}>
                    <Icon name="bullhorn" style={{color:'#959595',marginLeft:10}} size={20} />
                    <Text style={{color:'#959595',marginLeft:15,marginRight:60}}>
                        Ready To Donate?
                    </Text>
                    <CheckBox style={{borderColor:'#ab47bc'}}
                              onPress={() => {this.setState({ready: !this.state.ready})}}
                              checked={this.state.ready}/>
                </TouchableOpacity>);
    }
}

const CustomDrawerDesign = (props)=>(
    <Container>
        <Header style={styles.header}>
            <Body style={{alignItems:'center', flexDirection:'row'}}>
                <View>
                    <H3 style={{color:'white'}}>
                        {storeDate[0][1]}
                    </H3>
                    <Text style={{color:'white'}}>
                        Contact: {storeDate[1][1]}
                    </Text>
                    <Text style={{color:'white'}}>
                        Blood Group: {storeDate[2][1]}
                    </Text>
                </View>
            </Body>
        </Header>
        <ScrollView>
            <DrawerRoutes />
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('EditProfile')}
                style={styles.drawerButtons}>
                <Icon name="user" style={{color:'#959595',marginLeft:10}} size={20} />
                <Text style={{color:'#959595',marginLeft:15}}>
                    Edit Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('AddReadyDonor')}
                style={styles.drawerButtons}>
                <Icon name="thumbs-o-up" style={{color:'#959595',marginLeft:10}} size={20} />
                <Text style={{color:'#959595',marginLeft:15}}>
                    Add Ready Donor
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('AddDonor')}
                style={styles.drawerButtons}>
                <Icon name="user-circle" style={{color:'#959595',marginLeft:10}} size={20} />
                <Text style={{color:'#959595',marginLeft:15}}>
                    Add Donor
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{ToastAndroid.showWithGravityAndOffset(
                    'Only admin can add city',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                );}}
                style={styles.drawerButtons}>
                <Icon name="map-o" style={{color:'#959595',marginLeft:10}} size={20} />
                <Text style={{color:'#959595',marginLeft:15}}>
                    Add city/Upazilla
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{ToastAndroid.showWithGravityAndOffset(
                    'Only admin can cdd coordinator',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                );}}
                style={styles.drawerButtons}>
                <Icon name="ambulance" style={{color:'#959595',marginLeft:10}} size={20} />
                <Text style={{color:'#959595',marginLeft:15}}>
                    Add Coordinator
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('AddOrganization')}
                style={styles.drawerButtons}>
                <Icon name="medkit" style={{color:'#959595',marginLeft:10}} size={20} />
                <Text style={{color:'#959595',marginLeft:15}}>
                    Add Organization
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('AddBloodBank')}
                style={styles.drawerButtons}>
                <Icon name="heartbeat" style={{color:'#959595',marginLeft:10}} size={20} />
                <Text style={{color:'#959595',marginLeft:15}}>
                    Add Blood Bank
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('About')}
                style={styles.drawerButtons}>
                <Icon name="book" style={{color:'#959595',marginLeft:10}} size={20} />
                <Text style={{color:'#959595',marginLeft:15}}>
                    About
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Donation')}
                style={styles.drawerButtons}>
                <Icon name="dollar" style={{color:'#959595',marginLeft:10}} size={20} />
                <Text style={{color:'#959595',marginLeft:15}}>
                    Donation
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Info')}
                style={styles.drawerButtons}>
                <Icon name="info" style={{color:'#959595',marginLeft:10}} size={20} />
                <Text style={{color:'#959595',marginLeft:15}}>
                    Info
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    AsyncStorage.setItem('loggedIn','false').then(response=>{
                        store.dispatch({type:'LOGOUT',logged:false})
                    })
                }}
                style={styles.drawerButtons}>
                <Icon name="power-off" style={{color:'#959595',marginLeft:10}} size={20} />
                <Text style={{color:'#959595',marginLeft:15}}>
                    Logout
                </Text>
            </TouchableOpacity>
        </ScrollView>

    </Container>
);
const drawer = createDrawerNavigator({
    Home:{screen:SubStack}
},{
    contentComponent:CustomDrawerDesign,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
});
const NonLoggedIn = createAppContainer(mainStack);
const LoggedIn = createAppContainer(drawer);
const styles = StyleSheet.create({
header: {
    height:150,
    backgroundColor:'#ab47bc'
},
    drawerButtons:{
    padding:10,
        paddingTop:15,
        paddingBottom:15,
        borderBottomWidth:1,
        borderColor:'#959595',
    flexDirection:'row',
        height: 60
    }
});
const mapDispatchToProps = dispatch => {
    return{
        changeLogged : (value) => {dispatch({type:'LOGOUT',logged: value})},
        changeState : (value) => {dispatch({type:'SETSTATE',stata: value})},
    };
};
const mapStateToProps = state => {
    return {
        loggedIn:state.auth.loggedIn
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(index);
import React, { Component } from 'react'
import {Text, StyleSheet, View, Button, Image, ScrollView} from 'react-native'
import {Card,CardItem,Body,H3} from "native-base"
import {connect} from "react-redux";
import {Divider} from "react-native-elements";

class about extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Card>
                    <CardItem>
                        <Body>
                            <Image source={require('../../../assets/icon.png')} style={{height:150,width:150,marginBottom:10,alignSelf:'center'}} />
                            <H3 style={{color:'#adadad'}}>কক্সবাজার ব্লাড ডোনেটিং ক্লাব" ( একটি অরাজনৈতিক মানবতার স্বেচ্ছাসেবী সংগঠন )</H3>
                            <Divider style={{backgroundColor:'#eee',width:'100%',marginTop:10,marginBottom:10}} />
                            <Text style={{color:'#cbcbcb'}}> করবো মোরা রক্তদান,{"\n"}
                                বাঁচাবো রোগীর প্রাণ।।{"\n"}
                                হাসি মুখে রক্তদান,{"\n"}
                                করে যাবো অবিরাম।{"\n"}
                                এই স্লোগানে কক্সবাজার ব্লাড ডোনেটিং ক্লাব'র পথচলা।{"\n"}
                                আমাদের উদ্দেশ্য এবং লক্ষ্য হবে মহৎ ও সৎ ৷
                            </Text>
                            <Divider style={{backgroundColor:'#eee',width:'100%',marginTop:10,marginBottom:10}} />
                            <H3 style={{color:'#adadad'}}> প্রধান লক্ষ্য ও উদ্দেশ্যঃ</H3>
                            <Divider style={{backgroundColor:'#eee',width:'100%',marginTop:10,marginBottom:10}} />
                            <Text style={{color:'#cbcbcb'}}>
                                ১)অসহায়, সুবিধা বঞ্চিত, দরিদ্র ও অবহেলিত মানুষের সেবা প্রদান।{"\n"}
                                ২)রক্তের অভাবে ভোগা মুমূর্ষু রোগীদের স্বেচ্ছায় রক্তদান করা এবং রক্তদাতা তৈরি করা।{"\n"}

                                ৩)গরিব-মেধাবী শিক্ষার্থীর মাঝে শিক্ষা উপকরণ বিতরণ করা।{"\n"}
                                ৪)এতিম-অসহায়দের মাঝে ঈদবস্ত্র ও শীতবস্ত্র বিতরণ করা।{"\n"}

                                ৫) চিকিৎসা বঞ্চিতদের সাধ্যমত চিকিৎসা সুবিধা প্রদান করা ও দরিদ্র মানুষের পাশে থাকা।{"\n"}
                                ৬) বিবিধ </Text>
                        </Body>
                    </CardItem>
                </Card>

            </ScrollView>
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

export default connect(mapStateToProps,mapDispatchToProps)(about);
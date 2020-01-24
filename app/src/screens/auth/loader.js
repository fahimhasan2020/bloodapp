import React from 'react';
import {AsyncStorage, StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import AnimatedLoader from "react-native-animated-loader";

class loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    async componentDidMount() {
        let valu =   await AsyncStorage.getItem("loggedIn");
        if(valu !== null){
            if(valu === 'true'){
                setTimeout(()=>{
                    this.setState({
                        visible: !this.state.visible
                    });
                    this.props.changeState(true)
                }, 5000);
            }

            else if (valu === 'false'){
                this.props.changeState(false);
                const {navigate} = this.props.navigation;
                setTimeout(()=>{
                    this.setState({
                        visible: !this.state.visible
                    });
                    navigate('Login');
                }, 5000);
            }
        }else{
            AsyncStorage.setItem("loggedIn",'false').then(value => {
            });
        }
    }

    render() {
        const { visible } = this.state;
        return (
            <AnimatedLoader
                visible={visible}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../../../assets/drop.json")}
                animationStyle={styles.lottie}
                speed={1}
            />
        );
    }
}

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

export default connect(mapStateToProps,mapDispatchToProps)(loader);

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
    }
});
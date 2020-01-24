import {AsyncStorage} from "react-native";


const data = {
    'host':'http://blood.fahimhasan.com/',
    'name':'',
    'contact':'',
    'blood_group':'',
    'country':'',
    'zilla':'',
    'city':'',
    'accessToken':'',
    'loggedIn':false,
};

const reducer = (state = data, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                ...state,
                loggedIn: action.logged
            };
        case 'LOGIN':
            return {
                ...state,
                loggedIn: action.logged
            };
        case 'SETSTATE':
            return {
                ...state,
                loggedIn: action.stata
            };
        case 'CHANGE_TOKEN':
            return {
                ...state,
                accessToken: action.token
            };
        default:
            return state;
    }
};
export default reducer;
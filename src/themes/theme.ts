import {DefaultTheme,DarkTheme} from '@react-navigation/native';
import {Colors,DarkColors} from './colors';



export const getAppTheme = ()=>({
    default:{
        Colors,
        NavigationTheme: DefaultTheme 
    },
    dark:{
        Colors:DarkColors,
        NavigationTheme: DarkTheme 
    }
})




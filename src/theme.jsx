import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      background: '#6C6C77',
      blue: '#00ABE7',
      gray: '#6C6C77',
      white: '#FDFDFE',
      black: '#24292E'
    },
    fontStyles: {
        fontFamily: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            web: 'System'
        })
    },
    AppBar: {
        backgroundColor: '#24292e',
        fontSize: 20,
        color: 'white',
        fontFamily: 'System',
        fontWeight: '100'
    },
    cardContainer: {
        height: Platform.OS === 'web' ? 60 : 120,
        width: Platform.OS === 'web' ? '80%' : '90%'
    },
    imageStyle:{
        width: Platform.OS === 'web' ? 150 : 110 ,
        height: Platform.OS === 'web' ? 150 : 110
    }
  };
  
  export default theme;
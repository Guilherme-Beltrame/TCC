import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";


export function Loadin(){
    return(
    <View style={style.container}>
        <LottieView
            source={require('../../assets/loading.json')}
            autoPlay={true}
            loop={true}
        />
    </View>
    );
}

const style = StyleSheet.create({
    container:{
        backgroundColor:"rgba(24,24,24,0.5)",
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
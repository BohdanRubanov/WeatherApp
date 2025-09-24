import { ImageBackground, SafeAreaView } from "react-native";
import { ChoosingPage } from "../../modules/choosing-page/choosing-page";


export default function ChooseCity(){
    return(
        <ImageBackground source={require("../../images/Frame 2.png")} style={{flex: 1}}>
            <SafeAreaView style={{flex:1}}>
                <ChoosingPage></ChoosingPage>
            </SafeAreaView>
        </ImageBackground>   
    )
}
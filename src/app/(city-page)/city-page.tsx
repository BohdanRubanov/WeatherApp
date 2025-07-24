import { SafeAreaView } from "react-native";
import * as cityPage from "../../modules/city-page/city-page";

export default function CityPage(){
    return(
            <SafeAreaView style={{flex:1}}>
                <cityPage.CityPage></cityPage.CityPage>
            </SafeAreaView>
        )
}
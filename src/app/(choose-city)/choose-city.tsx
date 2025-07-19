import { SafeAreaView } from "react-native";
import { CityPage } from "../../modules/choosing-page/choosing-page";


export default function ChooseCity(){
    return(
        <SafeAreaView style={{flex:1}}>
            <CityPage></CityPage>
        </SafeAreaView>
    )
}
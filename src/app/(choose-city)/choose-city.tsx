import { SafeAreaView } from "react-native";
import { ChoosingPage } from "../../modules/choosing-page/choosing-page";


export default function ChooseCity(){
    return(
        <SafeAreaView style={{flex:1}}>
            <ChoosingPage></ChoosingPage>
        </SafeAreaView>
    )
}
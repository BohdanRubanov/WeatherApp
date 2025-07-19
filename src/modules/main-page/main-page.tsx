import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./main-page.styles";
import { useRouter } from "expo-router";



export function MainPage(){
    const router = useRouter()
    const click = ()=>{
        router.push("/choose-city")
    }
    return (
        <View style = {styles.container}>
            <View>
                <Text style = {styles.text}>Welcome to </Text>
                <Text style = {styles.text}>weather app!</Text>
            </View>

            <View>
                <TouchableOpacity style = {styles.button} onPress={click}>
                    <Text>Choose the city</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

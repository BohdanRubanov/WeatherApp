import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./main-page.styles";



export function MainPage(){
    return (
        <View style = {styles.container}>
            <View>
                <Text style = {styles.text}>Welcome to </Text>
                <Text style = {styles.text}>weather app!</Text>
            </View>

            <View>
                <TouchableOpacity style = {styles.button}>
                    <Text>Choose the city</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

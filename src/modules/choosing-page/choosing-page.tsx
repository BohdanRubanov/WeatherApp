import { View, Text, TouchableOpacity, FlatList, Image, ImageBackground } from "react-native";
import { styles } from "./choosing-page.styles";
import { City } from "../city/city";
import { useRouter } from "expo-router";

const cities = ['London', 'Birmingham', 'Manchester', "Dnipro"]
export function ChoosingPage(){
    
    return(
        <View style = {styles.container}>
            <View>
                <Text style = {styles.header}>Choose your city</Text>
            </View>
        <View>
            <FlatList 
                data={cities}
                keyExtractor={(city) => city}
                renderItem={({item}) => {
                    return <City name = {item}></City>
                }} 
            />
            
        </View>
                <ImageBackground source={require("../../images/Frame 2.png")}/>
        </View>
   
    )
}
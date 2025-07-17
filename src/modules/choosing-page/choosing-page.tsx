import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./choosing-page.styles";

export function CityPage(){
    return(
        <View style = {styles.container}>
            <View>
                <Text style = {styles.text}>Choose your city</Text>
            </View>
            <View>
                <TouchableOpacity >
                    <Text>London</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Birmingham</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Manchester</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Liverpool</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Leeds</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Sheffield</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Bristol</Text>
                </TouchableOpacity>
            </View>
        </View>
   
    )
}
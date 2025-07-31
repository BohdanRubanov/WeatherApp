import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./city.styles";

interface CityProps {
    name: string
}

export function City(props: CityProps){
    return(
        <View>
            <TouchableOpacity style = {styles.cityButton}>
                <Text style = {styles.cityText}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./city.styles";
import { useRouter } from "expo-router";

interface CityProps {
    name: string
}

export function City(props: CityProps){
    const router = useRouter()
            const click = ()=>{
                router.push("/city-page")
            }
    return(
        <View>
            <TouchableOpacity style = {styles.cityButton} onPress={click}> 
                <Text style = {styles.cityText}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}
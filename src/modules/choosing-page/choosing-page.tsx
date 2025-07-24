import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./choosing-page.styles";

export function ChoosingPage(){
    return(
        <View style = {styles.container}>
            <View>
                <Text style = {styles.header}>Choose your city</Text>
            </View>
        <View>
            <View>
                <TouchableOpacity style = {styles.cityButton}>
                    <Text style = {styles.cityText}>London</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.cityButton}>
                    <Text style = {styles.cityText}>Birmingham</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.cityButton}>
                    <Text style = {styles.cityText}>Manchester</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.cityButton}>
                    <Text style = {styles.cityText}>Liverpool</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.cityButton}>
                    <Text style = {styles.cityText}>Leeds</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.cityButton}>
                    <Text style = {styles.cityText}>Sheffield</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.cityButton}>
                    <Text style = {styles.cityText}>Bristol</Text>
                </TouchableOpacity>
            </View>
            </View>
            
        </View>
   
    )
}
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./city-page.styles";

export function CityPage (){
    return(
        <View style = {styles.container}> 
            <View>
                <Text style = {styles.header}>London</Text>
                <Text style = {styles.header}>31</Text>
            </View>
            <View>
                <Text>Now</Text>
                <Text>14</Text>
                <Text>15</Text>
                <Text>16</Text>
                <Text>17</Text>
                <Text>18</Text>
            </View>
            <View>
                {/* Здесь должны быть иконки но мы не умеем их импортировать */}
                {/* Здесь должны быть иконки но мы не умеем их импортировать */}
                {/* Здесь должны быть иконки но мы не умеем их импортировать */}
                {/* Здесь должны быть иконки но мы не умеем их импортировать */}
                {/* Здесь должны быть иконки но мы не умеем их импортировать */}
                {/* Здесь должны быть иконки но мы не умеем их импортировать */}
            </View>
            <View>
                <Text>31</Text>
                <Text>31</Text>
                <Text>31</Text>
                <Text>31</Text>
                <Text>31</Text>
                <Text>31</Text>
            </View>
            <View>
                <Text>Today</Text>
                {/* <Icon>Изображение солнца</Icon> */}
                <Text>20</Text>
                {/* <Icon>Изображение линейки температуры</Icon> */}
                <Text>31</Text>
            </View>
            <View>
                <Text>Mon</Text>
                {/* <Icon>Изображение солнца</Icon> */}
                <Text>20</Text>
                {/* <Icon>Изображение линейки температуры</Icon> */}
                <Text>31</Text>
            </View>
        </View>
    )
}
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./city-page.styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";

interface IDescriptionWeather{
    description: string,
    icon: string
}

interface IWeather {
    main: {
        temp: number
    },
    weather: IDescriptionWeather[]
    
}
export function CityPage (){
    const [weather, setWeather] = useState<IWeather>()
    const router = useRouter()
    const params = useLocalSearchParams()
    const onClick = () => {
        router.back()
    }
    useEffect(() => {
        async function getWeather() {
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.name}&appid=6f14d2ef70c57ec3a8bec044269596ee&units=metric`)
                const result = await response.json()
                setWeather(result)
            }catch{
                console.log("error")
            }
        }
        getWeather()
    }, [params.name])
    return(
        <View style = {styles.container}> 
        <TouchableOpacity onPress={onClick}><Text>Back</Text></TouchableOpacity>
            <View>
                <Text style = {styles.header}>{params.name}</Text>
                <Text style = {styles.header}>{weather?.main.temp}</Text>
                <Text style = {styles.header}>{weather?.weather[0].description}</Text>
                <Image source={{uri:`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}} style={{width:100, height: 100}}></Image>
            </View>
            {/* <View> */}
                {/* <Text>Now</Text>
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
            {/* </View> */}
            {/* <View> */}
                {/* <Text>31</Text>
                <Text>31</Text>
                <Text>31</Text>
                <Text>31</Text>
                <Text>31</Text>
                <Text>31</Text>
            </View> */}
            {/* <View>
                <Text>Today</Text> */}
                {/* <Icon>Изображение солнца</Icon> */}
                {/* <Text>20</Text> */}
                {/* <Icon>Изображение линейки температуры</Icon> */}
                {/* <Text>31</Text> */}
            {/* </View>
            <View> */}
                {/* <Text>Mon</Text> */}
                {/* <Icon>Изображение солнца</Icon> */}
                {/* <Text>20</Text> */}
                {/* <Icon>Изображение линейки температуры</Icon> */}
                {/* <Text>31</Text> */}
            {/* </View>  */}
        </View>
    )
}
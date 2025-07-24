import { Stack } from "expo-router";


export default function CityLayout(){
    return(
        <Stack>
            <Stack.Screen name="city-page" options={{
                headerShown: false
            }}/>
        </Stack>
    )
}
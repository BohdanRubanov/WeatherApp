import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="(choose-city)" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="(city-page)" options={{
                headerShown: false
            }}/>
        </Stack>
    )
}
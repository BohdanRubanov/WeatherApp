import { Stack } from "expo-router";


export default function ChoosingLayout(){
    return(
        <Stack>
            <Stack.Screen name="choose-city" options={{
                headerShown: false
            }}/>
        </Stack>
    )
}
import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontFamily: "Quicksand",
        color: "#FFDC52",
        fontSize: 36,
        fontWeight: 700,
    },
    cityButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: "Quicksand",
        color: "#FFFFFF",
        height: 340,
    },
     cityText: {
        fontFamily: "Quicksand",
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: '700',
        padding: 22,
    },

})
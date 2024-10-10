import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "purple"
    },
    formRow:{
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: "purple",
        borderRadius: 5,
        backgroundColor:"#8205CE",
    },
    input:{
        fontSize: 18,
        padding: 10,
        width: "70%",
        color:'white',
    },
})
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center'
    },
    formRow:{
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1.8,
        borderColor: "white",
        borderRadius: 15,
        backgroundColor:"white",
    },
    input:{
        fontSize: 18,
        padding: 10,
        width: "70%",
        color: "black",
        
    },
    icon:{
        fontSize: 28,
        padding: 5,
        color: "white"
    },
    Text:{
        color:'white',
        fontSize: 37.0,
        fontWeight:'bold',
        padding:50,
        alignSelf:'center',
        position:'relative',
        },
    logo:{
        margin:10,
        alignSelf:"center",
       }
})
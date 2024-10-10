import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      
    },
    title:{
        fontSize: 50,
        fontWeight: "bold",
        textAlign: 'center',
        color:"white",
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
        color: "black"
    },
    icon:{
        fontSize: 28,
        padding: 5,
        color: "white"
    },
    text:{
        fontWeight: "semibold",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 50,
        color: "white"
    },

    logo:{
        margin:10,
        alignSelf:"center",
       }
        
})
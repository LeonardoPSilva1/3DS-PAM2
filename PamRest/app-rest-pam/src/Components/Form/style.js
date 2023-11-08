import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#E4EDF7",
        alignItems:'center',
        borderTopLeftRadius:45,
        borderTopRightRadius:45,
        marginTop:40,
        paddingTop:30,
    },
    form:{
        flex:1,
        width:"100%",
        height: "auto",
        marginTop: 15,
        padding: 25,
    },
     formLabel:{
        color:"#1C223D",
        fontSize:20,
        paddingLeft:15,
        fontWeight:'bold',
     },
     input:{
        width:"90%",
        borderRadius:15,
        backgroundColor:"aliceblue",
        height:45,
        margin:12,
        paddingLeft:25,
     },

     buttonPost:{
        
        borderRadius:24,
        alignItems:"center",
        flexDirection:'row',
        justifyContent:"center",

        width:"50%",
        backgroundColor:"#1C223D",
        paddingTop:10,
        paddingBottom:15,
        marginLeft:90,
        marginTop:10,

     },
     textButtonPost:{
        fontSize:13,
        color:"aliceblue",
        fontWeight:"bold",
     },
    });


export default styles
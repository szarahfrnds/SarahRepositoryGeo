import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#E8E8E8',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    box:{     
        width: 350,
        height: 400,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15,
        
    },
    caixa:{
        width:'80%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:25,
        marginTop:10,
        backgroundColor:'#E8E8E8',
        borderColor:'#E8E8E8', 
    },
    title:{
        fontSize: 40,
        fontWeight:'bold'
    },
    caixas:{
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    btnOk:{
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        width:'50%',
        height:50,
        backgroundColor:'#FFA7B7',
        borderColor:'#E8E8E8', 
        alignItems:'center',
        justifyContent:'center',
    },

    textUser:{
        fontSize: 20, 
        color: 'black',
        

    }
   
})


export default styles
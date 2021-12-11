import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    loginPage:{
        backgroundImage: 'url("./img/login.png")',
        width: '500px',
        height: '500px',
        border: '2px solid teal',
        // marginTop: '200px',
        // position:'absolute',
        borderRadius: '5px',
        margin: 'auto',
        padding: '30px',
        "& input":{
            width: '100%',
            height: '40px',
            margin: '10px 0',
            padding: '0 5px',
            outline: 'teal',
            border: '1px solid teal',
            borderRadius: '10px'

        },
        "& button":{
            width: '150px',
            height: '40px',
            margin: '10px 0',
            padding: '0 5px',
            outline: 'teal',
            border: '1px solid teal',
            backgroundColor:"rgb(3 , 165 , 206)",
            color: 'white',
            fontWeight: '500',
        },
        "& a":{
            color: "rgb(3 , 165 , 290)",
            letterSpacing: '1.3px',
            fontWeight: '700',
            marginLeft:"30px"
    

        }
    
    },
    row:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }


}))
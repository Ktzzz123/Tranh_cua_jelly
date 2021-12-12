import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    history_page:{ 
        overflowX: 'auto',
        "& h2":{
            textAlign:'center',
            margin: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1.2px'
    
        },  
        "& h4":{
            textAlign:'center',
            margin: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1.2px'
           
        },
        "& table":{
            margin: 'auto',
            width:'100%'
        },
        "& th":{
            border: '1px solid #ddd',
            borderCollapse: 'collapse',
            textAlign: 'center',
            padding: '10px',
        },  
        "& tr":{
            border: '1px solid #ddd',
            borderCollapse: 'collapse'
        }, 
         "& td":{
            border: '1px solid #ddd',
            borderCollapse: 'collapse',
            textAlign: 'center',
            padding: '10px',
        },
        "& a":{
            color: 'teal'
        }


    },
   

}))
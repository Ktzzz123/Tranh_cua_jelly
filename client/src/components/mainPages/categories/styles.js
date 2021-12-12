import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    row:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '290px',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
    },

    categories:{
        maxWidth: '700px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: '30px auto',
         "& form":{
            width: '290px',
            marginBottom: '20px',
        },
        "& label":{
            display: 'block',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '10px',
        },
        "& input":{
            height: '35px',
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid #555',
            width: '210px',

            
        }
        , "& button":{
            height: '35px',
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid #555',
            width: '70px',
            background: '#555',
            color: 'white',
            marginLeft: '10px',
        },
    },
   



   

}))
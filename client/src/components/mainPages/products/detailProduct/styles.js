import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Container:{
        marginTop:'20px',
        width:'100%',
        // display: 'flex',
        // justifyContent:'space-around',
        // flexWrap:'wrap',
        padding: '50px',
        fontSize: '150%',
        border: 'solid 1px',
        alignItems: 'center',
        borderRadius: '10px'
    },
    images:{
        maxWidth: "800px",
        minWidth: "300px",
        height:'500px',
        objectFit:'cover',
        margin: 'auto',
        border: 'solid 1px #ddd',
        display: 'block'

    },
    box_detail:{
        marginTop:'20px',
        // maxWidth: '500px',
        justifyContent:'space-between',
        width:"100%",
        borderTop: '1px solid #ddd',
     
      
        "& h2":{
            textTransform: 'uppercase',
            color:'darkblue',
            letterSpacing:"2px",
            fontWeight: '2rem'
        },
        "$ p":{
            lineHeight:'1.5',
            margin: '10px 0',
            opacity:0.8,
        },
      
    },
    row:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cart:{
        background:"#333",
        color: 'white',
        marginTop: "10px",
        padding:'10px 25px',
        display: 'inline-block',
        textTransform: 'uppercase',
        letterSpacing: '2px',


    }
  
}))
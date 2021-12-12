import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Container:{
        marginTop:'20px',
        width:'60%',
        maxheight: '800px',
        display: 'flex',
        // justifyContent:'space-around',
        // flexWrap:'wrap',
        padding: '50px',
        fontSize: '150%',
        border: 'solid 1px',
        alignItems: 'center',
        borderRadius: '10px',
        margin: 'auto'
    },
    images:{
        maxWidth: "800px",
        minWidth: "300px",
        maxheight:'500px',
        objectFit:'cover',
        margin: 'auto',
        border: 'solid 1px #ddd',
        display: 'block'

    },
    box_detail:{
        paddingLeft: '20px',
        marginTop:'20px',
        // maxWidth: '500px',
        justifyContent:'space-between',
        width:"100%",
        // border: '1px solid #ddd',
     
      
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
        marginBottom: '30px'


    },
    product:{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
        justifyItems: 'center',
        margin: '0 20px',
    },
    fullImage:{
        // borderTop: '1px solid #ddd',
        
        padding: '20px',
        
        width: '90%',
        height: 'auto',
        "& img":{
            width: '100%',
            height: '100%',
        },
        margin:'auto'
    },
    CartItem:{
        width: '500px',
        height: '500px',
        position: 'relative',
        border: '1px solid #ccc',
        transform: 'scaleY(0.98)'
    },
    amount :{
        "& span":{
        color: 'crimson',
        padding: '0 20px',
        },
        "& button":{
            width: '40px',
            height: '40px',
            border: '1px solid #777',
            borderRadius: '5px'
        },
    },
    delete:{
        // position: 'absolute',
        // top:0,
        right: '5px',
        color: 'crimson',
        fontWeight: 900,
        cursor: 'pointer',
    },
    total:{
        width: '100%',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        "& h3":{
            color: 'crimson'
        }
    }
}))
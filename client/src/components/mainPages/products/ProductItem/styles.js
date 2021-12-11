import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    product_card:{
        maxWidth: '300px',
        minWidth: '300px',
        overflow:'hidden',
        height:'500px',
        padding:'15px',
        boxShadow:'0 0 15px #ddd',
        margin:'10px 0',
        position:'relative',
        // cursor: 'pointer'
    },
    image:{
        // alignItems:'center',
        margin: 'auto',
        width:'100px',
        height:'300px',
        display:'block',
        objectFit:'cover'
    },
  
   
    product_infor:{
        "& span":{
            color: 'red'
        },
        "& h2":{
            width:'100%',
            textOverflow:"ellipsis",
            overflow:'hidden',
            whiteSpace:'nowrap',
            textTransform:'capitalize',
            cursor: 'pointer',
            color: 'teal'
        },
        "& p":{
            width: '100%',
            display: '-webkit-box',
            webkitBoxOrient: 'vertical',
            webkitLineClamp: 3,
            height: '70px',
            overflow: 'hidden',
            color: '#323232',
        }
    },
    row_btn:{
        width:'100%',
        marginTop:'10px',
        display: 'flex',
        justifyContent:'space-between',
        backgroundColor: 'teal',
        "& a":{
            width: '50%',
            textTransform: 'uppercase',
            color: 'white',
            fontWeight: 600,
            letterSpacing: '2px',
            padding: '6px',
        },
        "& #btn_buy":{
            background: '#555',
            marginRight:"5px"
        },  
        "& # btn_view":{
            background: 'teal',
            marginLeft:"5px"
        }

    },
  
   
}))
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container:{
        padding: '0 20px',
        minHeight: '50px',
        width:'100%',
        overflow: 'hidden',
        display:'flex',
        flexWrap:'wrap',
        justifyContent: 'space-around',
        alignItems:'center',
        borderBottom:'1px solid #ddd',
        backgroundColor:'black',
        // background: '#ddd!important',
        position: 'sticky',
        top: 0
    },
    logo:{
        flex: 1,
        textTransform: 'uppercase',
        // color: 'black'
    },
    menu:{
        color: 'white!important'
    },
    navbarItem:{
        display:'flex',
        alignItems:'center',
      
    },
    navbarItem_item:{
        opacity:0.7,
        padding: '0 20px',
        '&:hover':{
            opacity: 1
        }
    },
    cart_icon:{
        position:  'relative',
        marginRight: '10px'
    },
    cart_icon_span:{
        background:'crimson',
        borderRadius: '20px',
        color: 'white',
        position: 'absolute',
        top: '-10px',
        right:'-10px',
        padding: ' 5px 7px',
        fontSize: '10px',


    }
    
  
   
}));
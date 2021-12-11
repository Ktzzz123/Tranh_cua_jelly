import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    products:{
        width: '100%',
        display: 'grid',
        GridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
        justifyItems: 'center',
        margin: '0 20px',
    }
}))
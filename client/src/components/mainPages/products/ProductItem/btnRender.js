import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import{GlobalState} from '../../../../GlobalState'
import useStyles from './styles'


const BtnRender = ({product, deleteProduct}) => {
    const classes = useStyles()
    const state = useContext(GlobalState)
    const [isAdmin]=state.userAPI.isAdmin
    const addCart = state.userAPI.addCart
    return (
        <div>
        {
            isAdmin? 
            <>
            <div className={classes.row_btn}>
            <Link id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Delete
                    </Link>
                <Link id="btn_view" to={`/edit_product/${product._id}`}>edit</Link>
                </div>

            </>:
            <div className={classes.row_btn}>
                <Link id="btn_buy" to='#!' onClick={()=>addCart(product)}>Buy</Link>
                <Link id="btn_view" to={`/detail/${product._id}`}>View</Link>
                </div>
         
        }
        </div>

              
    )
}

export default BtnRender

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import{GlobalState} from '../../../../GlobalState'
import useStyles from './styles'


const BtnRender = ({product}) => {
    const classes = useStyles()
    const state = useContext(GlobalState)
    const [isAdmin]=state.userAPI.isAdmin
    return (
        <div>
        {
            isAdmin? 
            <>
            <div className={classes.row_btn}>
                <Link id="btn_buy" to='#!'>Delete</Link>
                <Link id="btn_view" to={`/edit_product/${product._id}`}>edit</Link>
                </div>

            </>:
            <div className={classes.row_btn}>
                <Link id="btn_buy" to='#!'>Buy</Link>
                <Link id="btn_view" to={`/detail/${product._id}`}>View</Link>
                </div>
         
        }
        </div>

              
    )
}

export default BtnRender

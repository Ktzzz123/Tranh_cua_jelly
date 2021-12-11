import React from 'react'
import { Link } from 'react-router-dom'


import useStyles from './styles'


const BtnRender = ({product}) => {
    const classes = useStyles()
    return (
        <div>
               <div className={classes.row_btn}>
                <Link id="btn_buy" to='#!'>Buy</Link>
                <Link id="btn_view" to={`/detail/${product._id}`}>View</Link>
            </div>
         
        </div>
    )
}

export default BtnRender

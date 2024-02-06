import React from 'react'
import LayOver from './LayOver'
import classes from "../CSS/cart.module.css";
import { useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { useDispatch } from 'react-redux';
export default function Cart () {

    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const increaseQuantity = (event) => {
        dispatch(cartActions.addProductToCart({name:event.target.value}));
    }

    const descreaseQuantity = (event) => {
        dispatch(cartActions.removeProductFromCart({name:event.target.value}));
    }
  return (
    <LayOver >
        <div className={classes.cartContainer}>
            <div className={classes.cartHolder}>
                {cart.map((eachProduct)=>{
                    return <div className={classes.productContainer} key={eachProduct.name}>
                        <div className={classes.productHolder}>
                            <div className={classes.productImgContainer}>
                                <div className={classes.productImgHolder} style={{backgroundImage:`url(${eachProduct.imgUrl})`}}></div>
                            </div>
                            <div className={classes.productDetailsContainer}>
                                <div className={classes.productDetailsHolder}>
                                    <div className={classes.nameHolder}>
                                        <p className={classes.name} >{eachProduct.name}</p>
                                    </div>
                                    <div className={classes.colorHolder}>
                                        <p>Pink</p>
                                    </div>
                                    <div className={classes.qpHolder}>
                                        <p style={{color:'white'}} >{eachProduct.quantity}</p>
                                        <p style={{color:'white'}} >x</p>
                                        <p style={{color:'white'}} >{eachProduct.price}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.carActionContainer}>
                                <div className={classes.cartActionsHolder}>
                                    <div className={classes.addHolder}  >
                                        <button onClick={increaseQuantity} value={eachProduct.name}>+</button>
                                    </div>
                                    <div className={classes.removeHolder}>
                                        <button  onClick={descreaseQuantity} value={eachProduct.name}>-</button>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.priceContainer}>
                                <div className={classes.priceHolder}>
                                    <p>${parseInt(eachProduct.quantity) *  parseInt(eachProduct.price.slice(1))}.00</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                })}
            </div>
        </div>
    </LayOver>

  )
}

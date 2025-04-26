import React from 'react'
import './Cart.css'
import { food_list } from './../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from './../../Context/StoreContext';
import Item from 'antd/es/list/Item';

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  return (
    <div>
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br/>
            <hr/>
            {food_list.map((Item,index)=>{
              if(cartItems[Item._id]>0)
              {
                return(
                  <idv>
                  <div className='cart-items-title cart-items-item'>
                    <img src={Item.image} alt="" />
                  <p>{Item.name}</p>
                  <p>₹{Item.price}</p>
                  <p>{cartItems[Item._id]}</p>
                  <p>{Item.price*cartItems[Item._id]}</p>
                  <p onClick={()=>removeFromCart(Item._id)} className='cross'>x</p>
                    </div>
                    <hr/> 
                    </idv>
                )
              }
})}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2> Cart Total</h2>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>₹{getTotalCartAmount()}</p>
              <hr/>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
              <hr/>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()+2}</b>
              <hr/>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p> If you have PromoCode, Enter it Here</p>
              <div className="cart-proocode-input">
                <input type="text" placeholder='PromoCode' />
                <button>Apply</button>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Cart
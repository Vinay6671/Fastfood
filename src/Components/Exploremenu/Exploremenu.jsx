import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1> Explore Our Menu</h1>
        <p className='Explore-menu-text'>Granted, the dining experience doesn’t really allow you time to build a connection with the customer, but you can definitely utilize the time before and after the customer enters your restaurant to foster a better connection with them.  </p>
        <div className='Explore-menu-list'>
            {menu_list.map((item, index) => {
                return(
                    <div onClick={()=> setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index} className='Exlore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>
                        </div>

                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Exploremenu
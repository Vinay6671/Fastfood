import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Exprience Download <br/> Food App</p>
      <div className="app-donload-platform">
        <img src={assets.play_store} alt=''/>
        <img src={assets.app_store} alt=''/>
      </div>
    </div>
  )
}

export default AppDownload
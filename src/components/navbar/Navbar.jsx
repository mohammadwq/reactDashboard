import React from 'react'
import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search..' />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
          <LanguageOutlinedIcon className='icon'/>
          English
          </div>
          <div className="item">
          <NightlightOutlinedIcon className='icon'/>
          </div>
          <div className="item">
          <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className="item">
          <NotificationsNoneOutlinedIcon className='icon'/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <ChatOutlinedIcon className='icon'/>
          <div className="counter">3</div>
          </div>
          <div className="item">
          <FormatListBulletedOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
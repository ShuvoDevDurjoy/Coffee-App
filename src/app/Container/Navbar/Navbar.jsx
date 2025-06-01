'use client'
import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {

  const [menu_clicked, setMenuClicked] = useState(false);

  const toggleMenu = ()=>{
    setMenuClicked(!menu_clicked);
  }
  return (
    <nav className="navbar_main_container">
      <div className="navbar_inner_container">
        <div className="navbar_logo_container">
            <h2 className="navbar_logo cl_white">KOPICCO</h2>
        </div>
        <div className="nav_item_container navbar_desktop">
          <ul className="nav_items_list">
            <li className="list_item cl_white">
              <a className='nav_link cl_white' href="/">Home</a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white' href="/">About</a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white' href="/">Service</a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white' href="/">Menu</a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white' href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className='navbar_mobile_control' onClick={toggleMenu}>
          <span className='dropdown_icon_container'></span>
        </div>
      </div>
      <div className={`navbar_mobile pd_block_40 ${menu_clicked ? 'active': ''}`}>
          <ul className="nav_items_list flex fl_dir_col fl_jus_bt fl_al_cen gap_20">
            <li className="list_item cl_white">
              <a className='nav_link cl_white flex gap_20 fl_al_cen' href="/">
                <i className='fa fa-home'></i>
                <span>Home</span>
              </a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white flex gap_20 fl_al_cen' href="/">
                <i className='fas fa-info-circle'></i>
                <span>About</span>
              </a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white  flex gap_20 fl_al_cen' href="/">
                <i className='fas fa-laptop'></i>
                <span>Service</span>
              </a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white flex gap_20 fl_al_cen' href="/">
                <i className="fas fa-utensils"></i>
                <span>Menus</span>
              </a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white flex gap_20 fl_al_cen' href="/">
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;

'use client'
import { useState } from 'react';
import Link from 'next/link';
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
              <a className='nav_link cl_white' href="/Coffee-App">Home</a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white' href="/Coffee-App/about">About</a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white' href="/Coffee-App/service">Service</a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white' href="/Coffee-App/menu">Menu</a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white' href="/Coffee-App/reserve">Book Table</a>
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
              <a className='nav_link cl_white flex gap_20 fl_al_cen' href="/Coffee-App">
                <i className='fa fa-home'></i>
                <span>Home</span>
              </a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white flex gap_20 fl_al_cen' href="/Coffee-App/about">
                <i className='fas fa-info-circle'></i>
                <span>About</span>
              </a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white  flex gap_20 fl_al_cen' href="/Coffee-App/service">
                <i className='fas fa-laptop'></i>
                <span>Service</span>
              </a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white flex gap_20 fl_al_cen' href="/Coffee-App/menu">
                <i className="fas fa-utensils"></i>
                <span>Menus</span>
              </a>
            </li>
            <li className="list_item">
              <a className='nav_link cl_white flex gap_20 fl_al_cen' href="/Coffee-App/reserve">
                <i className="fas fa-calendar-check"></i>
                <span>Book Table</span>
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;

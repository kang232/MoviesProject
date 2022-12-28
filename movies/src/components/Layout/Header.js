import React, { useEffect, useRef } from "react";
import { CloseOutlined, BarsOutlined } from '@ant-design/icons';
import { notification, Input, Form } from 'antd';
import './Css/layout.css'
import { Link, useNavigate } from 'react-router-dom';

const { Search } = Input

export default function Header(props) {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const search = useRef()
  const menuRef = useRef()

  useEffect(() => {
    handleResetField()
  })
  const handleResetField = () => {
    form.resetFields()
  }

  const handleFocusInputSearch = () => {
    search.current.focus()
  }
  const handleSearch = (value) => {
    const menuContainer = menuRef.current
    const items = menuContainer.getElementsByClassName('header-menu-item')
    const reg = new RegExp(/[A-Za-z 0-9]/g)
    if (value && reg.exec(value)
      // && value !== '%' && value !== '#' && value !== ' '
    ) {
      for (var i = 0; i < items.length; i++) {
        const current = document.getElementsByClassName("active");
        if (current[0]) {
          current[0].className = current[0].className.replace(" active", "");
        }
      }
      navigate(`/movie/search/${value}`)
    } else {
      notification.warning({ message: 'Invalid search, try again' })
    }
  }

  useEffect(() => {
    const menuContainer = menuRef.current
    const items = menuContainer.getElementsByClassName('header-menu-item')
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("click", function toggleActive() {
        const current = document.getElementsByClassName("active");
        if (current[0]) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        return window.removeEventListener('click', toggleActive)
      });
    }
  }, [])

  return (
    <div className='header-container'>
      <div className='header-menu' id='id-header-menu'>
        <div className='header-menu-item-container' id='id-header-menu' ref={menuRef}>
          <Link to={'/'}>
            <div className='header-menu-item active'>Current Movies</div>
          </Link>
          <Link to={'/nowplaying'}>
            <div className='header-menu-item'>Now playing</div>
          </Link>
          <Link to={'/toprate'}>
            <div className='header-menu-item'>Top rate</div>
          </Link>
        </div>
      </div>
      <div className='header-right'>
        <Form form={form}>
          <Form.Item name='searchInput' >
            <Search style={{ marginTop: '7px', width: 400 }}
              placeholder="Search"
              onSearch={handleSearch} />
          </Form.Item>
        </Form>
      </div>
      <div className='header-mobile'>
        <input type={'checkbox'} id='header-check' className='header-input'></input>
        <label htmlFor='header-check'>
          <BarsOutlined style={{ fontSize: '30px' }}
            className='button-close'
            onClick={handleFocusInputSearch} />
        </label>
        <label htmlFor='header-check' className='header-overlay'>
        </label>
        <div className='header-menu-mobile'>
          <div className='header-menu-mobile-top'>
            <h1>Movies Project</h1>
            <label htmlFor='header-check'>
              <CloseOutlined style={{ fontSize: '24px' }} className='button-close' />
            </label>
          </div>
          <div className='header-menu-mobile-content'>
            <div className='header-menu-mobile-item'>
              <Search placeholder="Search" onSearch={handleSearch}
                style={{ width: '100%', margin: '20px 0', height: '35px' }}
                ref={search} />
              {/* <Link to="/">Current</Link>
              <Link to="/nowplaying">Now Playing</Link>
              <Link to="/toprate">Top Rate</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

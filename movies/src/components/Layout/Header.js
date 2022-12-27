import React, { useEffect, useCallback, useRef } from "react";
import { CloseOutlined, BarsOutlined } from '@ant-design/icons';
import { notification, Space, Menu, Input, Form } from 'antd';
import './Css/layout.css'
import { Link, useNavigate } from 'react-router-dom';

const { Search } = Input

export default function Header(props) {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const search = useRef()

  useEffect( () => {
    handleResetField()
  })
  const handleResetField = () => {
    form.resetFields()
  } 

  const handleFocusInputSearch = () => {
    search.current.focus()
  }
  const handleSearch = (value) => {
    if(value && value !== '/' &&value !=='%' && value !=='#'  && value !== ' ') {
      navigate(`/movie/search/${value}`)
    } else {
      notification.warning({message: 'Invalid search, try again'})
    }
  }

  return (
    <div className='header-container'>
      <header className="header">
        <div >
          <div className='header-bottom' >
            <div className='hedder-logo'>
            <Menu mode="horizontal" defaultSelectedKeys={['current']} >
              <Menu.Item key={'current'}>
                <Link to={'/'} >Current Movies</Link>
              </Menu.Item>
              <Menu.Item key={'nowPlaying'}>
                <Link to={'/nowplaying'} >Now playing</Link>
              </Menu.Item>
              <Menu.Item key={'topRate'}>
                <Link to={'/toprate'} >Top rate</Link>
              </Menu.Item>
            </Menu>
            </div>
            <div className='header-right'>
            <Form form={form}>
              <Form.Item name='searchInput' >
                <Search style={{marginTop: '7px', width: 400 }} 
                placeholder="Search"  
                onSearch={handleSearch} />
              </Form.Item>
            </Form>
            </div>
          </div>
          <div className='header-mobile'>
              <div style={{ marginRight: '30px' }}>
              </div>
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
                    ref={search}/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </header>
    </div>
  );
}

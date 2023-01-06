import React, { useEffect, useRef } from "react";
import { CloseOutlined, BarsOutlined } from '@ant-design/icons';
import { Input, Form } from 'antd';
import './Css/layout.css'
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../ContextProvider/SearchContextProvider';

const { Search } = Input

export default function Header(props) {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const search = useRef()
  const menuRef = useRef()
  const { handleChangeSearchData } = React.useContext(SearchContext);
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
    handleChangeSearchData(value)
    navigate(`/movie/search`)
  }
  useEffect(() => {
    const path = window.location.pathname
    handleChangeActiveMenu(path)
  }, [window.location.pathname])

  const handleChangeActiveMenu = (path) => {
    const current = document.getElementsByClassName("active");
    if(current.length) {
      current[0].className = current[0].className.replace(" active", "");
    }
    switch (path.slice(1, -1)) {
      case '':
        const current = document.getElementById('current');
        current.className += " active";
        break;
      case 'nowplayin':
        const nowPlaying = document.getElementById('nowPlaying');
        nowPlaying.className += " active";
        break;
      case 'toprat':
        const topRate = document.getElementById('topRate');
        topRate.className += " active";
        break;
      default:
        // TO DO
        break;
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
            <div className='header-menu-item active' id="current">Current Movies</div>
          </Link>
          <Link to={'/nowplaying'}>
            <div className='header-menu-item' id="nowPlaying">Now playing</div>
          </Link>
          <Link to={'/toprate'}>
            <div className='header-menu-item' id="topRate">Top rate</div>
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

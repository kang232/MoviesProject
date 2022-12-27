import { Col, Row, Space, Form, Input, Button } from 'antd';
import React from 'react';
import './Css/footer.css'
import { HeartOutlined, TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

export default function Footer(props) {

  const { language } = props;
  const validateMessages = {
    required: 'Vui lòng nhập email!',
    types: {
      email: 'Email không tồn tại',
    },
  };

  return (
    <footer>
    <hr/>
      <div className='footer-container'>
        <div className='footer-bot'>
          Made with <HeartOutlined /> by Tam Cong Ngo
        </div>
      </div>
    </footer>
  );
}

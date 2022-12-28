import React from 'react';
import './Css/footer.css'
import { HeartOutlined } from '@ant-design/icons';

export default function Footer(props) {
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

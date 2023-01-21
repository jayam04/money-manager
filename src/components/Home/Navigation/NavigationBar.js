import React from 'react';
import { Button, Space } from 'antd';

function NavigationBar() {
    return (
        <div className='navigationBar'>
          <Space wrap className='navigationBar_space'>
            <Button 
              className='navigationBar_loginButton' 
              shape='round' 
              type="primary" 
              style={{ margin: 5 }}
              href="/auth">
            Login / Signup
            </Button>
          </Space>
        </div>
    );
} 

export default NavigationBar;
import React, { useState } from 'react'
import {
  AppstoreOutlined,
    SettingOutlined,
  HomeOutlined,
  SmileOutlined,
  FireOutlined,
  SnippetsOutlined,
  MessageOutlined,
  FireFilled,
  UserOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import './style.css';
const items = [
  {
    label: 'Home',
    key: 'home',
    icon: (
      <HomeOutlined
        style={{
          fontSize: 20,
          color:"red"
        }}
      />
    ),
  },
  {
    label: 'Trending',
    key: 'a',
    icon: (
      <FireFilled
        style={{
          fontSize: 20,
          color:"orange"
        }}
      />
    ),
  },
  {
    label: 'User',
    key: 'SubMenu',
    icon: (
      <UserOutlined
        style={{
          fontSize: 20,
          color:"green"
        }}
      />
    ),
  },
  {
    label: 'MessageBoard',
    key: 'MessageBorad',
    icon: (
      <MessageOutlined
        style={{
          fontSize: 20,
          color:"blue"
        }}
      />
    ),
  },
  {
    label: 'Settings',
    key: 'Settings',
    icon: (
      <SettingOutlined
        style={{
          fontSize: 20,
        }}
      />
    ),
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
]
export const NavBar = () => {
  const [current, setCurrent] = useState('mail')
  const [them,setthem]=useState('light')
  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
      items={items}
      className='Menu'
      />
   
  )
}



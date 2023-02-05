import React from 'react';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router';

// function Navigation() {
//     return (
//         <React.StrictMode>
//             <h1 id="nav_mainheading">monymngr</h1>
//         </React.StrictMode>
//     )
// }

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// const items = [
//   getItem('Navigation One', 'sub1', <MailOutlined />, [
//     getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
//     getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
//   ]),
// //   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
// //     getItem('Option 5', '5'),
// //     getItem('Option 6', '6'),
// //     getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
// //   ]),
// //   {
// //     type: 'divider',
// //   },
//   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
//   getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
// ];

const items = [
    getItem('Dashboard', 'dashboard'),
    getItem('Transactions', 'transactions'),
    getItem('Settings', 'settings'),
    getItem('Old', 'o', null, [
      getItem('Authentication', 'oa'),
      getItem('Old Dashboard', 'od'),
    ], 'group')
]


const NavigationMenu = () => {

  const navigate = useNavigate()

  const onClick = (e) => {
    console.log('click ', e);

    navigate(`/${e['key']}`)
  };
  return (
    <React.StrictMode>
    <Menu
      onClick={onClick}
      style={{
        width: 256, fontSize: 15, 
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </React.StrictMode>
  );
};

export default NavigationMenu
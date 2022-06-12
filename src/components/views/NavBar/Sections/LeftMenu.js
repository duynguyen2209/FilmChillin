import React from 'react';
import { Menu } from 'antd';
import './LeftMenu.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="">
        <a href="/">Home Page</a>
      </Menu.Item>
      <SubMenu title={<span>Film Gerne</span>}>
        <MenuItemGroup title="Year release">
          <Menu.Item key="year:1">2021</Menu.Item>
          <Menu.Item key="year:2">2022</Menu.Item>
          <Menu.Item key="year:3">2022</Menu.Item>
          <Menu.Item key="year:4">2022</Menu.Item>
          <Menu.Item key="year:5">2022</Menu.Item>
          <Menu.Item key="year:6">2022</Menu.Item>
        </MenuItemGroup>
      </SubMenu>

      <SubMenu title={<span>Film Type</span>}>
        <MenuItemGroup>
          <Menu.Item key="type:1" >Advanture</Menu.Item>
          <Menu.Item key="type:2" >Horror</Menu.Item>
          <Menu.Item key="type:3" >Action</Menu.Item>
          <Menu.Item key="type:4" >Romantic</Menu.Item>
          <Menu.Item key="type:5" >Funny</Menu.Item>
          <Menu.Item key="type:6" >Musical</Menu.Item>
        </MenuItemGroup>
      </SubMenu>

      <SubMenu title={<span>Vietsub Film</span>} />
      <SubMenu title={<span>Series Movie</span>}>
        <MenuItemGroup >
          <Menu.Item key="setting:3">Korea</Menu.Item>
          <Menu.Item key="setting:4">ThaiLand</Menu.Item>
          <Menu.Item key="setting:5">Englands</Menu.Item>
          <Menu.Item key="setting:6">VietNam</Menu.Item>
          <Menu.Item key="setting:7">China</Menu.Item>
          <Menu.Item key="setting:8">Japan</Menu.Item>
        </MenuItemGroup>
      </SubMenu>

      <input className='input-search' type="text" placeholder="Search movie..." />

    </Menu>
  )
}

export default LeftMenu
import React from 'react';
import AddBurgerForm from './AddBurgerForm';

const MenuAdmin = (props) => (
  <div className="menu-admin">
    <h2>Управление Меню</h2>
    <AddBurgerForm addBurger={props.addBurger} />
  </div>
);

export default MenuAdmin;

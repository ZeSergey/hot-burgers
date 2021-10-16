import React from 'react';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';

const MenuAdmin = (props) => (
  <div className="menu-admin">
    <h2>Управление Меню</h2>
    {Object.keys(props.burgers).map((key) => (
      <EditBurgerForm
        key={key}
        burger={props.burgers[key]}
        burgerKey={key}
        deleteBurger={props.deleteBurger}
        updateBurger={props.updateBurger}
      />
    ))}
    <AddBurgerForm addBurger={props.addBurger} />
    <button onClick={props.loadSampleBurgers}> Загрузить бургеры </button>
  </div>
);

export default MenuAdmin;

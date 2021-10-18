import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';

const MenuAdmin = (props) => {
  const [photo, setPhoto] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        authHandler({ user });
      }
    });
  });
  const authHandler = async (authData) => {
    const { email, photoURL } = authData.user;
    setPhoto(photoURL);
    setUser(email);
  };

  const avatar = photo ? photo : '/images/avatar.png';

  return (
    <div className="menu-admin">
      {user ? (
        <div className="login-header">
          <div className="avatar">
            <img src={avatar} alt={user} />
          </div>
          <button className="buttonLogout" onClick={props.handleLogout}>
            Выйти
          </button>
        </div>
      ) : null}
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
};

MenuAdmin.propTypes = {
  burgers: PropTypes.object,

  deleteBurger: PropTypes.func,
  updateBurger: PropTypes.func,
  addBurger: PropTypes.func,
  loadSampleBurgers: PropTypes.func,
  handleLogout: PropTypes.func,
};

export default MenuAdmin;

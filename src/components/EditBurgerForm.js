import React from 'react';
import PropTypes from 'prop-types';

const EditBurgerForm = (props) => {
  const handleChange = (event) => {
    const updatedBurger = {
      ...props.burger,
      [event.currentTarget.name]:
        event.currentTarget.name === 'price'
          ? parseFloat(event.currentTarget.value) || 0
          : event.currentTarget.value,
    };
    props.updateBurger(props.burgerKey, updatedBurger);
  };

  return (
    <div className="burger-edit">
      <input
        onChange={handleChange}
        name="name"
        type="text"
        value={props.burger.name}
      />
      <input
        onChange={handleChange}
        name="price"
        type="text"
        value={props.burger.price}
      />
      <select
        onChange={handleChange}
        name="status"
        className="status"
        value={props.burger.status}
      >
        <option value="available"> Доступно!</option>
        <option value="unavailable">Не Доступно!</option>
      </select>
      <textarea onChange={handleChange} name="desc" value={props.burger.desc} />
      <input
        onChange={handleChange}
        name="image"
        type="text"
        value={props.burger.image}
      />
      <button onClick={() => props.deleteBurger(props.burgerKey)}>
        Удалить бургер
      </button>
    </div>
  );
};

EditBurgerForm.propTypes = {
  burger: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
    status: PropTypes.string,
  }),
  index: PropTypes.string,
  updateBurger: PropTypes.func,
  deleteBurger: PropTypes.func,
};

export default EditBurgerForm;

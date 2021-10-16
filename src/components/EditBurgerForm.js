import React from 'react';

const EditBurgerForm = (props) => {
  const handleChange = (event) => {
    const updatedBurger = {
      ...props.burger,
      [event.currentTarget.name]: event.currentTarget.value,
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

export default EditBurgerForm;

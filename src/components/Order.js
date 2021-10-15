import React from 'react';

const Order = (props) => {
  const renderOrtder = (key) => {
    const burger = props.burgers[key];
    const count = props.order[key];
    const isAvailable = burger && burger.status === 'available';
    if (!isAvailable) {
      return (
        <li className="unavailable" key={key}>
          Извените, {burger ? burger.name : 'бургер'} временно недоступен{' '}
        </li>
      );
    }
    return (
      <li key={key}>
        <span>
          <span>{count}</span>
          шт. {burger.name}
          <span>{count * burger.price} ₽</span>
          <button className="cancellItem">&times;</button>
        </span>
      </li>
    );
  };

  const orderIds = Object.keys(props.order);
  const total = orderIds.reduce((prevTotal, key) => {
    const burger = props.burgers[key];
    const count = props.order[key];

    const isAvailable = burger && burger.status === 'available';
    if (isAvailable) {
      return prevTotal + burger.price * count;
    }
    return prevTotal;
  }, 0);
  return (
    <div className="order-wrap">
      <h2>Ваш заказ</h2>
      <ul className="order">{orderIds.map(renderOrtder)}</ul>
      <div className="total">
        <div className="total_wrap">
          <div className="total_wrap-final">Итого: {total} ₽</div>
        </div>
      </div>
    </div>
  );
};
export default Order;

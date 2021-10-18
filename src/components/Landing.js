import React, { useState } from 'react';
import PropTypes from 'prop-types';
import restoraunts from '../sample-restaurants';

const Landing = (props) => {
  const [display, toggleDisplay] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const displayList = () => {
    toggleDisplay(!display);
  };

  const getTitle = (restaurant) => {
    const { title, url } = restaurant;

    toggleDisplay(false);
    setTitle(title);
    setUrl(url);
  };

  const goToRestaraunt = () => {
    props.history.push(`/restaurant/${url}`);
  };
  return (
    <div className="restaurant_select">
      <div className="restaurant_select_top">
        <div
          onClick={displayList}
          className="restaurant_select_top font-effect-outline"
        >
          {title ? title : 'Выбери ресторан'}
        </div>
        <div className="arrow_picker">
          <div className="arrow_picker-up"></div>
          <div className="arrow_picker-down"></div>
        </div>
      </div>
      {display ? (
        <div className="restaurant_select_bottom">
          <ul>
            {restoraunts.map((restaurant) => {
              return (
                <li onClick={() => getTitle(restaurant)} key={restaurant.id}>
                  {restaurant.title}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      {title && !display ? (
        <button onClick={goToRestaraunt}>Перейти в ресторан </button>
      ) : null}
    </div>
  );
};

Landing.propTypes = {
  history: PropTypes.object,
};

export default Landing;

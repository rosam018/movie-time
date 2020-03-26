import React from 'react';
import classNames from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import './Item.scss'
import Placeholder from "../../assets/images/posterPlaceholder.png";

const Item = ({ movie }) => (
    <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;
      const imageURL = `https://image.tmdb.org/t/p/w780${movie.poster_path}`;

      return (
        <div
          ref={elementRef}
          className={classNames('item', {
            'item--open': isActive,
          })}
        >
          <img src={movie.poster_path ? imageURL : Placeholder} alt={movie.title} />
          <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;

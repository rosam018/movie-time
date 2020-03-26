import React from "react";
import IconCross from "./../Icons/IconCross";
import "./Content.scss";
import { Link } from "react-router-dom";

const Content = ({ movie, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{
          "background-image": `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`
        }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.title}</div>
        <div className="content__description">{movie.overview}</div>
        <div className="mt-3">
          <Link className="btn btn-primary" to={"/movie/" + movie.id }>
            More info
          </Link>          
        </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;

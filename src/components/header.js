import React from "react";
import { Link , useHistory} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/images/logo.png";
import FacebookLogo from "../assets/images/social_media/facebook.png";
import InstagramLogo from "../assets/images/social_media/instagram.png";
import TwitterLogo from "../assets/images/social_media/twitter.png";


export default props => {
const searchRef = React.createRef();
let history = useHistory();

  const handleSearch = () => {
   console.log(searchRef.current.value)
   history.push("/search/" + searchRef.current.value)   
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg sticky-top bg-transparent">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Movie Time" />
          Movie Time
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto ml-5">
            <li className="nav-item">
              <Link className="nav-link" to="/genre">
                Genres
              </Link>
            </li>
          </ul>

          <span className="navbar-text">
            <a
              className="mr-2"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookLogo} alt="like us on facebook" />
            </a>
            <a
              className="mr-2"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramLogo} alt="follow us on instagram" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterLogo} alt="follow us on twitter" />
            </a>
          </span>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-8 offset-xl-2">
            <div className="input-group mb-3">
              <input ref={searchRef} type="text" className="form-control" placeholder="Search Movies by Title" aria-label="Search" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-primary" onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

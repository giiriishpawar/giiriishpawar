import React from 'react'
import PropTypes from 'prop-types';
import './Navbar.css';
import Alert from '../../../../views/Alerts/Alert';

export default function Navbar(props) {

  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid mq-flex-jc-sb">
            <a className="navbar-brand" href="/">{props.title}</a>
            <div class="icon-night-mode">
                <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
                    <span className="fa-solid fa-moon" onClick={props.toggleMode}></span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">{props.navBarMenu.single[0]}</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {Object.keys(props.navBarMenu.multi[0])[0]}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/">{props.navBarMenu.multi[0][Object.keys(props.navBarMenu.multi[0])]}</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        <div><Alert alert={props.alert}></Alert></div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

//Setting default props
 Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "Set about here"
 }
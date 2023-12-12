import React from "react";
import 'styles/navigation.css'
import logo from "assets/images/logo-wordmark-color.svg"

class Navigation extends React.Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }

    this.timeOutId = null;
  }

  onClickHandler = () => {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onBlurHandler = () => {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    });
  }

  onFocusHandler = () => {
    clearTimeout(this.timeOutId);
  }

  render() {
    return (
      <div className="nav__container">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <nav>
          <div
            onBlur={this.onBlurHandler}
            onFocus={this.onFocusHandler}
          >
            <button
              onClick={this.onClickHandler}
              className="dropdown__button"
              aria-haspopup="true"
              aria-expanded={this.state.isOpen}
            >
              Browse
              <i className="arrow down"></i>
            </button>
            {this.state.isOpen && (
              <ul className="dropdown__options">
                <li><a href="/oil-lovers-club">Oil Lover's Club</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            )}
          </div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/tours-events">Tours & Events</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    );
  }
}

export default Navigation;
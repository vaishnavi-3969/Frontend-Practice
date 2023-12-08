import React from "react";
import 'styles/navigation.css'
import logo from "assets/images/logo-wordmark-color.svg"

class Navigation extends React.Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }

    this.toggleContainer = React.createRef();
  }

  componentDidMount = () => {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount = () => {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler = () => {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onClickOutsideHandler = (event) => {
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <div className="nav__container">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <nav>
          <div ref={this.toggleContainer}>
            <button onClick={this.onClickHandler} className="dropdown__button">
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
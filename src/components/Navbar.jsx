import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Logo">Trippy</h1>
        <div className="menuicons" onClick={this.handleClick}>
          <img
            src={
              this.state.clicked
                ? "data:image/png;base64,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"
                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAHlBMVEX///8AAAAwMDCPj4/Ozs5SUlLk5OROTk7Jycnh4eHY6u0VAAAATUlEQVRoge3WwQ2AIAAEQRRF6b9hKyA+LoFEZwrYz32uFAAgd5x75LrH7bbF2jBe83hdE+95vK8ZFADeuRbT464FAF/mWkyPuxYA8AMP/eYHDy0CQYIAAAAASUVORK5CYII="
            }
          ></img>
        </div>
        <ul className={this.state.clicked ? "menu active" : "menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li>
                <img src={item.img}></img>
                <Link to={item.url} className={item.className}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;

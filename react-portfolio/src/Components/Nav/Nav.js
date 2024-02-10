import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="nav-container">
      <Link to="/">Work</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Nav;
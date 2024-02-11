import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="nav-container">
      <Link to="/"><h3>Work</h3></Link>
      <Link to="/about"><h3>About</h3></Link>
    </div>
  );
}

export default Nav;
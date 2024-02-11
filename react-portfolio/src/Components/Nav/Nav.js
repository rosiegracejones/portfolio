import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="nav-container">
      <Link to="/"><h3>work</h3></Link>
      <Link to="/about"><h3>about</h3></Link>
    </div>
  );
}

export default Nav;
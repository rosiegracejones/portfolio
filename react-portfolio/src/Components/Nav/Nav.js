import { Link } from "react-router-dom";

function Nav() {
	return (
		<div className="nav-container">
			<Link to="/"><h2>work</h2></Link>
      <Link to ="/about"><h2>about</h2></Link>
      {/* <Link to ="/contact"><h2>contact</h2></Link> */}
		</div>
	);
}

export default Nav;

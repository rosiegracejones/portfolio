import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import Work from "../../Pages/Work/Work";
import About from "../../Pages/About/About";
import "./App.css";
import Header from "../Header/Header";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Nav />
			<Routes>
				<Route exact path="/" element={<Work />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

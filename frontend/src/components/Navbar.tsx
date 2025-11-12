import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-green-600 p-4 text-white flex justify-around">
    <Link to="/">Home</Link>
    <Link to="/chatbot">Chatbot</Link>
    <Link to="/products">Products</Link>
  </nav>
);

export default Navbar;
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-white shadow-md sticky top-0 z-10">
      <Link
        to="/"
        className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-lg font-medium text-gray-800 hover:text-green-600 transition-colors"
      >
        About
      </Link>
    </nav>
  );
}

export default Navbar;

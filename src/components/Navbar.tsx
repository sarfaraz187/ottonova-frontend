import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="top-0 w-full fixed z-40 py-3 border-solid border-2">
      <div className="flex m-auto max-w-7xl gap-5">
        <Link to="https://www.ottonova.de/en">
          <img src="src/assets/company.png" height="40" width="180"></img>
        </Link>
        <button>Insurance</button>
        <button>Services</button>
      </div>
    </header>
  );
};

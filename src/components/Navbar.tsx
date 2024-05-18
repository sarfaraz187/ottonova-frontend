import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="top-0 w-full z-50 bg-white py-3 fixed">
      <div className="flex m-auto max-w-7xl gap-5">
        <Link to="/">
          <img
            src={`${import.meta.env.BASE_URL}company.png`}
            alt="Ottonova Logo"
            height="40"
            width="180"
          ></img>
        </Link>
        <button>Insurance</button>
        <button>Services</button>
      </div>
    </header>
  );
};

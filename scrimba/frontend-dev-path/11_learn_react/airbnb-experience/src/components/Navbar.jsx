import airbnbLogo from '../assets/images/airbnb-logo.svg';
import '../assets/css/Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav id="navbar">
        <div className="logo">
          <a href="/">
            <img src={airbnbLogo} alt="airbnb logo" />
          </a>
        </div>
      </nav>
    </>
  );
}

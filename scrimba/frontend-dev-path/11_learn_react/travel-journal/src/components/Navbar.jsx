import world from '../assets/images/world.svg';
import '../assets/css/Navbar.css';

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="wrapper">
        <img src={world} alt="world" />
        <h1>my travel journal</h1>
      </div>
    </nav>
  );
}

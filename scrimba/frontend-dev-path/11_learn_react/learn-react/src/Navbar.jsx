import reactLogo from './assets/react.svg'
import './App.css'

function Navbar() {
  return (
    <>
      <nav id="navbar">
        <div className="logo">
          <img src={reactLogo} alt="React Logo" />
          <h2>React Facts</h2>
        </div>
        <div className="info">
          <span>React Course - Project 1</span>
        </div>
      </nav>
    </>
  )
}

export default Navbar

import heroImage from '../assets/images/hero-image.webp';
import '../assets/css/Hero.css';

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="hero-img">
          <img src={heroImage} alt="Online Experience" />
        </div>
        <div className="hero-text">
          <h1>Online Experiences</h1>
        </div>
        <div className="hero-description">
          <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
      </section>
    </>
  );
}

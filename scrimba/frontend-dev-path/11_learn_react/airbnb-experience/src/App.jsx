import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data/data';

function App() {
  const cards = data.map((card) => {
    return (
      <Card
        img={card.coverImg}
        title={card.title}
        price={card.price}
        status={card.status}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        country={card.country}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div id="card--container">{cards}</div>
    </>
  );
}

export default App;

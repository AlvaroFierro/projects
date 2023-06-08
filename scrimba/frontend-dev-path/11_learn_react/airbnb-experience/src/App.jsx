import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data/data';

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} {...card} />;
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

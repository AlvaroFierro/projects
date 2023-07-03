import { useState } from 'react';

const App = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);

  const handleSizeSelect = (event) => {
    const selectedSize = event.target.value;
    const selectedTrailer = trailerData.find(
      (trailer) => trailer.size === selectedSize
    );

    setSelectedSize(selectedSize);
    setSelectedPrice(selectedTrailer ? selectedTrailer.price : 0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Selected size:', selectedSize);
    console.log(`The ${selectedSize} size is:`, selectedPrice);

    // Replace this with your server submission logic
    // Example code to send selected size to a server using fetch API
    try {
      const res = await fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ size: selectedSize, price: selectedPrice }),
      });

      if (!res.ok) {
        throw new Error('Error');
      } else {
        console.log('Contact Added');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const trailerData = [
    { size: 'Small', price: 50 },
    { size: 'Medium', price: 75 },
    { size: 'Large', price: 100 },
  ];

  return (
    <>
      <h3>Select Trailer Size:</h3>
      <form onSubmit={handleSubmit}>
        <select value={selectedSize} onChange={handleSizeSelect}>
          <option value="">Select Size</option>
          {trailerData.map((trailer, index) => (
            <option key={index} value={trailer.size}>
              {trailer.size}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;

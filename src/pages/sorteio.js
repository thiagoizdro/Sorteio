import MegaSenaLogo from '../components/megasenalog';
import { useState } from 'react';
import RandomNumber from '../components/RandoNumber';

const Sorteio = () => {
  const [numbers, setNumbers] = useState([]);

  const sortearNumeros = () => {
    const sortedNumbers = [];
    while (sortedNumbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 61);
      if (!sortedNumbers.includes(randomNumber)) {
        sortedNumbers.push(randomNumber);
      }
    }
    setNumbers(sortedNumbers.sort((a, b) => a - b));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <MegaSenaLogo />
      <h1>Sorteio Mega Sena</h1>
      <button onClick={sortearNumeros} style={{ margin: '20px', padding: '10px 20px' }}>Sortear Números</button>
      <div style={{ fontSize: '24px' }}>
        {numbers.length > 0 && (
          <div>{numbers.join(', ')}</div>
        )}
      </div>
    </div>
  );
};

export default Sorteio;

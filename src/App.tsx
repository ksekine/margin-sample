import React from 'react';
import Margin from './components/pages/Margin';
import styled from 'styled-components';

const Enclosure = styled.div`
  width: 100%;
  margin: 5rem auto;
  max-width: 50rem;
`;

const App: React.FC = () => {
  return (
    <Enclosure>
      <Margin />
    </Enclosure>
  );
}

export default App;

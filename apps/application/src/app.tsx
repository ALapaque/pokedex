import { Route, Routes } from 'react-router-dom';
import { Pokemons } from '@nx-pokemon/pages';
import { Header } from '@nx-pokemon/shared/ui';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Pokemons />} />
        <Route path="/search" element={<></>} />
      </Routes>
    </div>
  );
}

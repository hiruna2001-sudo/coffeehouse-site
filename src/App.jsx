import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="min-h-screen bg-coffee-background text-coffee-dark">
      <BrowserRouter>
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

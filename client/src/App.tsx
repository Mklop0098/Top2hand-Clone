
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { publicRoutes } from './routes';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartProvider } from './Context/Cart/cart.context';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header/>
          <Navbar />
          <Routes>
            {
              publicRoutes.map((route, key) => {
                const Page = route.component;
                return (
                  <Route
                    key={key}
                    path={route.path}
                    element={<Page />}
                  />
                )
        
              })
            }
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

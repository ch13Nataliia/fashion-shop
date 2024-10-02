import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Add from './pages/Add';
import Update from './pages/Update';
import NotFound from './pages/NotFound';
import List from './pages/List';
import About from './pages/About';
import Contact from './pages/Contact';
import WinterCollection from './pages/WinterCollection';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/winterCollection" element={<WinterCollection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
